# Doon Earth Solution — Website

A modern, SEO-friendly Next.js + Tailwind site for a termite control business. WhatsApp-first lead capture, fully responsive, accessible, and fast.

## Tech Stack
- **Next.js 14 (App Router)** with React 18 + TypeScript
- **Tailwind CSS 3** with custom theme (brand greens, accents, animations)
- **Google Fonts** via `next/font` (Inter + Plus Jakarta Sans)
- **SEO** — Metadata API, Open Graph, Twitter cards, JSON-LD LocalBusiness, `sitemap.ts`, `robots.ts`
- **WhatsApp** form submission via `wa.me` deeplink (no backend needed)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# http://localhost:3000

# 3. Production build
npm run build
npm start
```

> Requires Node.js 18.17+ (Node 20 recommended).

## Where to Update Your Info

All branding/contact lives in **`lib/site.ts`**. Open it and edit:

```ts
export const site = {
  name: 'Doon Earth Solution',
  tagline: 'Say Goodbye to Termites — For Good.',
  url: 'https://doonearthsolution.in',
  phone: '+91-9999999999',
  whatsapp: '919999999999',  // <-- IMPORTANT: WhatsApp number, no '+' or spaces
  email: 'info@doonearthsolution.in',
  address: 'Dehradun, Uttarakhand, India',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM',
  social: { instagram: '#', facebook: '#', youtube: '#', linkedin: '#' },
};
```

The **WhatsApp number** is the most important field. Format: country code + number, no spaces, no `+`. Example for Indian number `+91 93543 33475` → `'919354333475'`.

## How WhatsApp Submission Works

When a user submits the contact form (`components/QueryForm.tsx`), the form data is formatted into a message and opened via `https://wa.me/<number>?text=<encoded message>` in a new tab — directly into your WhatsApp.

No server / API / database required. Logic lives in `lib/whatsapp.ts`.

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD
  page.tsx            # Home (Hero + Services + WhyUs + Process + Testimonials + FAQ + CTA)
  services/page.tsx   # Services page
  about/page.tsx      # About page
  contact/page.tsx    # Contact page with WhatsApp form
  sitemap.ts          # Auto sitemap.xml
  robots.ts           # Auto robots.txt
  not-found.tsx       # 404 page
  globals.css         # Tailwind + custom utilities
components/
  Navbar.tsx, Footer.tsx
  Hero.tsx, TrustBar.tsx, Services.tsx, WhyUs.tsx
  Process.tsx, Testimonials.tsx, FAQ.tsx, CTA.tsx
  QueryForm.tsx       # WhatsApp-submitting form
  WhatsAppFloat.tsx   # Floating chat button
lib/
  site.ts             # Brand + contact config
  whatsapp.ts         # wa.me link builder
public/
  favicon.svg
```

## Customization Tips

- **Colors** — `tailwind.config.ts` → `theme.extend.colors.brand` (green palette) and `accent` (amber CTA)
- **Services list** — `components/Services.tsx`
- **Testimonials** — `components/Testimonials.tsx`
- **FAQ** — `components/FAQ.tsx`
- **SEO keywords** — `app/layout.tsx` → `metadata.keywords`
- **JSON-LD business info** — `app/layout.tsx` → `ldJson`

## Deployment

Optimized for **Vercel** (zero config) — push to GitHub and connect.
Also works on Netlify, Cloudflare Pages, or any Node host that supports Next.js 14.

Set the production URL in `lib/site.ts` (`url`) so the sitemap and metadata point at the right domain.

## Mobile & Accessibility
- Fully responsive (mobile-first)
- Sticky glass navbar with mobile menu
- Floating WhatsApp button on every page
- Keyboard-accessible (focus rings on all interactive elements)
- Tap-friendly hit targets, `aria-label`s on icon buttons

Built with care. Termite control done right.
