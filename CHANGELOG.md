# Changelog

Entries for 0.1.0 and earlier were written by hand. Every release after 0.1.0 is
generated automatically by
[release-please](https://github.com/googleapis/release-please) from
[Conventional Commits](https://www.conventionalcommits.org/).

**Do not edit it by hand** — the next release will overwrite your changes. To
influence what appears here, write a good commit subject with the right prefix
(`feat:`, `fix:`, `perf:`, `refactor:`, `docs:`). See
[CONTRIBUTING.md](CONTRIBUTING.md#releases).

## 0.1.0 (2026-08-07)

Baseline for automated releases. The project is an early scaffold — a Next.js
App Router setup with shadcn/ui, theming, and tooling. There is no blog
generation functionality yet.

### Added

- Open-source project foundation: MIT `LICENSE` and a `NOTICE` carrying the
  third-party attribution for the vendored shadcn/ui and Base UI code.
- Developer Certificate of Origin sign-off, enforced by a CI check on pull
  requests.
- Project documentation: rewritten `README.md`, `CONTRIBUTING.md`,
  `CODE_OF_CONDUCT.md`, and `SECURITY.md`.
- GitHub automation: CI workflow (lint, typecheck, format check, test, build),
  DCO sign-off check, release-please workflow, Dependabot configuration, and
  issue/pull request templates.
- Test infrastructure: Vitest with Testing Library and `jsdom`, plus smoke
  tests for `cn()` and the `Button` component.
- Repository hygiene: `.gitattributes` (LF normalization), `.editorconfig`,
  `.nvmrc`, and `.env.example`.

### Changed

- `package.json` now declares full public-repository metadata: `description`,
  `license`, `author`, `repository`, `homepage`, `bugs`, `keywords`, `engines`,
  and `packageManager`. The package name was lowercased to `blog`.
- `lint` now fails on warnings; `format` covers all file types, with a
  non-writing `format:check` for CI.
- Applied Prettier across the entire codebase.

### Fixed

- Two `react-hooks/set-state-in-effect` errors in vendored shadcn/ui code that
  caused `pnpm lint` to exit non-zero, which would have failed CI on its first
  run.

### Security

- Hardened `.gitignore` against accidentally committed keys, certificates,
  service-account files, and deployment caches.

## 0.0.1 (2026-08-07)

The initial project scaffold, before the repository was prepared for open
source. Never tagged or released; recorded here so the history is complete.

Covers two commits: `99eeba7` (initial commit, 24 files) and `2860b27`
(shadcn/ui component library, 64 files).

### Added

- Next.js 16.2.6 App Router scaffold with React 19.2.4 and TypeScript in strict
  mode.
- Tailwind CSS v4 using the CSS-first `@theme inline` configuration in
  `app/globals.css` — there is no `tailwind.config` file.
- shadcn/ui configured with the `base-nova` style on Base UI primitives, plus
  the `cn` class-name helper in `lib/utils.ts`.
- Dark mode via `next-themes`, with a `d` keyboard shortcut that is suppressed
  while the user is typing in an input, textarea, select, or contenteditable.
- Geist and Geist Mono loaded through `next/font/google`.
- Tooling: ESLint 9 flat config extending `eslint-config-next`, Prettier with
  `prettier-plugin-tailwindcss`, PostCSS, and a pnpm workspace.
- The full set of 61 shadcn/ui primitives (accordion through tooltip) and the
  `useIsMobile` hook, with their supporting dependencies: `cmdk`, `date-fns`,
  `embla-carousel-react`, `input-otp`, `react-day-picker`,
  `react-resizable-panels`, and `recharts`.

### Known issues

Carried into 0.1.0 and resolved there:

- No `LICENSE`, so the published code was legally all rights reserved. Resolved
  in 0.1.0 with the MIT License.
- `pnpm lint` exited non-zero on two `react-hooks/set-state-in-effect` errors.
- `prettier --check` failed on 73 files.
- No test runner and no tests.
