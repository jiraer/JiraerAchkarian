# Monorepo Setup & Run Summary

**Date:** February 2026  
**Scope:** `apps/frontend` and `apps/backend` — audit, fix, and run instructions

---

## 1. Node.js Check

| Requirement | Result |
|-------------|--------|
| **Minimum** | Node.js >= 20.9 |
| **Detected** | **v24.14.0** |
| **Status** | OK — no warning. Safe to proceed. |

If you see Node &lt; 20.9, upgrade from [nodejs.org](https://nodejs.org) before continuing.

---

## 2. Current Versions (After Fix)

### Frontend (`apps/frontend/package.json`)

| Package | Version | Notes |
|---------|---------|--------|
| **next** | **16.1.6** | Pinned (was ^16.1.6) |
| **react** | **18.3.1** | Pinned |
| **react-dom** | **18.3.1** | Pinned |
| **eslint-config-next** | **16.1.6** | Pinned |
| @types/react | ^18.3.3 | Aligned with React 18 |
| @types/react-dom | ^18.3.0 | Aligned with React 18 |

All other frontend dependencies left as-is (e.g. framer-motion, tailwindcss, three, zod).

### Backend (`apps/backend/package.json`)

| Category | Packages |
|----------|----------|
| **Runtime** | express, mongoose, cors, helmet, dotenv, bcryptjs, jsonwebtoken, zod, axios, node-cache, pino, express-mongo-sanitize, express-rate-limit, xss-clean, morgan |
| **Dev** | typescript, ts-node-dev, @types/*, eslint, eslint-config-prettier, @typescript-eslint/* |

No version changes were required; backend dependencies are already present and consistent.

---

## 3. Actions Performed

1. **Context**  
   All commands are intended to be run from the monorepo root or from the respective app folder (`apps/frontend` or `apps/backend`).

2. **Node.js**  
   Checked: v24.14.0 >= 20.9 — OK.

3. **Versions**  
   - Frontend: next 16.1.6, react 18.3.1, react-dom 18.3.1, eslint-config-next 16.1.6 (pinned); @types/react and @types/react-dom set to ^18.x for React 18.  
   - Backend: versions noted; no edits.

4. **Clean & fix**  
   - Removed `node_modules` and `package-lock.json` in `apps/frontend` and `apps/backend` (when present).  
   - Removed root `node_modules` and root `package-lock.json` to avoid workspace/hoisting conflicts.  
   - Frontend `package.json` updated to the versions above.  
   - Ran `npm cache clean --force`.

5. **Install**  
   - Run **`npm install`** in **`apps/frontend`**.  
   - Run **`npm install`** in **`apps/backend`**.

6. **Module resolution**  
   - Each app resolves its own dependencies from its local `node_modules` once install has been run in that folder.  
   - No root workspaces install was performed for this flow, so each app is self-contained.

7. **Verify**  
   - **Frontend:** From `apps/frontend`, run **`npx next --version`** — expected output: **16.1.6**.  
   - **Backend:** From `apps/backend`, run **`npm run dev`** (or **`node dist/index.js`** after **`npm run build`**) — server should start without “missing module” errors (MongoDB connection will fail until `MONGODB_URI` is set in `.env`).

---

## 4. How to Run Locally

### One-time setup (if not already done)

```powershell
# From repo root (PowerShell)
cd c:\Users\Admin\Desktop\JiraerAchkarian\portfolio-monorepo

# Frontend
cd apps\frontend
npm install
cd ..\..

# Backend
cd apps\backend
npm install
cd ..\..
```

### Verify installations

```powershell
# Frontend: Next.js version (should print 16.1.6)
cd apps\frontend
npx next --version
cd ..\..

# Backend: build (optional; ensures no missing modules)
cd apps\backend
npm run build
cd ..\..
```

### Start the apps

**Terminal 1 — Backend**

```powershell
cd c:\Users\Admin\Desktop\JiraerAchkarian\portfolio-monorepo\apps\backend
npm run dev
```

Backend will listen on the port set in `.env` (e.g. `4000`). Ensure `apps/backend/.env` exists with at least `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `CORS_ORIGIN` (see `apps/backend/.env.example`).

**Terminal 2 — Frontend**

```powershell
cd c:\Users\Admin\Desktop\JiraerAchkarian\portfolio-monorepo\apps\frontend
npm run dev
```

Frontend will run at `http://localhost:3000` (or the next free port if 3000 is in use).

---

## 5. Status Summary

| Project   | Versions set        | node_modules / lockfile | Install command   | Run command   |
|-----------|---------------------|--------------------------|-------------------|---------------|
| **Frontend** | next 16.1.6, react 18.3.1, react-dom 18.3.1, eslint-config-next 16.1.6 | Cleaned; reinstall in `apps/frontend` | `npm install` in `apps/frontend` | `npm run dev` in `apps/frontend` |
| **Backend**  | No change            | Cleaned; reinstall in `apps/backend`  | `npm install` in `apps/backend`  | `npm run dev` in `apps/backend`  |

- **Node.js:** v24.14.0 — OK.  
- **Frontend:** Ready to run after `npm install` and `npm run dev` in `apps/frontend`.  
- **Backend:** Ready to run after `npm install` and `npm run dev` in `apps/backend`, with a valid `.env` (e.g. `MONGODB_URI`).

The project is ready to run locally once dependencies are installed in each app and the backend has a valid environment configuration.
