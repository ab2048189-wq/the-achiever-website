# The Achievers — Website (Next.js 14 + Tailwind CSS)

Public marketing site for The Achievers Institute of Learning, built from the PRD, TRD and scraped site data.

## Run

```bash
npm install
cp .env.example .env.local   # then edit
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit content
All copy, contacts, courses, teachers and FAQs live in `lib/data.js`. Items marked `TODO` need confirmation
(primary phone, counselling hours, fees, batch dates, refund policy).

## Notes
- Login, register, checkout and the free mock test link to the existing platform via `NEXT_PUBLIC_APP_URL`.
- Forms post to `/api/leads`; set `LEADS_WEBHOOK_URL` to forward leads to your CRM / Google Sheet / n8n.
- Testimonials render only when you add real, consented `quote` text in `lib/data.js`.
- "100K+ students" and "30+ mentors" are self-reported and unverified on the current site (the "95%+ pass rate" claim is left out on purpose). Substantiate or edit `stats` in `lib/data.js`.
- Privacy / Terms / Cookies are templates; get them reviewed before launch.
- Legacy URL `/courses/Physics chemistry maths` redirects to `/courses/physics-chemistry-maths` (see `next.config.js`).
- Add `public/og-image.png` (1200×630) for social sharing.

## Placeholder images
Hero, course-card and teacher images use Unsplash placeholders (see the top of `lib/data.js`).
- Set `USE_PLACEHOLDER_IMAGES = false` to switch back to the institute's real teacher photos and course images.
- Replace any photo by editing its ID in `heroImages`, `courseImageIds` or `teacherPortraitIds`.
- Stock portraits are not the actual teachers: swap in real photos before launch.
- Unsplash's licence allows free use, but check it and credit photographers where appropriate.
