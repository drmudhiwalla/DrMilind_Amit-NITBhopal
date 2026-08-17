# Dr. Milind Mandwar — Professional Website

Production-ready Next.js website for Dr. Milind Mandwar, Consultant in Organ Transplant and HPB Surgery at Ruban Memorial Hospital, Patna.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.

Production checks and server:

```bash
npm run lint
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local`. Never commit real passwords.

- `SMTP_HOST`: SMTP server hostname
- `SMTP_PORT`: normally `465` for SSL or `587` for STARTTLS
- `SMTP_USER`: sending mailbox username
- `SMTP_PASSWORD`: app-specific password
- `CLINIC_EMAIL`: final clinic mailbox receiving appointment, query and review-moderation emails
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: digits only; currently `918638482340`
- `NEXT_PUBLIC_SITE_URL`: final canonical website URL, such as `https://drmilindmandwar.com`

### Zoho SMTP

For Zoho Mail India, start with `SMTP_HOST=smtp.zoho.in` and `SMTP_PORT=465`. Use the complete Zoho mailbox as `SMTP_USER` and an app-specific password where two-factor authentication is enabled. Set `CLINIC_EMAIL` to the monitored clinic inbox. Zoho data-centre hostnames can differ, so confirm the correct outgoing server in the mailbox’s Zoho settings. Restart the server after changing environment variables and test both query and appointment forms.

If SMTP is not configured, forms return a safe message asking patients to use WhatsApp or call. SMTP credentials are read only by server routes.

## Editing doctor information

All current role, profile, qualifications, experience, specialties, statistics, memberships, contact details, locations and timings live in [`data/doctor.ts`](data/doctor.ts). Items marked `verificationRequired: true` are intentionally not shown as verified public claims. Confirm all current locations, statistics and timings before launch.

Photograph roles, captions, alt text, consent controls and object positions live in [`data/doctorPhotos.ts`](data/doctorPhotos.ts).

## Adding or Replacing Photographs

1. Place photographs inside `public/images/dr-milind/`.
2. Use the recommended filenames: `hero.webp`, `profile.webp`, `consultation.webp`, `surgery.webp`, `transplant-team.webp`, `conference.webp`, `achievement.webp`, and `gallery-01.webp` onward.
3. Restart the development server after adding photographs.
4. Edit captions, alt text, dimensions, image roles and object positions in `data/doctorPhotos.ts`.
5. Confirm explicit publication consent before using patient photographs. Keep `requiresConsent: true` until consent is documented; these photographs are excluded automatically.
6. Use high-resolution original photographs where possible.
7. Recommended hero-image dimensions: at least 1200×1500 pixels.
8. Recommended gallery-image width: at least 1400 pixels.
9. Prefer WebP, AVIF or high-quality JPEG.
10. Avoid WhatsApp-compressed images when original files are available.

Add Dr. Milind’s photographs to `public/images/dr-milind/` and follow the recommended filename convention. The hero displays a polished “MM” fallback if a configured image is missing. Never publish operation-theatre images containing patient information or identifiable patients without documented consent.

## Deployment

### Vercel

Import the GitHub repository in Vercel, select Next.js, add every environment variable in Project Settings → Environment Variables, and deploy. Replace `NEXT_PUBLIC_SITE_URL` with the final HTTPS domain and rebuild.

### Node.js VPS

Install Node.js 20+, clone the repository, run `npm ci`, configure environment variables using the host’s secure secret mechanism, run `npm run build`, and serve with `npm start` behind an HTTPS reverse proxy such as Nginx. Use a process manager and do not expose `.env.local` publicly.

## Pre-launch verification checklist

- Confirm Ruban Memorial Hospital role and exact current OPD schedule.
- Confirm online consultation morning/evening timings.
- Confirm transplant and vascular-access experience figures and public wording.
- Supply the exact preferred Google Maps directions URL for the additional Patna location.
- Confirm the public designation, phone number, WhatsApp number and clinic email.
- Decide whether the verification-required Punjab “first” achievement may be published.
- Add and approve a professional solo hero portrait.
- Confirm written consent for every identifiable person or patient in photographs.
- Test appointment, query and review emails using the final clinic mailbox.
- Test WhatsApp text, telephone links, directions and social profiles.
- Review privacy policy, terms and medical disclaimer with appropriate advisers.
- Set the canonical production domain and verify sitemap/robots output.
- Test at 375 px, 768 px and 1440 px, with keyboard navigation and reduced motion.
- Run `npm run lint` and `npm run build` immediately before deployment.

## Form handling

`app/api/query/route.ts` handles appointment and non-urgent query emails. `app/api/review/route.ts` sends reviews for manual moderation only. Both routes validate and sanitise input, use a honeypot, apply basic in-memory rate limiting, avoid logging medical content, and return safe fallback errors.
