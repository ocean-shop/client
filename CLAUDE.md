# Claude Code Project Rules

Apply these rules for any change in this repository.

## Next.js Version Warning

This is NOT the Next.js you know.

This version has breaking changes - APIs, conventions, and file structure may all differ from default assumptions. Read the relevant guide in `node_modules/next/dist/docs/` before writing code, and heed deprecation notices.

## Next.js Basics

- Treat this project as modern Next.js App Router.
- Prefer Server Components by default; add `"use client"` only when browser APIs, stateful hooks, or event handlers are required.
- Keep route files focused (`page`, `layout`, `loading`, `error`); extract reusable logic/components to separate files.
- Use `next/link` and `next/image` for navigation and images when applicable.
- Before using unfamiliar Next.js APIs, check the local Next docs in `node_modules/next/dist/docs/`.
- Use colors only from `src/app/globals.css` `@theme inline` tokens.

## Shared UI Folder

- Use `ui/` for shared, reusable UI components used across features.
- Keep `ui/` components presentational and composable (buttons, inputs, cards, badges, dialogs).
- Do not place page-specific business logic in `ui/`; keep feature/domain logic close to feature modules.
- Prefer consistent naming and exports for reusability (for example, one component per file and clear prop interfaces).

## Types And Constants Architecture

- Always separate type definitions into `types/` files.
- Always separate static mappings and config values into `constants/` files.
- In component files, keep rendering and behavior logic; import types/constants instead of defining large blocks inline.
- Prefer this folder structure for shared components:
  - `component-name/component-name.tsx`
  - `component-name/types/component-name.types.ts`
  - `component-name/constants/component-name.constants.ts`
