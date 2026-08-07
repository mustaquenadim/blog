# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Open-source project foundation: AGPL-3.0 `LICENSE`, `NOTICE` with third-party
  attribution, and a Contributor License Agreement (`CLA.md`).
- Project documentation: rewritten `README.md`, `CONTRIBUTING.md`,
  `CODE_OF_CONDUCT.md`, `SECURITY.md`, and this changelog.
- GitHub automation: CI workflow (lint, typecheck, format check, test, build),
  CLA assistant workflow, Dependabot configuration, and issue/pull request
  templates.
- Test infrastructure: Vitest with Testing Library and `jsdom`, plus initial
  smoke tests for `cn()` and the `Button` component.
- Repository hygiene: `.gitattributes` (LF normalization), `.editorconfig`,
  `.nvmrc`, and `.env.example`.

### Changed

- `package.json` now declares full public-repository metadata: `description`,
  `license`, `author`, `repository`, `homepage`, `bugs`, `keywords`, `engines`,
  and `packageManager`. The package name was lowercased to `blog`.
- `lint` now fails on warnings (`eslint --max-warnings 0`).
- `format` covers CSS, JSON, Markdown, MJS, and YAML in addition to TypeScript;
  added a non-writing `format:check` for CI.
- Applied Prettier across the entire codebase.

### Security

- Hardened `.gitignore` against accidentally committed keys, certificates,
  service-account files, and deployment caches.

[Unreleased]: https://github.com/mustaquenadim/blog/commits/master
