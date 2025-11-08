# VIJ Landing

Marketing site for VIJ — a lightweight, open‑source production error monitoring platform for modern JS/TS apps.

## What is VIJ?
- **vij-sdk**: minimal, framework‑agnostic SDK for browser and Node.js. Captures errors, unhandled rejections, and custom logs with batching and rich metadata.
- **vij-admin**: self‑hosted Next.js dashboard + ingestion API with charts, groups, and optional AI summaries.

## Links
- SDK (npm): https://www.npmjs.com/package/vij-sdk
- Admin (GitHub): https://github.com/asengupta07/vij-admin
- Docs: see `vij-admin` README

## Develop locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & start
```bash
npm run build
npm run start
```

## Deploy
Deploy to any Node host (e.g., Vercel). No special env vars required for the landing site.

## Customize copy
- Hero headline/CTA: `components/hero.tsx`
- Header/nav links: `components/header.tsx` and `components/mobile-menu.tsx`

## License
MIT
