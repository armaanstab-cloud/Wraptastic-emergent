from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Wraptastic Auto Customs API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ----------------------- Models -----------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class QuoteCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str = Field(..., min_length=1, max_length=120)
    phone: str = Field(..., min_length=3, max_length=40)
    email: EmailStr
    vehicle_make: str = Field(default="", max_length=80)
    vehicle_model: str = Field(default="", max_length=80)
    vehicle_year: str = Field(default="", max_length=10)
    service: str = Field(default="", max_length=140)
    preferred_contact_method: str = Field(default="whatsapp", max_length=30)
    message: str = Field(default="", max_length=4000)
    # honeypot: must remain empty for real humans
    company: Optional[str] = Field(default="", max_length=200)


class Quote(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    phone: str
    email: str
    vehicle_make: str = ""
    vehicle_model: str = ""
    vehicle_year: str = ""
    service: str = ""
    preferred_contact_method: str = "whatsapp"
    message: str = ""
    created_at: str


# ----------------------- Routes -----------------------
@api_router.get("/")
async def root():
    return {"message": "Wraptastic Auto Customs API is running"}


@api_router.get("/health")
async def health():
    try:
        await db.command("ping")
        return {"status": "ok", "db": "connected"}
    except Exception as e:
        logger.error(f"health check failed: {e}")
        return {"status": "degraded", "db": "error"}


@api_router.post("/quotes", response_model=Quote)
async def create_quote(payload: QuoteCreate):
    # Reject bots that fill the hidden honeypot field
    if payload.company:
        raise HTTPException(status_code=400, detail="Rejected")

    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name.strip(),
        "phone": payload.phone.strip(),
        "email": str(payload.email).strip(),
        "vehicle_make": payload.vehicle_make.strip(),
        "vehicle_model": payload.vehicle_model.strip(),
        "vehicle_year": payload.vehicle_year.strip(),
        "service": payload.service.strip(),
        "preferred_contact_method": payload.preferred_contact_method.strip(),
        "message": payload.message.strip(),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.quotes.insert_one(dict(doc))
    logger.info(f"New quote stored: {doc['id']} ({doc['name']})")
    return Quote(**doc)


@api_router.get("/quotes", response_model=List[Quote])
async def list_quotes():
    quotes = await db.quotes.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return quotes


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
