# Wraptastic Auto Customs - Website

A premium, cinematic website for Wraptastic Auto Customs (Brampton, Ontario).
Built with React (CRA), Tailwind CSS, shadcn/ui, and Framer Motion, with an
optional FastAPI + MongoDB backend for storing quote requests.

## Structure
- `frontend/` - React app (all UI, pages, real media in `public/assets`)
- `backend/`  - FastAPI API (`/api/quotes` stores submissions in MongoDB)

## Quote form email delivery (portable)
The quote form is designed to work anywhere, including a static Netlify deploy:

1. Get a FREE Web3Forms access key at https://web3forms.com using the
   inbox `wraptasticautocustoms@gmail.com`.
2. Add it to the frontend environment as:
   `REACT_APP_WEB3FORMS_KEY=your_key_here`
3. Redeploy. Submissions will now be emailed to that inbox (works on Netlify
   with zero backend). The Web3Forms access key is safe to expose client-side.

If `REACT_APP_WEB3FORMS_KEY` is blank, the form still works and stores every
submission in the backend database. Once the key is set, emails are sent AND
(when the backend is running) submissions are also stored.

## Deploying the frontend to Netlify (no backend required)
- Base directory: `frontend`
- Build command: `yarn build`
- Publish directory: `frontend/build`
- Environment variable: `REACT_APP_WEB3FORMS_KEY` (and optionally
  `REACT_APP_BACKEND_URL` if you keep the backend for stored submissions)
- Add a redirect so client-side routing works. Create `frontend/public/_redirects`:
  `/*    /index.html   200`

## Real media
All vehicle photos and videos live in `frontend/public/assets`. To add more
gallery work, drop files into that folder and add entries to the `GALLERY`
array in `frontend/src/lib/site.js`. No code changes needed elsewhere.

## Business content
All contact info, services, pricing, reviews, brands and policies are in a
single file: `frontend/src/lib/site.js`.

## Environment variables
- Frontend `.env`: `REACT_APP_BACKEND_URL`, `REACT_APP_WEB3FORMS_KEY`
- Backend `.env`: `MONGO_URL`, `DB_NAME` (secrets stay server-side only)

No API keys are hard-coded in frontend source. Nothing depends on Emergent
hosting; the project is portable.
