# plan.md

## 1) Objectives
- Deliver a **production-ready, cinematic, premium (10/10)** website for **WRAPTASTIC AUTO CUSTOMS** using **React (CRA + craco), Tailwind, shadcn/ui, Framer Motion** with an optional **FastAPI + MongoDB** backend for quote logging.
- Complete a **major redesign / visual overhaul** (typography, motion system, premium details, 3D depth) while keeping:
  - **Hero + Gallery** showcasing **real Wraptastic business work** (no AI-generated replacement cars).
  - Brand palette: **deep blacks / charcoal**, **metallic silver/chrome**, **subtle red accent**.
- Keep conversion UX strong and real:
  - Premium **Get a Quote** CTA and persistent **WhatsApp** CTA (prefilled message).
  - Working links: Google Business Profile, Instagram, TikTok, tel/mailto.
- Maintain portability to **Netlify** (SPA redirects) and avoid breaking static deploy compatibility.
- Quote form must send emails via **Web3Forms** (once key is provided) to `wraptasticautocustoms@gmail.com`, and still **log to MongoDB** for redundancy.
- Improve media quality:
  - Enhance the vertical “Viper/Dodge” hero video (source ~464×832) with subtle dark tint + cinematic grade, reduce distracting background presence, preserve car authenticity.
  - Enhance and integrate uploaded images (preserve vehicle; background effects allowed).

**Current status:** ✅ Premium Cinematic Overhaul **completed**, **tested 100%** (`/app/test_reports/iteration_2.json`). Remaining items are **user-config + future content drops**.

---

## 2) Implementation Steps

### Phase 1: Core POC (isolation, fix-until-works)
**Goal:** Validate AI enhancement + quote submission pipeline with real assets.

**Status:** ✅ Completed

**Completed steps**
1. Implemented Nano Banana image enhancement POC (preserving real vehicles).
2. Validated quote pipeline:
   - Saves to MongoDB.
   - Web3Forms payload structure confirmed.

---

### Phase 2: V1 App Development (build around proven core)
**Goal:** Full site built with pages, motion, real media, and functional quote capture.

**Status:** ✅ Completed (superseded by redesign request)

**Delivered**
- Pages: Home, Services, Work, About, Reviews, Contact.
- Gallery: filters + masonry + lightbox.
- Quote form: Web3Forms (when key set) + MongoDB backup.
- WhatsApp CTA + SEO + Netlify portability + tests passed.

---

### Phase 3: Premium Cinematic Overhaul (MAJOR REDESIGN)
**Goal:** Raise visual quality from **4/10 → 10/10** with a premium motion/typography/art-direction system.

**Status:** ✅ Completed (100% tested)

**User decisions locked in (implemented)**
- Creative freedom used for premium elements, while **hero + gallery remain real business work**.
- Replaced scroll animation with a signature **spinning wheel + speed streaks set-piece**.
- Headings/subheadings updated to match aggressive logo vibe (display font), while keeping readability.
- Navbar logo: **bigger** and **transparent** (black box removed).
- WhatsApp + Get a Quote buttons: redesigned to look **premium/fancy**.
- Reviews: **infinite marquee belt** with **manual drag/scroll**.
- Instagram feed section implemented with a clear “live feed” path.
- Viper/Dodge video: enhanced quality + subtle dark tint + vignette; background presence minimized via grading.
- New images: enhanced and integrated (Durango, Infiniti Q50, Corvette wheel, Viper still, air freshener).
- Racing stripes: sourced license-safe stock photo for service representation.
- Services page: **car pictures next to service name**.
- Credits used efficiently (batch enhancement pipeline).

#### Phase 3A: Design system refresh (typography + components + motion)
**Status:** ✅ Completed

**Delivered**
1. **Typography upgrade**
   - Display: **Road Rage** for headings/subheadings (aggressive logo-like vibe)
   - Body: **Barlow** (premium readable)
   - Mono: **IBM Plex Mono** (microcopy)
2. **Premium component kit**
   - New pill CTAs: `CtaPrimary`, `CtaChrome`, `CtaWhatsApp` with chrome edges + shine sweep + tactile states.
   - Card system: hairline borders, glass blur, sheen sweep.
   - Refined tokens in `index.css` (chrome gradients, red glow, noise overlay, marquee mask).
3. **Motion system**
   - Upgraded hero parallax and section reveals.
   - Reduced-motion fallbacks for the wheel set-piece and marquee.

**Acceptance criteria:** ✅ Met (premium within first screen; coherent system)

#### Phase 3B: Asset pipeline (image/video enhancement + logo transparency)
**Status:** ✅ Completed

**Delivered**
1. **Logo transparency**
   - Created `logo-transparent.png` (black box removed) and updated navbar sizing.
2. **Enhanced images (Nano Banana)**
   - `viper-still.png` (residential background minimized; vehicle preserved)
   - `durango-black.png` (cinematic grade; lifted to avoid crushing blacks)
   - `infiniti-black.png`
   - `corvette-wheel.png`
   - `brand-freshener.png`
