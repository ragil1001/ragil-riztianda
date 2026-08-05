# Public Deployment Audit — 5 August 2026

This report records external checks run from GitHub-hosted Ubuntu runners. It distinguishes a successful build from an application that actually renders in a browser.

## Method

Each public URL was checked using:

1. DNS resolution and an HTTP request with redirect following.
2. A Chromium browser session through Playwright.
3. Required visible text or Flutter render-node checks.
4. Browser page errors, HTTP responses of 400 or higher, and failed resource requests.

A Vercel `success` status alone was not accepted as proof that an application rendered.

## Results

| Target | Result | Evidence checked |
| --- | --- | --- |
| Portfolio homepage | PASS | HTTP 200; title `Ragil Riztianda`; visible `PROJECT EVIDENCE` and `ALL 54 REPOSITORIES`; no page errors or failed resources. |
| PresensiQMS Flutter Web review build | PASS | HTTP 200; title `PresensiQMS`; Flutter render nodes attached; no page errors or failed resources. |
| Pakel homepage | PASS after source fixes | HTTP 200; title and visible Pakel content; no page errors or failed resources after removing two broken React CDN scripts and replacing unserved video assets with an existing repository photo. |
| QMS custom domain | FAIL / unavailable | DNS resolved through Cloudflare, but the origin returned HTTP 522. The project is not labeled as an active deployment. |

## Repository catalog validation

The portfolio catalog was compared against the authenticated list of repositories owned by `ragil1001`.

- Expected repositories: 54
- Catalog entries: 54
- Unique entries: 54
- Missing entries: 0
- Unexpected entries: 0
- Duplicate entries: 0

The validation workflow completed successfully.

## Scope limitations

These checks prove only the tested public entry pages rendered at the audit time. They do not prove:

- every application route works;
- authenticated workflows work;
- backend databases, queues, storage, email, maps, notifications, or third-party integrations are healthy;
- private/internal repositories are safe or configured for public deployment;
- mobile applications behave identically on Android or iOS;
- historical screenshots represent current public availability.

Private systems, backend-only repositories, coursework, duplicate repositories, empty repositories, and experiments remain cataloged with their actual status rather than being presented as live products.
