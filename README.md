# Shukraveda Herbals website

Next.js + Tailwind CSS single-page website based on the supplied wellness UI direction.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Admin panel
1. Copy `.env.example` to `.env.local` and set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `AUTH_SECRET`.
2. Open http://localhost:3000/admin/login
- **Leads** (`/admin/leads`): contact-form submissions with search, status filter, follow-up date, notes, pagination (10/page).
- **Website Content** (`/admin/cms`): contact details, condition cards and testimonials.
- Data is stored as JSON files in `data/` (git-ignored). On hosts with a read-only filesystem (e.g. Vercel) replace `lib/db.js` with a hosted database.

## Notes
- Hero images are resized to exactly 1920 × 700 px.
- The contact form posts to `/api/leads` (rate-limited, honeypot-protected).
- Replace demo address and social links before production.
- For stronger SEO, create dedicated routes for each disease with original, medically reviewed content rather than relying only on the home page.
