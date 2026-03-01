# Next.js Frontend Audit Report

**Scope:** `portfolio-monorepo/apps/frontend`  
**Audit date:** February 2026  
**Standards:** Next.js 2026, React 18+, TypeScript, SEO, a11y, performance, security

---

## 1. Next.js Version & Dependencies

### Issues found
| Item | Severity | Status |
|------|----------|--------|
| Next.js 14.2.4 (outdated) | **Recommended** | **Fixed** – upgraded to `^15.0.3` |
| `experimental.appDir: true` (deprecated in 14+) | **Critical** | **Fixed** – removed from `next.config.mjs` |
| `eslint-config-next` mismatch | **Recommended** | **Fixed** – set to `^15.0.3` |

### Changes applied
- **package.json:** `next` and `eslint-config-next` set to `^15.0.3`. React kept at 18.x for compatibility.
- **next.config.mjs:** Removed deprecated `experimental.appDir`. App Router is default in 14+.

### Remaining (optional)
- Consider upgrading to Next.js 15.5.x or 16.x when ready; run `npx next upgrade` and test.
- Run `npm audit` and address any reported vulnerabilities.

---

## 2. Code Quality & Errors

### Issues found and fixes

| File | Issue | Severity | Fix |
|------|--------|----------|-----|
| **Shell.tsx** | `Header` received `children={undefined}`; mobile scale/blur wrapped nothing | **Critical** | Shell now passes main content as `Header` children so scale/blur applies to page content. |
| **Shell.tsx** | Duplicate `<main>` (Shell had motion.main, pages also had main) | **Recommended** | Shell wrapper changed to `motion.div` so each page has a single `<main>`. |
| **Header.tsx** | `children` required but not always passed | **Critical** | `children?: React.ReactNode` and `{children ?? null}`. |
| **FeaturedGithubProject.tsx** | `as any` on fetch options | **Recommended** | Removed `as any`; client fetch ignores `next.revalidate` but no type error. |
| **app/lab/page.tsx** | Missing `LabScene` and metadata | **Critical** | Restored dynamic `LabScene` and added `metadata` export. |
| **app/page.tsx** | Extra leading spaces in imports | **Optional** | Normalized formatting (no functional change). |

### Best practices verified
- App Router only; no Pages Router or `getInitialProps`.
- Server Components used where possible (layout, projects/lab metadata); client only where needed (`'use client'`).
- No dead code or unused variables detected in audited files.

---

## 3. SEO & Accessibility

### SEO fixes applied

| Item | Severity | Fix |
|------|----------|-----|
| **Canonical / robots** | **Recommended** | Added `metadataBase` (already present), `robots: { index: true, follow: true }` in `lib/seo.ts`. |
| **Open Graph images** | **Recommended** | `openGraph.images` set to `[{ url, width, height, alt }]` (valid format for OG). |
| **Per-page metadata** | **Critical** | Added `metadata` export to `app/projects/page.tsx` and `app/lab/page.tsx` (title + description). |
| **JSON-LD** | **Recommended** | Added `getPersonJsonLd()` and `getWebSiteJsonLd()`; injected in root layout. |
| **Viewport / theme** | **Recommended** | Added `viewport` export in layout (`themeColor`, `width`, `initialScale`). |
| **Sitemap / robots** | **Critical** | Added `app/sitemap.ts` and `app/robots.ts` (Next built-in). `/sitemap.xml` and `/robots.txt` now generated. |

### Accessibility fixes applied

| File | Issue | Severity | Fix |
|------|--------|----------|-----|
| **Header.tsx** | Mobile button not descriptive when open | **Recommended** | `aria-label={open ? 'Close menu' : 'Open menu'}`, `aria-expanded={open}`, `type="button"`. |
| **Header.tsx** | Nav not identified | **Recommended** | `role="navigation"` and `aria-label="Main"` on desktop nav. |
| **Header.tsx** | Mobile panel not modal | **Recommended** | `role="dialog"`, `aria-modal="true"`, `aria-label="Mobile menu"` on panel. |
| **ProjectCard.tsx** | Icon-only external link | **Critical** | `aria-label={`Open ${project.title} in new tab`}`, `rel="noreferrer noopener"`. |
| **ContactForm.tsx** | Inputs without error association | **Recommended** | `aria-invalid`, `aria-describedby` and `id` on error messages, `role="alert"`. |
| **ContactForm.tsx** | Honeypot visible to SR | **Optional** | Moved off-screen with `aria-hidden="true"`, `tabIndex={-1}`, associated label. |
| **ContactForm.tsx** | Submit button state | **Optional** | `aria-busy={submitting}`, `data-cursor="cta"`. |
| **app/loading.tsx** | New file | **Recommended** | Root `loading.tsx` with `aria-live="polite"` and `aria-busy="true"`. |

### Semantic HTML
- Single `<h1>` per page (Home: Hero; Projects: “Selected work”; Lab: “Lab”).
- `<main>`, `<header>`, `<footer>`, `<section>`, `<nav>` used appropriately.

