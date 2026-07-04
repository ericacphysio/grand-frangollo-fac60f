# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

Marketing site for Ace Body Physiotherapy & Wellness, a physiotherapy clinic. It has a landing page, an online booking page that embeds the clinic's Splose booking widget, and an about page profiling physiotherapist Erica Chen. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── placeholder.png
├── src
│   ├── components
│   │   ├── Nav.tsx     # Sticky site header/nav shared across all pages
│   │   └── Footer.tsx  # Site footer with contact details, shared across all pages
│   ├── routes
│   │   ├── __root.tsx  # Root layout: fonts, meta tags, grain overlay
│   │   ├── index.tsx   # Landing page (hero, services, process, CTA)
│   │   ├── about.tsx   # About page profiling physiotherapist Erica Chen
│   │   └── booking.tsx # Booking page embedding the Splose iframe
│   ├── router.tsx      # TanStack Router setup
│   └── styles.css      # Tailwind import, fonts, CSS custom properties, grain overlay
├── netlify.toml    # Netlify deployment config (build command, publish dir, dev server)
├── package.json
├── tsconfig.json   # @/* path alias for src/*
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - root layout wrapping all pages, includes the grain overlay and Google Fonts links
- `index.tsx` - route for `/`, the landing page
- `about.tsx` - route for `/about`
- `booking.tsx` - route for `/booking`, contains the embedded Splose booking `<iframe>`

Every page composes the same `Nav` and `Footer` components directly rather than through a shared layout route, since there is only one layout in use.

### Booking Integration

The clinic's booking system is Splose. `src/routes/booking.tsx` embeds it via an `<iframe>` pointed at the clinic's Splose online-booking URL. That URL is specific to this clinic's Splose account — do not change it unless the clinic provides a new booking link.

## Design System

- Palette: warm clay/terracotta (`--clay`, `--clay-dark`) and sage green (`--sage`, `--sage-light`) on a cream background (`--cream`, `--cream-dark`), defined as CSS custom properties in `src/styles.css`.
- Typography: "Fraunces" (serif) for headings/display text via the `font-display` utility class, "Manrope" for body text. Both are loaded from Google Fonts in `__root.tsx`.
- Motion: a shared `.reveal` fade-up-on-load animation class, staggered with inline `animationDelay` styles.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Conventions

### Naming
- Components: PascalCase
- Routes: lowercase, one word per page

### Styling
- Tailwind CSS utility classes throughout
- CSS custom properties for theme tokens in `styles.css` (referenced as `var(--clay)`, etc., since the palette isn't wired into the Tailwind theme config)

### TypeScript
- Strict mode enabled
- Import paths use the `@/` alias for `src/`
