"""Batch 2 asset enhancement for WRAPTASTIC redesign.

1. Nano banana cinematic enhancement of new photos (preserve vehicle 100%).
2. Special handling: Viper still -> de-emphasize residential background.
3. Wheel: generate straight-on circular wheel render of the SAME wheel on pure black
   (for the scroll spin set-piece).
"""

import asyncio
import base64
import os

from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

ASSETS = "/app/frontend/public/assets"

BASE_PROMPT = (
    "Enhance this real photograph of a customized car for a premium automotive website. "
    "Apply a dark cinematic color grade: deep blacks, rich charcoal tones, higher contrast, "
    "controlled highlights, crisp sharp details as if shot in 4K, subtle reflections, and a very "
    "subtle warm/red rim light. Make it look like a high-end luxury car advertisement shot. "
    "CRITICAL: Do NOT change the vehicle in any way. Keep the exact same car, the exact same wrap "
    "color and finish, the exact same wheels, body shape, proportions, headlights, badges, decals "
    "and every physical detail identical to the original. Only improve lighting, color grading, "
    "contrast, sharpness and background mood. The car must remain 100 percent the same real vehicle."
)

JOBS = [
    {
        "src": f"{ASSETS}/new5.png",
        "out": f"{ASSETS}/viper-still.png",
        "prompt": BASE_PROMPT + (
            " Additionally: strongly de-emphasize and minimize the residential house and suburban "
            "background. Darken the background dramatically, add heavy cinematic depth-of-field blur "
            "and a dark moody atmosphere behind the car so the background is barely noticeable, as if "
            "the car was shot at dusk with studio lighting on the car. Keep the road surface under the "
            "car. The red Dodge Viper itself must stay identical, bright and crisp."
        ),
    },
    {
        "src": f"{ASSETS}/new2.png",
        "out": f"{ASSETS}/durango-black.png",
        "prompt": BASE_PROMPT + (
            " Additionally: darken the sky and background trees into a moody dusk atmosphere so the "
            "matte black SUV pops with controlled highlights on its satin wrap."
        ),
    },
    {
        "src": f"{ASSETS}/new3.png",
        "out": f"{ASSETS}/infiniti-black.png",
        "prompt": BASE_PROMPT + (
            " Additionally: darken the overcast sky into a moody cinematic tone, keep the rain drops "
            "on the paint crisp and glossy."
        ),
    },
    {
        "src": f"{ASSETS}/new4.png",
        "out": f"{ASSETS}/corvette-wheel.png",
        "prompt": BASE_PROMPT + (
            " Additionally: darken the background trees and sky so the green fender, black wheel and "
            "orange brake caliper pop dramatically."
        ),
    },
    {
        "src": f"{ASSETS}/new1.png",
        "out": f"{ASSETS}/brand-freshener.png",
        "prompt": (
            "Enhance this real product photograph of a 'WRAPTASTIC' car air freshener hanging inside "
            "a car for a premium automotive brand website. Apply a dark cinematic color grade with "
            "deep blacks, crisp 4K sharpness and controlled highlights. CRITICAL: keep the product, "
            "its logo text, shape, string and position exactly identical. Only improve lighting, "
            "sharpness and mood."
        ),
    },
    {
        "src": f"{ASSETS}/new4.png",
        "out": f"{ASSETS}/wheel-spin.png",
        "prompt": (
            "Using this photo as reference, create a perfectly straight-on, front-facing view of this "
            "exact same wheel: gloss black 5-spoke star wheel with the orange brake caliper and "
            "drilled rotor visible behind the spokes, with the same tire. Center the wheel perfectly "
            "in a square frame, viewed dead-on at 90 degrees so it is a perfect circle. Background "
            "must be pure solid black (#000000). Dramatic studio lighting with subtle specular "
            "highlights on the spokes. Photorealistic, crisp 4K detail."
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
            session_id=f"wraptastic-b2-{name}",
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
