# StockPOS

Multi-tenant inventory & POS SaaS. This folder is the Next.js app from the recommended stack brief.

## What is built now

**Section A — Public website and onboarding** (mockup screens 1–11), plus the handoff screens **Sign up [12]** and **Login [13]**.

```
stockpos/
  prisma/schema.prisma          planned Postgres models
  src/
    app/
      (public)/                 screens 1–11 (marketing chrome)
        page.tsx                [1] Home
        features/               [2]
        pricing/                [3]
        how-it-works/           [4]
        industries/             [5]
        about/                  [6]
        contact/                [7]
        help/                   [8] + articles
        faq/                    [9]
        terms/                  [10]
        privacy/                [11]
      (auth)/
        signup/                 [12] start of Section B
        login/                  [13]
      api/contact/              contact form (not an account)
    components/public/          Header, Footer, PageHero
    content/help.ts
    lib/nav.ts
```

Section A never creates a tenant. Contact messages go to `data/contact-messages.json` until Postgres is wired.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000
