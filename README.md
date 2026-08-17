# Dr. Milind Mandwar — Professional Website

Official professional website for **Dr. Milind Mandwar**, Consultant in Organ Transplant and HPB Surgery at Ruban Memorial Hospital, Patna.

The website provides information about Dr. Milind's professional profile, transplant and HPB expertise, qualifications, clinical experience, consultation locations and patient resources. It also supports appointment enquiries, WhatsApp booking, non-urgent email queries and moderated review submissions.

**Live website:** [dr-milind-amit-nit-bhopal.vercel.app](https://dr-milind-amit-nit-bhopal.vercel.app/)

## Technology

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons
- Nodemailer with configurable SMTP
- Responsive, accessible and SEO-ready components

## Main Features

- Responsive navigation with desktop and mobile layouts
- Professional profile, qualifications and experience timeline
- Detailed transplant, HPB and vascular-access specialities
- Appointment form with email and WhatsApp submission options
- Non-urgent patient query form
- Review submission with manual moderation
- Consultation locations and Google Maps directions
- Patient educational resources
- Responsive professional-photo gallery with consent controls
- FAQ, privacy policy, terms and medical disclaimer
- Structured data, Open Graph metadata, sitemap and robots configuration
- Server-side validation, sanitisation, honeypot protection and rate limiting

## Local Development

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd "Dr Milind Mandwar WebPage"
npm install
```

Create the local environment file in PowerShell:

```powershell
Copy-Item .env.example .env
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create an optimized production build
npm start        # Start the production server after building
```

## Environment Variables

Use `.env` for local development and the deployment provider's secure environment-variable settings in production. Never commit passwords or app-specific credentials.

```dotenv
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-sending-address@gmail.com
SMTP_PASSWORD=your-app-password
CLINIC_EMAIL=your-clinic-address@example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918120650418
NEXT_PUBLIC_SITE_URL=https://dr-milind-amit-nit-bhopal.vercel.app
```

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | Outgoing email server hostname |
| `SMTP_PORT` | SMTP connection port, normally `465` for SSL or `587` for STARTTLS |
| `SMTP_USER` | Full email address used to send website messages |
| `SMTP_PASSWORD` | App-specific SMTP password, never the normal account password |
| `CLINIC_EMAIL` | Inbox receiving appointments, queries and review submissions |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code and digits only |
| `NEXT_PUBLIC_SITE_URL` | Public HTTPS URL used for canonical and social metadata |

Restart the development server after changing environment variables.

### Gmail SMTP

1. Enable two-step verification for the sending Google account.
2. Create a Google App Password for Mail.
3. Set `SMTP_HOST=smtp.gmail.com` and `SMTP_PORT=465`.
4. Set `SMTP_USER` to the complete Gmail address.
5. Set `SMTP_PASSWORD` to the generated 16-character app password.
6. Set `CLINIC_EMAIL` to the monitored destination inbox.

Do not store a normal Google account password in `.env`.

### Zoho SMTP

For a Zoho Mail India account, the common configuration is:

```dotenv
SMTP_HOST=smtp.zoho.in
SMTP_PORT=465
SMTP_USER=your-address@your-domain.com
SMTP_PASSWORD=your-zoho-app-password
```

Confirm the correct SMTP hostname in the Zoho account because it can vary by data centre. Use an app-specific password when two-factor authentication is enabled.

If SMTP is unavailable, the website safely asks patients to contact the team by phone or WhatsApp. SMTP credentials are used only in server-side routes and are never sent to the browser.

## Updating Doctor Information

The central content file is [`data/doctor.ts`](data/doctor.ts). Update this file to change:

- Professional designation and current position
- About-profile content
- Phone, WhatsApp, email and social links
- Qualifications and experience
- Specialities and procedure information
- Statistics and professional memberships
- Locations and consultation timings
- FAQs and patient-resource content

Review every item marked `verificationRequired: true` before publication. Unverified “first”, rating, outcome or success claims must not be published as confirmed facts.

## Adding or Replacing Photographs

Photo configuration, roles, captions, alt text, dimensions, object position and consent settings are managed in [`data/doctorPhotos.ts`](data/doctorPhotos.ts).

1. Place photographs in `public/images/dr-milind/`.
2. Use recommended names such as `hero.webp`, `profile.webp`, `consultation.webp`, `surgery.webp`, `transplant-team.webp`, `conference.webp`, `achievement.webp` and `gallery-01.webp` onward.
3. Restart the development server after adding photographs.
4. Add or update each photograph's entry in `data/doctorPhotos.ts`.
5. Use meaningful alt text and accurate captions.
6. Keep `requiresConsent: true` for identifiable patient photographs unless documented publication consent has been obtained.
7. Use a hero image of at least 1200 × 1500 pixels where possible.
8. Use gallery images at least 1400 pixels wide where possible.
9. Prefer WebP, AVIF or high-quality JPEG files.
10. Avoid compressed messaging-app copies when original images are available.

The website displays a styled “MM” placeholder if no configured professional photograph is available. Never publish screenshots, confidential records, patient-identifying material or unsuitable operating-theatre photographs.

## Forms and Email Delivery

- `app/api/query/route.ts` processes appointment requests and non-urgent patient queries.
- `app/api/review/route.ts` sends submitted reviews for manual verification and moderation.
- `lib/serverForms.ts` contains shared server-side validation, sanitisation, rate limiting and email handling.

Review submissions are never published automatically. Appointment form submissions are requests only and do not confirm an appointment.

After configuring the clinic mailbox, test:

1. A standard appointment email request.
2. Appointment booking through WhatsApp.
3. A non-urgent query submission.
4. A review submission for moderation.
5. Error messaging when SMTP is unavailable.

Avoid using real patient medical information during testing.

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the framework preset as Next.js.
4. Add all environment variables under **Project Settings → Environment Variables**.
5. Set `NEXT_PUBLIC_SITE_URL=https://dr-milind-amit-nit-bhopal.vercel.app`.
6. Deploy and test every form and external link on the production domain.

Environment-variable changes require a new Vercel deployment.

## Deployment on a Node.js VPS

1. Install Node.js 20 or newer.
2. Clone the repository and run `npm ci`.
3. Configure secrets using the server's protected environment mechanism.
4. Run `npm run build`.
5. Start the application with `npm start`.
6. Run the application behind an HTTPS reverse proxy such as Nginx.
7. Use a process manager and keep `.env` inaccessible from the public web root.

## Pre-launch Checklist

- [ ] Confirm Dr. Milind's current role and professional designation.
- [ ] Confirm Ruban Memorial Hospital OPD schedule and online consultation timings.
- [ ] Confirm all transplant and vascular-access experience figures.
- [ ] Verify clinic addresses and Google Maps links.
- [ ] Confirm the public phone, WhatsApp and clinic email address.
- [ ] Confirm publication approval for every professional claim.
- [ ] Review all educational content medically before final publication.
- [ ] Confirm consent for every identifiable person shown in photographs.
- [ ] Test appointment, query and review email delivery.
- [ ] Test telephone, WhatsApp, social-media and directions links.
- [ ] Review privacy, terms and disclaimer content with appropriate advisers.
- [ ] Verify canonical metadata, `/sitemap.xml` and `/robots.txt`.
- [ ] Test at 375 px, 768 px and 1440 px widths.
- [ ] Test keyboard navigation, focus states and reduced-motion behavior.
- [ ] Run `npm run lint` and `npm run build` before deployment.

## Medical Notice

The website provides general education and appointment coordination only. It does not replace an in-person medical evaluation, diagnosis or treatment. Website forms must not be used for emergencies or for submitting complete medical histories and sensitive reports.

## Project Status

Production build and lint checks are expected to pass before every deployment. Information marked for verification should be confirmed by Dr. Milind before the website is treated as final clinical or professional publication.
