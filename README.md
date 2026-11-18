# Ocean Shop — Storefront Client

Customer-facing storefront for Ocean Shop. The UI is in Ukrainian and prices are in hryvnia (₴).
All data comes from the separate Ocean Shop backend API, scoped to a single shop.

**Features**

- Home page with hero banner, popular products and categories
- Catalog by category with attribute, price and availability filters, sorting and pagination
- Product search (header suggestions + full results page)
- Product pages with variations, favorites and "buy in one click"
- Cart stored in the browser and synced across tabs
- Checkout with Nova Poshta / Ukrposhta delivery and online or cash-on-delivery payment
- Login by phone or email with a one-time code (OTP)
- User cabinet: profile, address book, orders with status tracking, favorites
- Info pages: about, contacts, delivery, returns, loyalty, FAQ, terms
- SEO: metadata, Open Graph image, JSON-LD, sitemap and robots

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, React Compiler, `proxy.ts`)
- React 19, TypeScript (strict)
- Tailwind CSS 4
- TanStack Query 5
- ESLint 9 + Prettier 3

## Getting Started

### Requirements

- Node.js 22
- npm
- Access to an Ocean Shop backend API

### Install

```bash
npm ci
cp .env.example .env
```

Fill in `.env` (see [Environment Variables](#environment-variables)), then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

## Scripts

| Command                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start the dev server on port 3002                             |
| `npm run build`        | Production build (type-checks and prerenders pages)           |
| `npm run start`        | Serve the production build                                    |
| `npm run lint`         | Run ESLint                                                    |
| `npm run format`       | Format all files with Prettier                                |
| `npm run format:check` | Check formatting without writing                              |
| `npm run check`        | Lint + format check + build — the same checks CI runs         |
| `npm run icons:subset` | Rebuild the Material Symbols icon font after using a new icon |
| `npm run fonts:subset` | Rebuild the self-hosted Inter / Unbounded font subsets        |

## Environment Variables

Copy `.env.example` to `.env`. Never commit `.env`.

| Variable              | Scope  | Description                                                |
| --------------------- | ------ | ---------------------------------------------------------- |
| `API_BASE_URL`        | Server | Base URL of the Ocean Shop backend API                     |
| `SHOP_ID`             | Server | ID of the shop every catalog, auth and order request uses  |
| `SITE_URL`            | Server | Public origin of the storefront, for canonical and OG URLs |
| `NOVA_POSHTA_API_KEY` | Server | Nova Poshta API key for city and warehouse lookup          |
| `UKRPOSHTA_API_TOKEN` | Server | Ukrposhta API token for post office lookup                 |

Server variables are never exposed to the browser; client code reaches the API through server
actions.

## Shop Settings

Feature toggles and the color scheme are managed per shop in the admin and read from
`GET /settings/shops-client/:shopId` (`app/shared/shop-settings`):

| Setting               | Effect when off                                                   |
| --------------------- | ----------------------------------------------------------------- |
| `useUkrposhta`        | Hides Ukrposhta in checkout, the address book and delivery lookup |
| `usePhoneLogin`       | Email-only login                                                  |
| `useAutomaticPayment` | Hides Apple Pay / Google Pay                                      |
| `useOneClickPurchase` | Hides the "Купити в 1 клік" button on product pages               |

The root layout reads the settings through the Next data cache (revalidated every 5 minutes), so
pages stay static and an admin change shows up within a few minutes. Colors are written as CSS
variables onto `<html>` in the server HTML, so there is no flash of the default palette. If the
request fails, every optional feature is off and the default palette is used.

`npm run build` needs a reachable `API_BASE_URL` and a valid `SHOP_ID`, because pages are
prerendered with live data.

## Project Structure

```
app/
├── (pages)/        Routes: catalog, product, checkout, login, cabinet, (info) pages
├── layouts/        Header, footer, bottom tab bar, cart modal
├── components/     Feature components shared by several pages
├── ui/             Presentational UI kit (button, input, modal, select, ...)
├── shared/         Domain modules: auth, cart, products, favorites, delivery, orders, seo
├── core/           Infrastructure: API helpers, providers, hooks, stores, fonts
├── globals.css     Tailwind theme tokens
└── layout.tsx      Root layout
proxy.ts            Refreshes auth cookies and guards protected routes
scripts/            Font subsetting scripts
```

Each component lives in its own folder with separate `types/` and `constants/` files, and nests
its local child components under `components/`:

```
header/
├── header.tsx
├── constants/header.constants.ts
└── components/
    └── mobile-header/
        ├── mobile-header.tsx
        ├── types/mobile-header.types.ts
        └── components/nav-drawer/...
```

Full conventions are in [`.claude/rules/`](.claude/rules) — architecture, code style, security and
git workflow.

## Contributing

- Branch from `main` using `<issue-number>-<short-slug>` (e.g. `21-complete-phase-1`).
- Commit messages: `feat: ...`, `fix: ...`, `refactor: ...` with a capitalized subject.
- Run `npm run check` before pushing.
- Open a pull request into `main`; direct pushes to `main` are not allowed.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs `npm ci` and `npm run check` on Node 22 for
every push and pull request. `API_BASE_URL` and `SHOP_ID` can be overridden with repository
variables.