3. **Video enhancement (ffmpeg)**
   - `viper-enhanced.mp4` (2× upscale + denoise + sharpen + grade + subtle dark tint + vignette)
   - `corvette-enhanced.mp4`
   - Posters: `viper-poster.jpg`, `corvette-poster.jpg`
4. **Wheel spin asset**
   - `wheel-spin.png` generated straight-on (shop’s real wheel), circular alpha mask for smooth spin.
5. **Racing stripes**
   - `racing-stripes.jpg` sourced and integrated.
6. **Fixes / hygiene**
   - Fixed swapped `tesla-purple.png` / `corvette-green.png` contents from earlier iteration.
   - Cleaned raw uploads from `public/assets` after enhancement.

**Acceptance criteria:** ✅ Met (cohesive, high-end media; video looks intentional)

#### Phase 3C: Frontend rebuild (Home + Services + Reviews + Instagram)
**Status:** ✅ Completed

**Delivered**
- **Home**
  - New `CinematicHero` with chrome display headline, improved CTA cluster, stat chips.
  - New `WheelSpeedScroll` set-piece (240vh pinned): wheel translates + rotates with speed streaks and large background message.
  - Featured Builds, Why Us, Brands marquee, Reviews belt, Instagram grid, final CTA.
- **Reviews**
  - `ReviewBelt` infinite auto-scroll, hover pause, and fully draggable.
- **Instagram**
  - `InstagramFeed` curated grid by default.
  - Optional live mode via env var `REACT_APP_INSTAGRAM_FEED_URL` (e.g., Behold JSON feed).
- **Services**
  - Image next to service name for every service section.
  - Pricing correctness preserved:
    - PPF **Starting at $1,999+** (plus tiers)
    - Tint **Starting at $199+**
    - Ceramic **Starting at $249+**
- **Work page**
  - Gallery preserved (real work) + Instagram section added.
- **Global UI**
  - Premium `FloatingWhatsApp` pill.
  - Removed old `ScrollVehicleTransition`.

**Acceptance criteria:** ✅ Met (mobile-first, expensive CTAs, smooth belt, IG shipped)

#### Phase 3D: Instagram “Live Feed” feasibility + requirements
**Status:** ✅ Implemented (with clear requirements)

**Reality check (still true)**
- Instagram does **not** allow truly “no-auth” live fetching in production.

**Shipped approach**
- Curated grid works with **zero auth**.
- Live updates supported via third-party feed URL:
  - Set `REACT_APP_INSTAGRAM_FEED_URL` (recommended: Behold.so JSON feed)

---

### Phase 4: Testing, performance, and launch readiness
**Goal:** Ensure redesign doesn’t regress functionality, SEO, or portability.

**Status:** ✅ Completed

**Delivered**
1. Regression tests passed:
   - Quote form → backend `/api/quotes` → MongoDB
   - WhatsApp CTA
   - Gallery filters + lightbox
   - Mobile responsiveness
2. Motion QA:
   - Reduced motion fallbacks present
   - Scroll set-piece performance verified
3. Performance pass:
   - Posters in place, lazy-loading preserved
4. Updated screenshots captured (desktop + mobile)

---

## 3) Next Actions
1. **Web3Forms key (user action required) — Enable Email**
   - Go to https://web3forms.com and create a free access key using
     `wraptasticautocustoms@gmail.com`.
   - Add it to your hosting environment (Netlify/Vercel/local CRA) as:
     - `REACT_APP_WEB3FORMS_KEY=YOUR_KEY_HERE`
   - Redeploy. Quote requests will email directly to that inbox.
   - Note: without the key, the form still logs to MongoDB (backend) successfully.

2. **Instagram live feed (optional user action)**
   - Create a feed URL (recommended: https://behold.so) and set:
     - `REACT_APP_INSTAGRAM_FEED_URL=https://feeds.behold.so/XXXX`
   - Redeploy to enable live Instagram thumbnails and reel previews.

3. **Asset uploads (user action, ongoing)**
   - Continue uploading more real 4K photos/videos (5 at a time is fine).
   - We will enhance + integrate by adding entries into `GALLERY` in `frontend/src/lib/site.js`.

---

## 4) Success Criteria
- ✅ Visual quality: premium cinematic look (target **10/10**) achieved.
- ✅ Hero + gallery remain **authentic real business work** (no AI replacement vehicles).
- ✅ Scroll set-piece: wheel/speed animation feels premium and smooth on mobile.
- ✅ Navbar: larger transparent logo; CTAs look high-end.
- ✅ Reviews belt: infinite marquee + manual user control.
- ✅ Instagram section shipped with a clear path to “live” updates.
- ✅ Quote flow works:
  - Always logs to MongoDB.
  - Emails send via Web3Forms once `REACT_APP_WEB3FORMS_KEY` is configured.
- ✅ SEO + schema preserved; Netlify portability intact; no fake functionality.
