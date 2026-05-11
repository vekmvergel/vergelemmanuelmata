# Vergel Emmanuel Mata | Bookkeeping Virtual Assistant

A personal brand website for a Bookkeeping Virtual Assistant, built with vanilla HTML, CSS, and JavaScript.

Based on the visual design language of [STRIDE Athletics](https://stride-athletics.vercel.app/).

## Features

- **Dark, premium aesthetic** — bold typography, high-contrast imagery, minimalist design
- **Fully responsive** — adapts from mobile to desktop seamlessly
- **10 sections** covering all VA client touchpoints

## Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Navbar** | Fixed navigation with smooth-scroll links to all sections |
| 2 | **Hero** | Full-screen with background image, tagline "Order Through Precision", stats, CTAs |
| 3 | **Marquee** | Infinite scrolling ticker of bookkeeping services and tools |
| 4 | **About Me** | Professional bio, headshot, and downloadable resume link |
| 5 | **Services** | 4 service cards (Monthly Bookkeeping, Payroll, AP/AR, Financial Reporting) with starting prices |
| 6 | **Process** | 3-step numbered workflow (Review → Reconcile → Report) with timeline metrics |
| 7 | **Skills & Tools** | Badge grid of 12 skills and software platforms |
| 8 | **Example Projects** | Featured case study + 2 smaller projects + downloadable portfolio |
| 9 | **Contact** | Name, email, message form with CTA |
| 10 | **Footer** | Brand info, social links, quick links, resources, contact details |

## Tagline

**"Order Through Precision"**

The word "Through" is styled in `--neutral-400` (`#a3a3a3`) — a complementary lighter gray — creating visual cadence between the two anchor words.

## Project Structure

```
.
├── index.html      # HTML structure (all sections)
├── style.css       # Complete stylesheet (dark theme, responsive, animations)
├── script.js       # Mobile menu, marquee ticker, contact form
└── README.md       # This file
```

## How to Run

Open `index.html` in any modern web browser. No build tools or server required.

```bash
start index.html     # Windows
open index.html      # macOS
xdg-open index.html  # Linux
```

## Design System

| Property | Value |
|----------|-------|
| **Font** | Inter (Google Fonts) |
| **Background** | `#000000` (black) |
| **Text** | `#ffffff` (white), `#a3a3a3` (neutral-400) |
| **Accent** | `--neutral-400` for "Through" in hero |
| **Surfaces** | `#1a1a1a`, `#111111` with white borders at 5-10% opacity |
| **Animations** | CSS keyframes (marquee, bounce, scale on hover) |

## Customization

All content is in `index.html` — simply edit the text, images, and links to personalize:

- **Name/brand**: Update "Vergel Emmanuel Mata" to your name
- **Images**: Replace Unsplash URLs in `<img>` tags
- **Social links**: Update href values in footer
- **Services/pricing**: Edit the service cards and `$` amounts
- **Contact form**: Add your email endpoint to `script.js`

## Credits

- Original design inspiration: [STRIDE Athletics](https://stride-athletics.vercel.app/)
- Photography: [Unsplash](https://unsplash.com)
- Font: [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