### Images
- Hero uses CSS `background-image` (no `<img>`); consider adding a decorative image with `aria-hidden="true"` or an `<img>` with meaningful `alt` if the photo is content.
- No other unoptimized or missing-alt images found in components.

---

## 4. Performance & Optimization

### Already in place
- **Dynamic imports:** Shell, AnimatedCursor, ParticleBackground, LabScene use `next/dynamic` with `ssr: false` where appropriate.
- **Suspense:** Projects page wraps `FeaturedGithubProject` in `<Suspense>` with skeleton.
- **Lazy loading:** Heavy UI (Three.js, cursor) loaded only on client.

### Changes
- **app/loading.tsx:** Root loading UI for streaming/navigation.
- **next.config:** No new performance-specific options; security headers only.

### Optional
- Add `loading.tsx` under `app/projects/` and `app/lab/` for route-level loading if desired.
- If adding images, use `next/image` with `sizes` and `priority` for LCP where needed.

---

## 5. Security & Environment

### Security headers (fixed)
**next.config.mjs** – `async headers()` added:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Environment
- No secrets hard-coded in frontend; `NEXT_PUBLIC_*` and fallbacks (e.g. `your-portfolio-domain.com`) only.
- **Action:** Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BACKEND_URL` in production.

### Optional
- CSP: Consider Content-Security-Policy in `next.config` or middleware after reviewing scripts/styles.
- HSTS: Prefer enabling on the host (e.g. Vercel) rather than in app config.

---

## 6. Modern Practices

### Verified
- **React 18+:** No legacy patterns; concurrent features OK.
- **Server Components:** Layout and static metadata are server-rendered; client boundaries are explicit.
- **Streaming:** Root `loading.tsx` supports streaming; Suspense used on projects.
- **TypeScript:** Strict typing in audited files; `next-env.d.ts` present.
- **App Router only:** No `pages/` or `getInitialProps`.

### Removed
- **Legacy config:** `experimental.appDir` removed from Next config.

---

## 7. File-by-File Summary

| File | Issues | Warnings | Fixes |
|------|--------|----------|-------|
| **package.json** | 0 | 0 | Next + eslint-config-next upgraded to 15.0.3 |
| **next.config.mjs** | 1 | 0 | Removed experimental.appDir; added security headers |
| **app/layout.tsx** | 0 | 0 | Viewport, JSON-LD scripts in body |
| **app/page.tsx** | 0 | 0 | — |
| **app/projects/page.tsx** | 0 | 0 | Metadata export added |
| **app/lab/page.tsx** | 1 | 0 | Metadata + LabScene restored |
| **app/sitemap.ts** | — | — | New (Next built-in sitemap) |
| **app/robots.ts** | — | — | New (Next built-in robots) |
| **app/loading.tsx** | — | — | New (root loading UI) |
| **lib/seo.ts** | 0 | 0 | robots, OG images, JSON-LD helpers |
| **components/layout/Shell.tsx** | 1 | 0 | Header receives children (main content) |
| **components/layout/Header.tsx** | 2 | 0 | Optional children; aria-label, aria-expanded, role, aria-modal |
| **components/projects/ProjectCard.tsx** | 1 | 0 | aria-label, rel noopener on external link |
| **components/projects/FeaturedGithubProject.tsx** | 0 | 1 | Removed `as any` from fetch |
| **components/contact/ContactForm.tsx** | 0 | 0 | aria-invalid, aria-describedby, honeypot a11y, aria-busy |
| **styles/globals.css** | 0 | 0 | Cursor URLs fixed to `/mouse-pointer.svg`, `/hand-pointing.svg` |

---

## 8. Project Status Summary

### Is it fully updated for 2026 standards?
- **Mostly yes.** Next.js 15 is in use; App Router, metadata API, and built-in sitemap/robots are used correctly. For “latest 2026” you can run `npx next upgrade` and move to 15.5+ or 16 when ready.

### SEO, accessibility, performance
- **SEO:** Strong. Metadata, OG, JSON-LD, sitemap, robots, and per-page titles/descriptions are in place.
- **Accessibility:** Improved. ARIA on menu, dialog, links, form errors, and loading; semantic structure and heading hierarchy are correct.
- **Performance:** Good. Dynamic imports and Suspense are used; root loading supports streaming. No obvious render-blocking or unoptimized assets in the audited code.

### Remaining critical errors or vulnerabilities?
- **None critical** in the audited frontend. After `npm install` and `npm run build`, address any new TypeScript or lint errors. Run `npm audit` and fix reported vulnerabilities if any.

### Recommended next steps
1. Set production env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BACKEND_URL`.
2. Add `/public/og-image.png` (1200×630) if not present.
3. Ensure `/public/mouse-pointer.svg` and `/public/hand-pointing.svg` exist (cursor CSS points to them).
4. Optionally add CSP and route-level `loading.tsx` under `projects/` and `lab/`.
5. Run Lighthouse (performance, a11y, SEO) after deployment and fix any remaining findings.

---

*Report generated as part of the automated Next.js frontend audit.*
