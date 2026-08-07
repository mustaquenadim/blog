# Changelog

From 0.1.0 onward this file is generated automatically by
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

- Open-source project foundation: AGPL-3.0 `LICENSE`, `NOTICE` with third-party
  attribution for the vendored shadcn/ui and Base UI code, and a Contributor
  License Agreement (`CLA.md`).
- Project documentation: rewritten `README.md`, `CONTRIBUTING.md`,
  `CODE_OF_CONDUCT.md`, and `SECURITY.md`.
- GitHub automation: CI workflow (lint, typecheck, format check, test, build),
  CLA assistant workflow, release-please workflow, Dependabot configuration,
  and issue/pull request templates.
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
