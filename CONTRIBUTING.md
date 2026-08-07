# Contributing to Blog

Thanks for your interest in contributing. This document covers everything you
need to get a change merged.

> **Heads up on project maturity.** This repository is an early scaffold — there
> is no blog-generation functionality yet. Architecture is still in flux, so
> before investing time in a large change, please open an issue or a discussion
> to agree on the approach. Small fixes can go straight to a pull request.

## Contributor License Agreement

**All contributors must sign the [CLA](CLA.md) before their first pull request
can be merged.**

You do not need to do anything in advance. When you open your first pull
request, a bot will comment asking you to confirm. Reply with exactly:

```
I have read the CLA Document and I hereby sign the CLA
```

That is it — your signature is recorded against your GitHub username and you
will not be asked again.

**Why this project asks for one:** Blog is released under the AGPL-3.0 and is
also the basis of a commercial hosted service. The CLA grants the maintainer the
rights needed to offer the project under additional terms. Without it,
contributed code could only ever be distributed under the AGPL-3.0. You keep
full ownership of your contribution and can use it however you like elsewhere.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By
participating, you agree to uphold it.

## Local setup

**Prerequisites:** Node.js >= 22 (see [`.nvmrc`](.nvmrc)) and pnpm 10.

```bash
git clone https://github.com/<your-username>/blog.git
cd blog
pnpm install
pnpm dev
```

If you use `nvm`, run `nvm use` to pick up the pinned Node version. If you do not
have pnpm, `corepack enable` will install the version pinned in
`package.json`'s `packageManager` field.

## Making a change

1. **Fork** the repository and create a branch off `master`.
2. Use a descriptive branch name: `feat/post-editor`, `fix/theme-flicker`,
   `docs/readme-setup`.
3. Make your change.
4. **Run the full check suite locally** — this is exactly what CI runs, so a
   green run here means a green run there:

   ```bash
   pnpm lint
   pnpm typecheck
   pnpm format:check
   pnpm test
   pnpm build
   ```

   If `format:check` fails, run `pnpm format` to fix it automatically.

5. Open a pull request against `master` and fill in the template.

## Commit messages

This project uses [Conventional Commits](https://www.conventionalcommits.org).
The prefix determines how the change is categorized in the changelog.

```
feat: add markdown editor to the post composer
fix: prevent theme flash on first paint
docs: document the AGPL network clause
chore: bump next to 16.2.7
style: apply prettier across codebase
refactor: extract slug generation into lib
test: cover the cn class merger
```

Keep the subject line in the imperative mood and under ~72 characters. Add a body
when the _why_ is not obvious from the diff.

**Your prefix decides the next version number** — see [Releases](#releases)
below. Please pick it deliberately rather than defaulting to `chore:`.

## Releases

Releases are automated with
[release-please](https://github.com/googleapis/release-please). Nobody edits
version numbers or the changelog by hand.

When commits land on `master`, a bot opens (or updates) a pull request titled
`chore(master): release x.y.z`. That PR contains the computed version bump and
the generated changelog entries. Merging it tags the commit and publishes a
GitHub Release. Nothing is published to npm — this is an application, not a
package.

How your commit prefix maps to the bump:

| Prefix                                  | Effect                                 |
| --------------------------------------- | -------------------------------------- |
| `fix:`                                  | Patch — `0.1.0` → `0.1.1`              |
| `feat:`                                 | Minor — `0.1.0` → `0.2.0`              |
| `feat!:` or a `BREAKING CHANGE:` footer | Minor while below `1.0.0`, major after |
| `perf:`, `refactor:`, `docs:`           | Appear in the changelog, no bump       |
| `chore:`, `style:`, `test:`, `ci:`      | No changelog entry, no bump            |

Two consequences worth knowing:

- **`CHANGELOG.md` is generated.** Do not edit it — your changes are overwritten
  on the next release. It is also in `.prettierignore`, so `pnpm format` leaves
  it alone.
- **A pull request of only `chore:`/`ci:` commits produces no release.** That is
  intended: releases should correspond to user-visible change.

## Coding conventions

- **TypeScript, strict mode.** Avoid `any`; prefer `unknown` plus narrowing.
- **Formatting is not a matter of taste here** — Prettier owns it. Do not
  hand-format; run `pnpm format`. Config is in [`.prettierrc`](.prettierrc)
  (no semicolons, double quotes, 2-space indent, 80 columns).
- **Imports** use the `@/*` alias for anything inside the project.
- **Components** are function declarations, not arrow-function consts, matching
  the existing files.
- **Adding shadcn/ui components:** use the CLI (`pnpm dlx shadcn@latest add
<name>`) rather than hand-writing them, so they stay upgradable. Files landing
  in `components/ui/` are treated as generated code — see below.

### Files that carry a license header

New **original** source files should start with:

```ts
/**
 * Copyright (C) 2026 Mustaque Nadim
 * SPDX-License-Identifier: AGPL-3.0-only
 */
```

Do **not** add this header to CLI-generated shadcn/ui files (`components/ui/**`,
`lib/utils.ts`, `hooks/use-mobile.ts`) — that code is MIT-licensed and derived
from upstream. See [NOTICE](NOTICE).

## Tests

Tests use [Vitest](https://vitest.dev) with Testing Library and run in `jsdom`.

- Co-locate test files next to the code as `*.test.ts` / `*.test.tsx`.
- Test behaviour through the public interface, not implementation details.
- Query by accessible role or text rather than test IDs where practical.

```bash
pnpm test          # once
pnpm test:watch    # while developing
pnpm test:coverage # with coverage
```

New features should come with tests. Bug fixes should come with a test that
fails before the fix.

## Reporting bugs and requesting features

Use the [issue templates](https://github.com/mustaquenadim/blog/issues/new/choose).
For bugs, the single most useful thing you can include is a reliable set of
reproduction steps.

**Do not report security vulnerabilities in public issues** — follow
[SECURITY.md](SECURITY.md) instead.

## License

By contributing, you agree that your contributions will be licensed under the
AGPL-3.0, and that the maintainer may additionally license them under other
terms as set out in the [CLA](CLA.md).
