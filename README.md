# Codely Portfolio

A bilingual Arabic/English company portfolio for **Codely** — a software development studio focused on web platforms, mobile apps, dashboards, APIs and custom business systems.

## What changed in this rebuild

- Replaced the previous generic IT/infrastructure positioning with a software-studio identity.
- Removed the fake Saudi office, phone number, partners, hosting packages, hardware products, ERP/Odoo claims and invented statistics.
- Rebuilt the visual language around the supplied Codely logo: dark navy, electric cyan and restrained violet.
- Replaced stock-photo project cards with product-style interface previews built in the UI itself.
- Replaced the old portfolio content with Codely's actual product work represented in this repository:
  - Deliver It
  - TOG Cloud
  - Gear
  - BUB – Book Your Beauty
  - Zone
  - My Fanni
  - EduBridge
  - Legal Services Platform
  - CV Generator
- Added full case-study routes for every project.
- Rebuilt Services, About and Contact pages.
- Contact uses `agency.codely@gmail.com` and prepares a mail draft; it does not pretend a backend exists.
- Removed unused public-facing routes for packages, products, blog and admin demo content.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Main content locations

- Company email/tagline: `lib/data/initialData.ts`
- Services: `lib/data/initialData.ts`
- Portfolio / case-study content: `lib/data/initialData.ts`
- Supplied logo assets: `public/codely-logo.jpg` and `public/codely-wordmark.jpg`
- Global colors and visual system: `app/globals.css` and `tailwind.config.ts`

## Before publishing

1. Review project names/descriptions and remove any private client information that should not be public.
2. Add real social links only when available.
3. If you want web-form delivery instead of opening the visitor's mail client, connect the Contact page to a real API/email provider.
4. Review the case-study screenshots before publishing to ensure no private customer data should be blurred or removed.

### Real project assets
Real supplied screenshots and portfolio covers are included for TOG, Gear, BUB, Zone and My Fanni under `public/projects/`. Captions and case-study content are managed from `lib/data/initialData.ts`.

## Codely public contact variables
The contact page includes a required visitor phone/WhatsApp field and supports direct WhatsApp submission. Set these variables in Vercel before production deployment:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=2010XXXXXXXX
NEXT_PUBLIC_PHONE_DISPLAY=+20 10 XXX XXXX
```

`NEXT_PUBLIC_WHATSAPP_NUMBER` must contain digits only including the country code. The WhatsApp buttons are intentionally hidden until a real business number is configured, so the site never ships with a fake contact number.
