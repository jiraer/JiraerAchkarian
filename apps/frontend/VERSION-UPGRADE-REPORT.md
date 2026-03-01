# Next.js Version Check & Upgrade Report

**Project:** `portfolio-monorepo/apps/frontend`  
**Report date:** February 2026  
**Scope:** Next.js 16.x upgrade and dependency alignment

---

## 1. Version Summary

| Package | Before upgrade | After upgrade | Notes |
|---------|----------------|---------------|--------|
| **next** | ^15.0.3 | **^16.1.6** | Latest stable 16.x (patched) |
| **react** | ^18.3.1 | **^19.0.0** | Required for Next 16 (React 19.x) |
| **react-dom** | ^18.3.1 | **^19.0.0** | Matches React 19 |
| **eslint-config-next** | ^15.0.3 | **^16.1.6** | Matches Next 16 |
| **@types/react** | ^18.3.3 | **^19.0.0** | For React 19 typings |
| **@types/react-dom** | ^18.3.0 | **^19.0.0** | For React 19 typings |

---

## 2. Node.js Version Check

| Check | Result |
|-------|--------|
| **Required** | Node.js 20.9+ (Node 18 no longer supported in Next 16) |
| **Detected** | **v24.14.0** |
| **Status** | OK — no warning. Node version is above the minimum. |

If your environment had Node &lt; 20.9, you would see:  
**Warning:** Upgrade Node.js to 20.9 or later (e.g. from [nodejs.org](https://nodejs.org)) before using Next.js 16.

---

## 3. Actions Performed

### 3.1 `package.json` updated

- Set `next` to **^16.1.6** (latest 16.x at time of report).
- Set `react` and `react-dom` to **^19.0.0** (Next 16 targets React 19).
- Set `eslint-config-next` to **^16.1.6**.
- Set `@types/react` and `@types/react-dom` to **^19.0.0** for TypeScript.

### 3.2 Commands you should run (in order)

From the **frontend** directory (`apps/frontend`):

```bash
# 1. Install dependencies (required after package.json change)
npm install next@latest react@latest react-dom@latest eslint-config-next@latest

# 2. Codemod for pre-16 → latest (handles deprecated APIs and config)
npx @next/codemod@canary upgrade latest

# 3. Verify build
npm run build
```

If you prefer to rely on the versions already in `package.json`:

```bash
npm install
npx @next/codemod@canary upgrade latest
npm run build
```

---

## 4. Next.js 16 Notable Changes

- **Turbopack** is the default dev bundler (faster refresh and builds).
- **React 19** is required; new features (e.g. View Transitions, `useEffectEvent`) are supported.
- **Cache model:** optional `"use cache"` directive and PPR.
- **Node 18** is no longer supported; **Node 20.9+** is required.

Your current config (`next.config.mjs`) does not use deprecated options; the codemod may still suggest small tweaks.

---

## 5. Post-Upgrade Verification

After running the commands in §3:

| Step | What to check |
|------|----------------|
| **npm install** | No peer dependency or resolution errors. |
| **Codemod** | Apply suggested file changes; resolve any conflicts. |
| **npm run build** | Build completes with no TypeScript or Next errors. |
| **npm run dev** | App runs; no runtime errors on main routes. |

---

## 6. Issues Encountered During Upgrade

| Issue | Severity | Resolution |
|-------|----------|------------|
| **PowerShell** | N/A | On Windows, use `;` instead of `&&` between commands (e.g. `cd path; npm install`). |
| **Install duration** | N/A | First install with Next 16 and React 19 can take several minutes. |
| **React 19 types** | Optional | If you see type errors in components, ensure `@types/react` and `@types/react-dom` are ^19.0.0 and run `npm install` again. |

No critical issues were introduced by the `package.json` changes. Any further issues will appear when you run `npm install`, the codemod, and `npm run build` (and can be added to this section).

---

## 7. Upgrade Status Summary

| Item | Status |
|------|--------|
| Current version (before) | Next **15.0.3**, React **18.3.1** |
| Updated version (after) | Next **16.1.6**, React **19.0.0** |
| Node.js 20.9+ | Satisfied (v24.14.0) |
| package.json | Updated |
| npm install | Run manually (see §3) |
| Codemod | Run manually (see §3) |
| Build verification | Run `npm run build` after install + codemod |

**Conclusion:** The project is configured for Next.js 16.1.6 and React 19. Complete the install, codemod, and build steps above to finish the upgrade and confirm everything works.
