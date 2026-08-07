# Security Policy

## Supported versions

This project is pre-release and has not yet cut a stable version. Only the
latest commit on `master` receives security fixes.

| Version           | Supported |
| ----------------- | --------- |
| `master` (latest) | Yes       |
| Anything older    | No        |

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues,
discussions, or pull requests.** Public disclosure before a fix is available puts
users at risk.

Instead, use GitHub's private reporting:

1. Go to the [Security tab](https://github.com/mustaquenadim/blog/security) of
   this repository.
2. Click **Report a vulnerability**.
3. Fill in the advisory form.

This opens a private channel visible only to the maintainer.

If you cannot use GitHub Security Advisories, email
**mustaquenadim2000@gmail.com** with `SECURITY` in the subject line.

### What to include

The more of this you can provide, the faster a fix lands:

- The type of issue (XSS, SSRF, auth bypass, injection, dependency CVE, etc.)
- Full paths of the source files involved
- The affected commit or branch
- Step-by-step reproduction instructions
- Proof-of-concept code, if you have it
- What an attacker could achieve — the impact

### What to expect

| Stage              | Target                                                     |
| ------------------ | ---------------------------------------------------------- |
| Acknowledgement    | Within 72 hours                                            |
| Initial assessment | Within 7 days                                              |
| Fix or mitigation  | Depends on severity and complexity; you'll be kept updated |

This is a solo-maintained project, so please treat these as good-faith targets
rather than a contractual SLA.

## Disclosure policy

Please give the maintainer a reasonable opportunity to fix the issue before
disclosing it publicly — 90 days is the usual benchmark. Once a fix is released,
a security advisory will be published, and you will be credited unless you ask
not to be.

## Scope

In scope: the source code in this repository and its build/CI configuration.

Out of scope: vulnerabilities in third-party dependencies (report those upstream,
though a heads-up here is welcome so the dependency can be pinned or replaced),
and issues that require an already-compromised machine or a physically present
attacker.

## Safe harbour

Good-faith security research conducted under this policy is welcome. Do not
access or modify data you do not own, do not degrade the service for others, and
do not run automated scanning that could amount to a denial-of-service.
