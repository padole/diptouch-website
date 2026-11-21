# Diptouch Cleaning Services website

Marketing website for Diptouch Cleaning Services (Lagos).

- `frontend/`: React 19 + Vite single-page site (built, awaiting approval)
- `backend/`: Python Flask API (to be built after the frontend is approved)

## Run the frontend

Requires Node.js 20 or newer.

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # production files in frontend/dist
```

## Structure

```
frontend/
  index.html
  vite.config.js          # proxies /api to Flask on http://localhost:5000
  public/media/           # logo, before/after photos, Reels (MP4 + posters)
  src/
    data.js               # business details, services, steps, Reels, Lagos areas
    styles.css            # all styling (design tokens at the top)
    fonts/                # Archivo Black (headlines), DM Sans (body)
    components/
      Header.jsx          # sticky header + mobile menu
      Hero.jsx            # headline, CTAs, before/after slider
      BeforeAfter.jsx     # drag / keyboard comparison slider
      Services.jsx        # six services; "Ask for a quote" preselects the form
      Work.jsx            # three Reels
      Process.jsx         # 4-step booking process + client types
      QuoteForm.jsx       # validated quote form, sends to WhatsApp
      Footer.jsx
      WhatsAppButton.jsx  # floating WhatsApp bar on phones
```

## Contact details

Phone / WhatsApp: 0703 600 4238 (`2347036004238` in links), email: diptouchcleaning@gmail.com,
Instagram: @diptouch_cleaning. Edit them in `src/data.js`.

## Planned backend (phase 2, not started)

Flask API in `backend/`:

- `POST /api/quotes`: validate and store quote requests (SQLite), and email a notification to
  diptouchcleaning@gmail.com
- `GET /api/quotes`: password-protected list for the owner
- The form in `QuoteForm.jsx` will call `/api/quotes` first, then open WhatsApp as it does now
