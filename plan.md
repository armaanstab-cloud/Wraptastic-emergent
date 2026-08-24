# plan.md

## 1) Objectives
- Deliver a production-ready, cinematic premium website for **WRAPTASTIC AUTO CUSTOMS** using **React (CRA + craco), Tailwind, shadcn/ui, Framer Motion**, plus an optional **FastAPI + MongoDB** backend.
- Preserve authenticity of all vehicles and wraps. Real customer media is the product.
- Provide high-conversion UX:
  - Persistent **Get a Quote** CTA
  - Floating **WhatsApp** button with a **prefilled message**
  - Working links for **Google Business Profile**, **Instagram**, **TikTok**, **tel:** and **mailto:**
- Provide a portable quote form email solution compatible with static hosting (Netlify): **Web3Forms**.
- Ensure reliability: Quote requests are stored in **MongoDB** even if email delivery is not configured.

**Current status:** MVP delivered. Phase 1 POC complete. Phase 2 full site complete. End-to-end tests passed (Backend 6/6, Frontend 8/8).

---

## 2) Implementation Steps

### Phase 1: Core POC (isolation, fix-until-works)
**Goal:** Validate AI enhancement + quote submission pipeline with real assets.

**Status:** ✅ Completed

**User stories (POC)**
1. As an admin, I can enhance a real photo and verify the car details are unchanged.
2. As an admin, I can submit a quote payload and confirm it is saved in MongoDB.
3. As an admin, I can validate a portable email delivery path (Web3Forms) for Netlify.

**Completed steps**
1. Implemented `poc/phase1_poc.py`:
   - Downloads the 2 still photos (Tesla + Corvette detail) from provided URLs.
   - Calls Nano Banana (Gemini image edit) to apply a premium dark cinematic grade.
   - Saves enhanced outputs to `/app/poc/out/`.
2. Validated quote pipeline:
   - Inserts sample quote into MongoDB.
   - Confirms Web3Forms payload structure.
3. Result:
   - AI enhancement **preserved exact vehicles** and improved cinematic look.
   - MongoDB persistence works.

**Env used**
- `EMERGENT_LLM_KEY` (provided)
- `MONGO_URL` / `DB_NAME` (already in project)
- Web3Forms key intentionally optional (see Phase 2).

---

### Phase 2: V1 App Development (build around proven core)
**Goal:** Build the full cinematic site with all pages, motion, real media, and functional quote capture.

**Status:** ✅ Completed

**User stories (V1)**
1. As a visitor, I immediately see a cinematic hero video and clear CTAs.
2. As a mobile user, I can tap WhatsApp and open chat with a prefilled quote message.
3. As a visitor, I can browse services and see correct “Starting at” pricing vs quote-only items.
4. As a visitor, I can filter the Work gallery and view media in a lightbox.
5. As a visitor, I can submit a quote request and see a clear success state.
6. As the business, I can review quote submissions stored in MongoDB.

**Delivered implementation**

**Frontend (React CRA + craco)**
1. Global design system implemented:
   - Deep black/charcoal base, chrome/silver typography, controlled red accents.
   - Chrome heading treatment applied selectively.
   - Cinematic grading overlays and CSS video filters to keep backgrounds subdued.
2. Pages delivered:
   - Home, Services, Our Work, About, Reviews, Contact/Get a Quote.
3. Home sections delivered:
   - Hero (real Dodge Viper video)
   - Brand intro
   - Premium services grid
   - Scroll-driven 2.5D vehicle transition
   - Featured work
   - Why Wraptastic
   - Brands  materials
   - Review belt
   - Final CTA and footer
4. Gallery delivered:
   - Category filters, masonry layout, mixed image/video support.
   - Lightbox dialog for fullscreen viewing.
   - Config-driven structure ready for more media.
5. Quote form delivered:
   - Stores in backend MongoDB.
   - Also submits directly to Web3Forms when `REACT_APP_WEB3FORMS_KEY` is set.
   - Honeypot field included.
6. WhatsApp delivered everywhere:
   - Prefilled message link: `https://wa.me/16474821403?text=<urlencoded>`
   - Present in nav, hero, contact, footer, and floating button.
7. SEO + portability:
   - Meta tags, OpenGraph, JSON-LD LocalBusiness.
   - README for portability and Netlify deployment.
   - Netlify SPA `_redirects` file added.

**Backend (FastAPI + MongoDB)**
1. Endpoints delivered:
   - `POST /api/quotes` with validation and honeypot rejection.
   - `GET /api/quotes` for stored submissions.
   - `GET /api/health` for DB connectivity.
2. Storage:
   - `quotes` collection with created timestamp.

**Testing results**
- ✅ Backend: 6/6 passed
- ✅ Frontend: 8/8 passed
- ✅ No critical issues reported

---

### Phase 3: Polish, performance, and hardening
**Goal:** Optional follow-up improvements, content expansion, and operational readiness.

**Status:** ⏳ Optional (MVP already delivered)

**User stories (Polish)**
1. As a user on slow mobile, the site loads quickly and videos do not block interactivity.
2. As a user, animations feel premium and never distracting.
3. As a visitor, I can always find the Get a Quote CTA without scrolling.
4. As the business, I can rely on quote submissions even if Web3Forms is down.

**Recommended steps (optional)**
1. Performance hardening:
   - Optional conversion of posters to WebP/AVIF.
   - Additional video compression ladder if new 4K assets are heavy.
   - Fine-tune lazy loading thresholds.
2. Form resilience:
   - Clearer UI copy indicating whether email delivery is configured.
   - Optional retry logic for backend submission.
3. Accessibility polish:
   - Run automated a11y checks, verify focus rings, test reduced-motion paths.

**Conclude Phase 3**
- One full regression test across pages and mobile viewport emulation.

---

### Phase 4: Content expansion and gallery scaling (post-V1)
**Goal:** Scale up content as the full 4K media library is uploaded.

**Status:** ⏳ Ready when assets arrive

**User stories (Expansion)**
1. As a visitor, I can browse many projects without performance drops.
2. As the business, I can add new media by editing a single config file.
3. As the business, I can feature or pin selected projects on Home.

**Steps**
1. Add new real photos/videos into `frontend/public/assets`.
2. Append items in `frontend/src/lib/site.js` under `GALLERY`.
3. Optionally add:
   - More featured builds.
   - Additional gallery sections (project writeups) if desired.
   - Optional future Mongo-driven gallery model.

---

## 3) Next Actions
1. **User action:** Add `REACT_APP_WEB3FORMS_KEY` in the frontend environment to enable live email delivery to `wraptasticautocustoms@gmail.com`.
2. **User action:** Upload the full 4K photo/video collection. Gallery is ready to accept more items.
3. Optional: Add more featured projects and expand categories as content grows.

---

## 4) Success Criteria
- ✅ POC passed: AI enhancement preserved vehicles; Mongo insert works.
- ✅ V1 site delivered: all pages present, premium styling, cinematic hero video, responsive excellence, working CTAs.
- ✅ Quote flow: always stores in Mongo; emails send once Web3Forms key is set; clear user feedback states.
- ✅ Gallery: filtering + lightbox + video support; structured for easy future media additions.
- ✅ SEO + schema present; no banned content (no street address, no fake claims, no em dashes).
