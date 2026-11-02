# khatirkoohi.com

Personal site: home, work (project case studies), writing, CV, contact.
Astro, static output, deployed to GitHub Pages by GitHub Actions.

## Run it locally

Needs Node 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type and content check
npm run build      # static site in dist/
```

Set `SKIP_GITHUB=1` to build without calling the GitHub API (offline).

## Where things live

| What | File |
|---|---|
| Name, title, one sentence, stack, email, GitHub/LinkedIn URLs, location | `src/site.ts` |
| Public CV (the public cut) | `src/cv.ts` |
| Project case studies | `src/content/projects/*.md` |
| Articles | `src/content/writing/*.md` |
| Content rules (fields each page needs) | `src/content.config.ts` |
| Colours, type, spacing | `src/styles/global.css` |
| Deploy, weekly rebuild, secret scan | `.github/workflows/deploy.yml` |

Everything starts as `draft: true`. A draft never appears on the built site.

### Publishing a project

1. Make the repo public (fresh history, gitleaks clean).
2. In its `.md` file: uncomment `repo:` and set `owner/name`, set `status: public`, set
   `draft: false`.
3. Add `numbers` only from the claim ledger, each with its `method`.
4. Push. Stars, latest release and the "good first issue" count are pulled from GitHub at
   build time and refreshed every Monday by the scheduled rebuild. If GitHub can't be reached
   the facts are simply left out; the build never fails because of them.

### Publishing an article

Set `draft: false` and the real `published` date. It appears on Writing, the home page and
the RSS feed (`/rss.xml`).

## Put it live (one time)

1. **Create the repo** on GitHub (public or private both work with Pages on a paid plan;
   on a free plan it must be public). Push this folder to `main`:
   ```bash
   git init -b main
   git add .
   git commit -m "Site skeleton"
   git remote add origin git@github.com:<you>/khatirkoohi.com.git
   git push -u origin main
   ```
2. **Pages source:** repo Settings → Pages → Build and deployment → Source:
   **GitHub Actions**. The first push then builds and deploys.
3. **DNS at the domain registrar** for `khatirkoohi.com`:

   | Type | Host | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | `<you>.github.io` |

   Remove any parking or forwarding records the registrar added for `@` and `www`.
4. **Custom domain:** Settings → Pages → Custom domain: `khatirkoohi.com` (the `public/CNAME`
   file already says this). Wait for the DNS check to pass.
5. **Verify the domain** for your account (GitHub → your Settings → Pages → Add a domain).
   This stops anyone else claiming it if the repo is ever removed.
6. **Enforce HTTPS** in Settings → Pages once the certificate is issued (can take up to an
   hour after DNS resolves).

## Open items before the site goes public

- [ ] Decision 2: confirm the public CV cut in `src/cv.ts` (no location, relocation,
      visa, or city names; payments described by mechanism).
- [ ] Telecom wording in the CV waits on the lawyer hour; adjust `src/cv.ts` after it.
- [ ] Fill `github` and `linkedin` in `src/site.ts` when those profiles are ready.
- [ ] Export the CV PDF from the public cut, put it in `public/`, set `cvPdf` in
      `src/site.ts`.
- [ ] Stream test harness: publish when the repo opens (target 31 Dec 2026).
- [ ] AI Receptionist: design page in December, `status: public` when the repo opens.
- [ ] First article (May 2027), numbers only from the claim ledger.
- [ ] `location` in `src/site.ts` stays empty until arrival week.

## Rules this site follows

- Nothing secret is ever committed. `.env*` is ignored and every deploy scans the full
  history with gitleaks first; a finding stops the deploy.
- Only my own technical work. No client or member data, no payment links, no trading
  terms, no location or relocation content until after crossing.
- Every number has a stated method and a claim-ledger entry.
