"""Batch 3 asset enhancement for WRAPTASTIC (new uploads + corvette full body)."""

import asyncio
import base64
import os

from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

ASSETS = "/app/frontend/public/assets"

BASE = (
    "Enhance this real photograph of a customized car for a premium automotive website. "
    "Apply a dark cinematic color grade: deep blacks, rich charcoal tones, higher contrast, "
    "controlled highlights, crisp sharp details as if shot in 4K, subtle reflections and a very "
    "subtle warm rim light. Make it look like a high-end luxury car advertisement. "
    "CRITICAL: Do NOT change the vehicle in any way. Keep the exact same car, same wrap color and "
    "finish, same wheels, body shape, proportions, headlights, badges and every physical detail "
    "identical to the original. Only improve lighting, color grading, contrast, sharpness and "
    "background mood. The car must remain 100 percent the same real vehicle."
)

JOBS = [
    {
        "src": f"{ASSETS}/raw-a.png",
        "out": f"{ASSETS}/bmw-m5.png",
        "prompt": BASE + (
            " Additionally: keep the motion blur of this rolling shot, darken the bright sky and "
            "green background into a moody dusk tone so the black and red BMW pops dramatically."
        ),
    },
    {
        "src": f"{ASSETS}/raw-b.png",
        "out": f"{ASSETS}/cybertruck-green.png",
        "prompt": BASE + (
            " Additionally: keep the city towers in the background but darken the bright daytime sky "
            "into a moody cinematic dusk tone with the matte green truck crisp and dominant."
        ),
    },
    {
        "src": f"{ASSETS}/raw-c.png",
        "out": f"{ASSETS}/tesla-side.png",
        "prompt": BASE + (
            " Additionally: darken the bright overcast sky and background trees into a dark moody "
            "dusk atmosphere so the matte purple Tesla pops with controlled highlights."
        ),
    },
    {
        "src": f"{ASSETS}/raw-d.png",
        "out": f"{ASSETS}/mercedes-black.png",
        "prompt": BASE + (
            " Additionally: darken the grass and road background into a moody cinematic tone so the "
            "matte black Mercedes with its lit headlights pops dramatically."
        ),
    },
    {
        "src": "/tmp/cv8.jpg",
        "out": f"{ASSETS}/corvette-full.png",
        "prompt": (
            "Enhance this real photograph of a green Chevrolet Corvette Z06 at dusk for a premium "
            "automotive website. Dramatically improve sharpness and clarity as if shot in 4K, remove "
            "compression artifacts and noise, deepen the blacks, keep the moody dusk atmosphere, add "
            "subtle glow around the lit headlights and crisp reflections on the gloss green wrap. "
            "CRITICAL: Do NOT change the vehicle. Keep the exact same car, wrap color, wheels, red "
            "brake calipers, body shape and every physical detail identical. Also keep the street "
            "lamp and dusk setting, just darker, cleaner and more cinematic."
        ),
    },
]


async def enhance(job, api_key):
    from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

    name = os.path.basename(job["out"])
    try:
        with open(job["src"], "rb") as f:
            b64 = base64.b64encode(f.read()).decode("utf-8")
        chat = LlmChat(
            api_key=api_key,
            session_id=f"wraptastic-b3-{name}",
            system_message="You are a professional automotive photo retoucher.",
        ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
            modalities=["image", "text"]
        )
        msg = UserMessage(text=job["prompt"], file_contents=[ImageContent(b64)])
        text, images = await chat.send_message_multimodal_response(msg)
        if images:
            with open(job["out"], "wb") as f:
                f.write(base64.b64decode(images[0]["data"]))
            print(f"OK {name} ({os.path.getsize(job['out'])//1024} KB)")
            return True
        print(f"NOIMG {name}: {str(text)[:100]}")
        return False
    except Exception as e:
        print(f"ERR {name}: {e}")
        return False


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    ok = 0
    for job in JOBS:
        if await enhance(job, api_key):
            ok += 1
    print(f"DONE {ok}/{len(JOBS)}")


if __name__ == "__main__":
    asyncio.run(main())
