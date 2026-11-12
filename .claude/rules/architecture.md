# Architecture

## Top-Level Layout

Everything lives under `app/` (there is no `src/`). `@/*` resolves to the repo root, so absolute
imports look like `@/app/shared/products/...`.

| Folder            | Holds                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `app/(pages)/`    | Route segments and their feature code: `catalog`, `product`, `checkout`, `login`, `cabinet`, `(info)` pages                       |
| `app/layouts/`    | App chrome rendered by `app/layout.tsx`: `header`, `footer`, `bottom-tab-bar`, `cart-modal`, `lazy-cart-modal`                    |
| `app/components/` | Feature components used by the home page or by several routes (`hero`, `catalog-grid`, `product-favorite-button`, ...)            |
| `app/ui/`         | Shared, presentational, composable UI (`button`, `input`, `modal`, `select`, `pagination`, `product-card`, `date-picker`, ...)    |
| `app/shared/`     | Domain modules with no UI: `auth`, `cart`, `catalog-categories`, `delivery`, `favorites`, `orders`, `products`, `seo`, `support`  |
| `app/core/`       | Infrastructure: `api` (fetch wrappers, errors), `providers` (query, toast, auth user), `hooks`, `store`, `local-storage`, `fonts` |
| `proxy.ts`        | Next 16 proxy (former middleware): refreshes auth cookies and guards protected paths                                              |
| `scripts/`        | Font subsetting scripts (`icons:subset`, `fonts:subset`)                                                                          |

Root route files: `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/sitemap.ts`,
`app/robots.ts`, `app/manifest.ts`, `app/og-image/route.tsx`.

## Module Anatomy

Any module (route segment, component, domain module) is split into role folders. Only create a
folder when it has at least one file.

```
feature-or-component/
  feature-or-component.tsx       # component (or page.tsx / layout.tsx for a route)
  types/<name>.types.ts          # all type definitions
  constants/<name>.constants.ts  # static values, UI copy, class names, API URLs, config
  helpers/<verb-noun>.ts         # one pure-ish function per file, exported as `...Helper`
  hooks/use-<name>.ts            # one hook per file ("use client")
  actions/<verb-noun>.ts         # server actions ("use server"), one per file, `...Action`
  api/get-<noun>.ts              # server-side reads for Server Components
  components/<child>/...         # local child components, same anatomy, recursively
  <name>-store.ts                # module-level store (cart, favorites, toast)
```

## Nested Components ("Infinity Components")

- A component that renders other components local to it (not shared via `ui/`) nests them under its
  own `components/` folder. This recurses to any depth:
  `header/components/mobile-header/components/nav-drawer/components/nav-drawer-shortcuts/...`
- Each nested component keeps its own `<name>.tsx`, `types/`, `constants/` (and `helpers/`, `hooks/`
  if needed).
- Child component names are prefixed with the parent's domain (`cabinet-order-card`,
  `catalog-filters-sheet`) so file names stay unique and searchable.
- When a component is needed by a sibling branch, move it up to the nearest common parent's
  `components/`; when needed across features, move it to `app/components/` (feature) or `app/ui/`
  (presentational).

## Where Code Goes

- `app/ui/` — presentational only: props in, markup out. No API calls, no domain stores, no
  page-specific logic. Variants/sizes via typed props mapped to class-name constants (see `button`).
- `app/shared/<domain>/` — domain logic reused by several routes: API URLs, types, actions, api
  reads, helpers, stores and their hooks.
- `app/(pages)/<route>/` — anything used only by that route. Route files (`page`, `layout`,
  `loading`, `error`) stay thin: resolve params, fetch, `notFound()` / redirect, render one feature
  component.
- Promote code upward (`route → shared → core`) only when a second consumer appears.

## Data Flow

- **Server reads** — Server Components call functions in `api/` folders. Public catalog reads use
  `fetchApiOrFallback` (never throws; returns a fallback so pages still render) with
  `next: { revalidate: API_DEFAULT_REVALIDATE_SECONDS }`. Use `apiFetch` when a failure must throw
  an `ApiError`.
- **Authenticated requests** — `authFetch` (server-only) attaches the bearer token from the httpOnly
  cookie and uses `cache: "no-store"`. Get the user with `getAuthUser()`; protected pages call
  `requireAuthUser(path)`, which redirects to login.
- **Client → backend** — `API_BASE_URL` and `SHOP_ID` are server-only, so client code never calls
  the backend directly. It calls a server action (`"use server"`) which proxies the request.
- **Server action results** — actions never throw to the client; they return a discriminated union
  from `app/core/api/types/api.types.ts` (`ApiActionResult<T>` / `ApiActionMessageResult<T>`):
  `{ ok: true, ...data } | { ok: false, status, message? }`. Build failures with
  `readApiActionFailure(response)`. Call `refresh()` from `next/cache` after mutations that change
  server-rendered data.
- **Client reads** — TanStack Query hooks (`useQuery` with a `queryFn` that calls a server action,
  query keys from constants, `placeholderData: keepPreviousData` for typing-driven queries). The
  `QueryClient` comes from `app/core/providers/query-provider`.
- **API URLs** — defined as constants (or URL-builder functions) in `constants/`, built from
  `process.env.API_BASE_URL`, with `shopId` appended through `withShopIdSearchParams`.
- **Errors to users** — Ukrainian messages from `API_ERROR_MESSAGES`; surface failures with
  `toastStore.error(title, message)`.

## Client State

- No Redux/Zustand/Context for app state. Cross-component state is a module-level store
  (`cart-store.ts`, `favorites-store.ts`, `toast-store.ts`) exposing `subscribe`, `getState` /
  `getX`, `getServerX` and actions, read through `useSyncExternalStore` in a `use-*` hook.
- Stores must be import-safe on the server: read browser APIs lazily, provide a server snapshot.
- Persisted state goes through `localStorageService` (`app/core/local-storage`), which is SSR-safe
  and never throws.
- React Context is used only for providers (`auth-user-provider`, query, toast).

## Rendering

- Server Components by default; add `"use client"` only for state, effects, event handlers or
  browser APIs, and push it as far down the tree as possible.
- Heavy client-only UI is lazy-loaded (`lazy-cart-modal`).
- SEO: `generateMetadata` built by `build-*-metadata` helpers on top of
  `app/shared/seo/helpers/build-seo-metadata`; structured data via `<JsonLd>` and
  `build-*-json-ld` helpers; new public routes belong in `app/sitemap.ts`.
- Use `next/link` for navigation and `next/image` for images (remote hosts are allow-listed in
  `next.config.ts`).
- Fonts are self-hosted subsets loaded with `next/font/local` in `app/layout.tsx`; icons are
  Material Symbols ligatures rendered by `app/ui/material-icon`.

## Feature Flags

Public toggles are `NEXT_PUBLIC_*_ENABLED` env vars read as `process.env.X !== "false"` (on by
default) inside a `constants/` file, and documented in `.env.example`.
