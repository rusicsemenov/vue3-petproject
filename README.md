# Vue 3 + Vite Demo

A Vue 3 app with Vite, TypeScript, Pinia, Vue Router, Tailwind CSS v4, Toast notifications, unit (Vitest) and e2e (
Playwright) tests.

**Demo:** [https://vue3-petproject.vercel.app](https://vue3-petproject.vercel.app)

## Prerequisites

- Node.js ^20.19.0 or >=22.12.0
- pnpm (recommended)

## Setup & Scripts

```sh
pnpm install           # install deps
pnpm dev               # dev server
pnpm build             # type-check + build
pnpm preview           # preview build
pnpm test:unit         # unit tests (Vitest)
pnpm test:e2e          # e2e tests (Playwright)
pnpm lint              # ESLint
pnpm format            # Prettier (src/)
```

## Tech Stack

- Vue 3, Vite, TypeScript
- Pinia, Vue Router
- Tailwind CSS v4, vue-toastification
- Vitest, @vue/test-utils, Playwright

## Docker

```sh
docker build -t vue-demo .
docker run --rm -p 4173:4173 vue-demo
```

App: [http://localhost:4173](http://localhost:4173)

## App Structure

- Entry: `src/main.ts` (registers Pinia, Router, Toastification)
- Routing: `src/router/index.ts`
    - `/`, `/marketplace`, `/about`, `/films`, `/film/:id`, fallback
- Stores: `src/stores/basket.ts`, `src/stores/films.ts`
- Tailwind: `tailwind.config.js`, plugin: `@tailwindcss/vite`

## Testing

- Unit: `pnpm test:unit` (config: `vitest.config.ts`)
- E2E: `pnpm test:e2e` (first: `npx playwright install`)
    - Chromium: `pnpm test:e2e --project=chromium`
    - File: `pnpm test:e2e e2e/vue.spec.ts`
    - Debug: `pnpm test:e2e --debug`

## Linting & Formatting

```sh
pnpm lint    # ESLint
pnpm format  # Prettier
```

## Environment

- Vite config: `vite.config.ts` (alias `@` → `src`)
- Node engines: `package.json`
