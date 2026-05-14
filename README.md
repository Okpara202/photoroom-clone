# Photoroom Clone

A pixel-near recreation of [photoroom.com](https://www.photoroom.com/) — the marketing site, login, and the post-login `/create` home dashboard — built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

This is a study project. There was no Figma source — every measurement, color, typography rule, and layout was reverse-engineered by inspecting the live site, downloading its compiled CSS, and reading the rendered HTML. Where production CSS exposed exact values (the brand purple `#410cd9`, the `heading-light-*` / `heading-thin-*` type scale, the navy→sky CTA gradient), those were used verbatim. Where it didn't, the values are best-effort approximations — close at a glance, not pixel-identical.

## Live routes

| Route | Purpose |
|---|---|
| `/` | Landing page — hero, trust bar, AI-visual sections, pricing tiers, enterprise, multi-device, brand kit, testimonials, tools grid, final CTA, footer |
| `/login` | Sign-in screen with sidebar + social/email buttons |
| `/create` | Post-login Home dashboard with sidebar, tool buttons, "Get started" cards, and scrollable template rows |

The "Log in" and "Start creating" buttons in the header route to `/login`; submitting any social button or the email button there routes to `/create`.

## Tech stack

- **Next.js 15.5** (App Router, RSC)
- **React 19.1** (stable)
- **TypeScript 5**
- **Tailwind CSS 3.4** — with a custom `accent` and `neutral` palette pulled from Photoroom's production CSS
- **TT Photoroom** — Photoroom's proprietary brand font, loaded from `font-cdn.photoroom.com` via `@font-face` for visual fidelity (swap to Inter Display / Geist / Manrope for any real use)

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (loads globals.css)
│   ├── globals.css             # Font-face declarations, color tokens, utility gradients
│   ├── page.tsx                # Landing page (composes sections)
│   ├── login/page.tsx          # Login page composition
│   └── create/page.tsx         # /create home dashboard composition
│
└── components/
    ├── Header.tsx              # Top nav (sticky)
    ├── Hero.tsx                # Hero with clipped phone / earrings / laptop
    ├── TrustedBy.tsx           # Single-row brand logos
    ├── PricingTiers.tsx        # Pro / Max / Ultra / Enterprise cards
    ├── Testimonials.tsx        # Card grid with image masks fading into card bg
    ├── ToolsGrid.tsx           # "See what Photoroom can do" — scrollable row
    ├── FinalCTA.tsx            # Dark navy→sky CTA section
    ├── Footer.tsx              # Site footer (composes from ./footer/*)
    ├── Logo.tsx                # Photoroom wordmark
    │
    ├── FeatureSections.tsx     # Barrel — re-exports ./sections/*
    ├── BrandLogos.tsx          # Barrel — re-exports ./brand-logos/*
    │
    ├── sections/               # Big content sections split per-component
    │   ├── SectionHeader.tsx
    │   ├── AIVisualSolutionBlock.tsx
    │   ├── PhotoToProfit.tsx
    │   ├── CutCosts.tsx
    │   ├── Enterprise.tsx
    │   ├── MultiDevice.tsx
    │   └── BrandKit.tsx
    │
    ├── brand-logos/            # Real-color brand logo SVGs
    │   ├── wordmarks.tsx       # Amazon, Depop, Mercari, Naver, Decathlon, DoorDash, Poshmark
    │   └── glyphs.tsx          # Facebook, eBay, Shopee, Mercado Libre
    │
    ├── footer/
    │   ├── footer-data.ts
    │   ├── ColumnList.tsx
    │   ├── AppButtons.tsx
    │   ├── FooterBottom.tsx
    │   └── social-icons.tsx
    │
    ├── tools-grid/
    │   ├── tools-data.ts
    │   └── ToolCard.tsx
    │
    ├── hero/award.tsx          # Laurel-wreath award component + platform icons
    │
    ├── create/                 # /create page primitives
    │   ├── Sidebar.tsx
    │   ├── SearchBar.tsx
    │   ├── ToolButton.tsx
    │   ├── GetStartedCard.tsx
    │   ├── TemplateRow.tsx     # Reusable scrollable row with right-edge arrow
    │   ├── TemplateTiles.tsx   # Classics / Studio / Essentials / Marketplaces rows
    │   ├── placeholders.tsx    # Generic product / apparel silhouettes
    │   ├── icons.tsx           # Top-row tool icons
    │   ├── sidebar-icons.tsx
    │   └── page-data.tsx
    │
    └── login/
        ├── LoginSidebar.tsx
        └── SocialButtons.tsx

public/
├── images/         # Hero phone, laptop, object box, section imagery
├── tool-cards/     # Real Photoroom CDN tool thumbnails (7 cards)
├── brand-logos/    # Real Photoroom CDN brand logos (7 brands)
├── tier-icons/     # Real Photoroom app icons (regular + enterprise)
├── testimonials/   # Real Photoroom CDN testimonial photos
└── logos/          # Misc SVGs
```

Every component file is **≤150 lines** — anything that grew larger was split into a subfolder, with a thin barrel file re-exporting from there for stable import paths.

## What was extracted from the real site

- **Brand purple** `#410cd9` (their `--color-accent-500`) and hover `#280197`
- **Neutral palette** 50/100/200/300/400/500/600/700/800/900 with their exact hexes
- **Heading type scale** — sizes 14/17/20/24/29/35/42/50/60/72 px, weights 500/600, line-height 110%, sub-px negative letter-spacing per size
- **TT Photoroom font** loaded via @font-face from their public CDN
- **Real images**: hero phone/laptop/object box, sneakers, furniture, multi-device, brand kit collage, tool card thumbnails, brand wordmarks, testimonial photos, tier app icons — all downloaded from `storyblok-cdn.photoroom.com` and `photoroom.com/img/home`
- **Real gradients**: the final-CTA navy→sky 6-stop gradient, the Upgrade-to-Pro purple→pink gradient
- **Button spec** — `px-5 py-[13px] rounded-[10px]` 15px font, consistent across the site

## What's approximated

There's no Figma source, so a few things are eyeballed:

- **Exact letter-spacing per heading** — Photoroom uses fractional pixel values (`-0.876px`, `-1.4112px`). I use the closest `em`-based equivalent
- **Section vertical padding** — Photoroom uses custom `pt-e*` Tailwind tokens that resolve to different values at each breakpoint. I use the standard 4px-grid scale (`py-16 sm:py-24 lg:py-32` etc.) which is close but not identical
- **Hero composition** — phone/earrings/laptop positions are based on visual estimation of where they overflow the viewport edges. Original X/Y offsets aren't extractable from screenshots
- **`/create` template tile contents** — the actual Photoroom dashboard renders specific products (teddy bear, sneaker, t-shirt) on each colored background. I use generic SVG silhouettes (`<ProductPlaceholder />`, `<ApparelPlaceholder />`) since those product photos aren't on the marketing CDN
- **Some brand wordmarks** (Depop, Mercari, Decathlon, Poshmark) on `/create` use SVG text in approximating typefaces rather than the brands' real custom fonts
- **Mercado Libre and Shopee glyphs** are stylized approximations of their real marks

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (same step Vercel runs)
```

## Deploying

The project builds cleanly on Vercel. The earlier deployment failure was a Next.js 15.0.3 security advisory — resolved by upgrading to 15.5.x and adding an npm `overrides` block to force a patched `postcss` (>= 8.5.10) into Next's nested dependency tree. `npm audit` is currently clean.

## Honest disclaimer

This is a non-commercial study clone. The Photoroom brand, fonts, product imagery, and marketing copy are property of Photoroom, Inc. If you fork this for anything beyond learning, swap out their proprietary font, their CDN-hosted product imagery, and their copy.
