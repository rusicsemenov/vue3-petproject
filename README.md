# Demo – Vue 3 + Vite

A Vue 3 application scaffolded with Vite. Includes TypeScript, Pinia, Vue Router, Tailwind CSS v4, Toast notifications,
unit tests (Vitest) and e2e tests (Playwright).

## Prerequisites

- Node.js ^20.19.0 or >=22.12.0
- pnpm (recommended)

## Setup

```sh
pnpm install
```

## Scripts

```sh
pnpm dev        # start dev server (Vite)
pnpm build      # type-check + build for production
pnpm preview    # preview built app on local server
pnpm test:unit  # run unit tests (Vitest)
pnpm test:e2e   # run end-to-end tests (Playwright)
pnpm lint       # run ESLint with autofix
pnpm format     # run Prettier on src/
```

Notes:

- `build` runs `vue-tsc --build` then `vite build`.
- E2E uses an auto-started dev/preview server depending on CI.

## Tech Stack

- Vue 3 + Vite
- TypeScript
- Pinia (state)
- Vue Router (routing)
- Tailwind CSS v4
- vue-toastification
- Vitest + @vue/test-utils (unit)
- Playwright (e2e)

## Docker

This project includes a multi-stage Dockerfile for optimized production builds.

### Build the Docker image

```sh
docker build -t vue-demo .
```

### Run the container

```sh
docker run --rm -p 4173:4173 vue-demo
```

- The app will be available at [http://localhost:4173](http://localhost:4173)
- The container uses a multi-stage build to keep the image small and only includes production dependencies and the built
  app.
- The preview server is started with `--host` so it is accessible from outside the container.

## App Entry

- `src/main.ts` registers Pinia, Router, and Toastification, and mounts the app.

## Routing

Defined in `src/router/index.ts`:

- `/` → `HomePage`
- `/marketplace` → `MarketplacePage`
- `/about` → `AboutPage`
- `/films` → `FilmsPage`
- `/film/:id` → `FilmPage`
- `/:catchAll(.*)*` → `NotFoundPage`

## Stores

- `src/stores/counter.ts`
- `src/stores/films.ts`

## Tailwind

- Config: `tailwind.config.js`
- Vite plugin: `@tailwindcss/vite`

## Testing

### Unit (Vitest)

```sh
pnpm test:unit
```

Configuration extends Vite via `vitest.config.ts` (jsdom env, excludes `e2e/**`).

### E2E (Playwright)

First time only:

```sh
npx playwright install
```

Run tests:

```sh
pnpm test:e2e
# Chromium only
pnpm test:e2e --project=chromium
# Specific file
pnpm test:e2e e2e/vue.spec.ts
# Debug mode
pnpm test:e2e --debug
```

Playwright auto-runs `pnpm dev` (or `pnpm preview` on CI) with the proper port.

## Linting & Formatting

```sh
pnpm lint    # ESLint
pnpm format  # Prettier (src/)
```

## Environment

- Vite config: `vite.config.ts` (aliases `@` → `src`)
- Node engines enforced via `package.json`.
