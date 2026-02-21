# SBS Construction Website

Hakmi & Abbas Sustainable Building Solutions Co. (SBS Co.) - Production-ready Next.js 14 website.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- ESLint

## Project Structure

```
src/
├── app/                 # App Router routes
├── components/          # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   └── ui/              # Base UI components
├── data/                # Static data, config, constants
├── lib/                 # Utilities, helpers, API clients
└── types/               # TypeScript type definitions
```

## Theme Colors

- **sbs-gray**: Dark gray palette (50-950)
- **sbs-orange**: Industrial orange palette (50-950)
- **sbs-green**: Sustainable green palette (50-950)

## Scripts

- `npm run dev` - Development server
- `npm run build` - Static export build (outputs to `out/`)
- `npm run start` - Production server (when not using static export)
- `npm run lint` - ESLint

## Static Export

The project is configured for static export (`output: 'export'`). To enable server features (API routes, server components with dynamic data, etc.), remove the `output: 'export'` from `next.config.mjs`.
