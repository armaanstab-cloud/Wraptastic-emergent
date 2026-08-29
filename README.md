# Wraptastic Auto Customs - Website

A premium, cinematic website for Wraptastic Auto Customs (Brampton, Ontario).
Built with React (CRA), Tailwind CSS, shadcn/ui and Framer Motion.

**This is a fully static site.** There is no backend, no database and no server
to run or pay for. The built output is plain HTML/CSS/JS that can be dropped on
any static host.

## Structure
- `frontend/` - the entire site (pages, components, media in `public/assets`)
- `frontend/src/lib/site.js` - **all business content in one file**: contact
  info, services, pricing, gallery, reviews, brands, policies

## Running locally

Requirements: Node.js 18+ and Yarn.

```bash
cd frontend
yarn install
yarn start          # http://localhost:3000
```

Production build:

```bash
cd frontend
yarn build          # outputs to frontend/build
```

## Quote form (Web3Forms)

The quote form emails submissions straight to the shop inbox with no backend.
**This is already set up** - the live access key is committed in
`frontend/src/components/QuoteForm.js`, so the form works on any host with no
dashboard configuration. The key is a public alias for
`wraptasticautocustoms@gmail.com`, not a secret; it cannot read mail or do
anything but deliver to that inbox.

To point the form at a different inbox, get a new key at https://web3forms.com
and either edit that constant or set `REACT_APP_WEB3FORMS_KEY`, which overrides
it.

Free tier is 250 submissions/month, which is far more than this site will use.

> **Important: the key is baked in at build time, not read at runtime.**
> Create React App inlines `REACT_APP_*` variables when `yarn build` runs. If you
> set the override in your host's dashboard, you must trigger a **new build**
> for it to take effect. Setting it without rebuilding does nothing.

**If the key is missing or delivery fails**, the form does not fail silently - it
opens WhatsApp with the customer's details already filled in, so a lead is never
lost. That is a safety net, not the intended path: set the key.

### Vehicle photos
There is deliberately no file upload. Photo attachments are a paid feature on
every free form service, so the form directs customers to send photos over
WhatsApp instead - which is how they behave anyway, and it starts a real
conversation.

## Deploying

Any static host works. The build output is just files.

**Recommended: Cloudflare Pages** (free, unlimited bandwidth, commercial use
allowed):

| Setting | Value |
|---|---|
| Build command | `yarn build` |
| Build output directory | `build` |
| Root directory | `frontend` |
| Environment variable | `REACT_APP_WEB3FORMS_KEY` |

**Netlify** works identically with the same settings (publish directory
`frontend/build`). Note its free tier is ~15 GB bandwidth/month and **stops
serving** when exhausted. The media is compressed (see below), so a typical
visit is ~3 MB and that ceiling is roughly 5,000 visits/month.

**Avoid Vercel's Hobby plan** - it prohibits commercial use, and this is a
business site. Vercel Pro is $20/month.

`frontend/public/_redirects` handles client-side routing. Without it every route
except `/` returns 404 on refresh. It is already committed and works on both
Cloudflare Pages and Netlify.

## Before you go live

The domain is currently hard-coded as `wraptasticautocustoms.com` in three
places. If you buy a different domain, update:

- `frontend/public/index.html` - `canonical`, `og:url`, `og:image`, `twitter:image`
- `frontend/public/robots.txt` - sitemap URL
- `frontend/public/sitemap.xml` - all seven URLs

Then:
- [ ] Submit the form once and confirm the email arrives at
      `wraptasticautocustoms@gmail.com` (the key is already committed)
- [ ] Submit `sitemap.xml` in Google Search Console
- [ ] Create/claim a **Google Business Profile** - for a local shop this drives
      more leads than the website does. Make sure the name, address and phone
      match `site.js` exactly; Google cross-checks them.

## Environment variables

Copy `frontend/.env.example` to `frontend/.env`. Both are optional:

- `REACT_APP_WEB3FORMS_KEY` - optional override for the committed quote-form
  key. Leave blank unless the destination inbox changes.
- `REACT_APP_INSTAGRAM_FEED_URL` - unused. The live feed is now the Behold
  widget on the Our Work page (see below), not a JSON fetch.

No secrets exist in this project. The Web3Forms key is a public alias for the
destination inbox and is safe in client-side code.

## Media

All media lives in `frontend/public/assets` and is already compressed - the
folder went from 36 MB to 10 MB with no visible quality loss:

- **Videos** are H.264 CRF 28, audio stripped (they are `muted` in the DOM, so
  the audio tracks were pure waste) and `+faststart` so playback begins before
  the file finishes downloading.
- **Images** are WebP at q82. Supported by every browser since ~2020.
- **`og-cover.jpg`** is the social preview image, deliberately left as JPEG at
  1200x630 - Facebook/WhatsApp/Twitter crawlers handle WebP poorly.
- **`logo.png`** stays PNG because it is the favicon.

If you add new media, match this: `cwebp -q 82 in.png -o out.webp` for images,
and for video:

```bash
ffmpeg -i in.mp4 -an -c:v libx264 -preset slow -crf 28 \
  -profile:v high -pix_fmt yuv420p -movflags +faststart out.mp4
```

## Live Instagram feed ("Our Latest Work")

The Our Work page has two galleries. The top one is the curated `GALLERY` array
in `site.js` - hand-picked, compressed, served from our own domain. Below it,
**Our Latest Work** is a live Behold (https://behold.so) widget that pulls the
Instagram feed automatically, so new posts appear with no rebuild and no deploy.

- Component: `frontend/src/components/BeholdFeed.js`
- Feed ID: `DZn9fb8c0Loay7GIlEBX` (hard-coded there)

Post count, columns, spacing and colours are all controlled in the Behold
dashboard for that feed, not in this code. Keep it to about 6-8 posts so the
section stays smaller than the curated gallery above it.

Behold holds the Instagram token and refreshes it, which is the whole reason for
using it - Instagram tokens expire every 60 days and a self-hosted sync would go
stale silently. Requirement: the Instagram account must stay a Business or
Creator account.

## Editing content

Almost everything is in `frontend/src/lib/site.js`. To add gallery work, drop
files into `frontend/public/assets` and add an entry to the `GALLERY` array.

Service prices live in the `SERVICES` array. A service with `price: null` renders
as "Quote Based" on the services page; give it a `price` string and that text is
replaced by the price automatically.
