# rickbarretto.com — Founder Website

A cinematic-scrapbook narrative of Rick Barretto's 35-year invention arc, from a kid cold-calling downtown Indianapolis to the PrecognitionOS architecture powering CyberHope AI.

## Stack

Same workflow as [cyberhope.ai-website](https://github.com/cyberhope-ai/cyberhope.ai-website):

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind 3.4** + `@tailwindcss/typography`
- **Playfair Display** (display) + **Space Grotesk** (sans)
- **Vercel** deploy (auto from `main`)

## Develop

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Pushed to `main` → Vercel auto-deploys. Custom domain `rickbarretto.com` configured separately in the Vercel dashboard.

## Content

Chapters live in `content/chapters.ts` as a typed array. Edit freely — the home page renders them in order. Each chapter has:
- `era` (date range label)
- `title`
- `lede` (large intro paragraph)
- `body` (array of paragraphs)
- optional `pullQuote` + `pullQuoteBy`

Adding a chapter: append a new entry to the array. Rebuild picks it up automatically.

## Structure

```
app/
  layout.tsx      # fonts, metadata, html shell
  page.tsx        # hero + chapter loop + footer
  globals.css     # tailwind + minimal reset
content/
  chapters.ts     # 8 chapters, editable
components/       # reserved for future extractions
public/           # images go here (polaroids, hero, etc.)
```

## Status (2026-04-15)

- ✅ Scaffold complete
- ✅ 8 chapters drafted from Rick's origin story
- ⏳ Hero image + chapter photos TBD (polaroids, era shots)
- ⏳ Custom domain wiring
- ⏳ Contact form or just mailto?
