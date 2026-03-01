## Premium Portfolio Monorepo
  
  A production-ready, motion-heavy developer portfolio for **Jiraer Achkarian** with a **Next.js 14** frontend and a **Node.js + Express + MongoDB** backend, wired to a live GitHub repository.
  
  ### Stack
  
  - **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion, GSAP, Three.js
  - **Backend**: Node.js, Express, TypeScript, MongoDB (Mongoose), JWT, Zod, Helmet, CORS, rate limiting
  - **Infra**: Docker, docker-compose, MongoDB Atlas / local Mongo
  
  ---
  
  ### Local Development
  
  #### 1. Clone & install
  
  \`\`\`bash
  git clone https://github.com/jiraer/JiraerAchkarian.git
  cd JiraerAchkarian
  
  # install monorepo deps
  npm install
  \`\`\`
  
  #### 2. Environment variables
  
  Copy \`.env.example\` files:
  
  \`\`\`bash
  cp .env.example .env
  cp apps/backend/.env.example apps/backend/.env
  cp apps/frontend/.env.example apps/frontend/.env
  \`\`\`
  
  Edit:
  
  - \`apps/backend/.env\`
    - \`MONGODB_URI\` → your MongoDB (local or Atlas)
    - \`JWT_SECRET\` → strong secret
    - \`ADMIN_EMAIL\`, \`ADMIN_PASSWORD\` → admin credentials (API-only)
    - \`CORS_ORIGIN\` → \`http://localhost:3000\` for local dev
    - \`GITHUB_USERNAME=jiraer\`
    - \`GITHUB_REPO=JiraerAchkarian\`
  - \`apps/frontend/.env\`
    - \`NEXT_PUBLIC_BACKEND_URL=http://localhost:4000\`
    - \`NEXT_PUBLIC_SITE_URL=http://localhost:3000\`
    - \`NEXT_PUBLIC_GITHUB_USERNAME=jiraer\`
    - \`NEXT_PUBLIC_GITHUB_REPO=JiraerAchkarian\`
  
  #### 3. Run with turbo (non-Docker)
  
  In one terminal:
  
  \`\`\`bash
  cd apps/backend
  npm run dev
  # backend on http://localhost:4000
  \`\`\`
  
  In another:
  
  \`\`\`bash
  cd apps/frontend
  npm run dev
  # frontend on http://localhost:3000
  \`\`\`
  
  ---
  
  ### Docker (local)
  
  From repo root:
  
  \`\`\`bash
  docker-compose up --build
  \`\`\`
  
  - Frontend: \`http://localhost:3000\`
  - Backend: \`http://localhost:4000\`
  - Mongo: \`mongodb://localhost:27017/portfolio\`
  
  ---
  
  ### Admin API (no public UI)
  
  There is **no login page**. Admin is API-only.
  
  1. On backend start, the admin user is seeded from env (\`ADMIN_EMAIL\`, \`ADMIN_PASSWORD\`).
  2. To obtain a JWT:
  
  \`\`\`bash
  curl -X POST http://localhost:4000/api/auth/login \\
    -H "Content-Type: application/json" \\
    -d '{"email":"you@example.com","password":"your-password"}'
  \`\`\`
  
  3. Use the returned \`token\` as:
  
  \`\`\`text
  Authorization: Bearer <token>
  \`\`\`
  
  4. Protected admin endpoints (examples):
  
  - \`POST /api/projects\` – create / manage projects
  - \`PATCH /api/projects/:id\`
  - \`DELETE /api/projects/:id\`
  
  Each validates input with **Zod** and enforces **role-based access** via JWT.
  
  ---
  
  ### Contact Form Security
  
  - POST \`/api/contact\` (backend)
  - Validated with Zod (lengths, email, etc.)
  - Honeypot field (\`honeypot\`) – must be empty (frontend hides it)
  - Per-IP/email rate limiting (\`CONTACT_RATE_LIMIT_MAX\`)
  - Stored into Mongo (\`ContactMessage\` collection)
  - Basic sanitization + anti-XSS + mongo sanitize
  
  Frontend (\`ContactForm.tsx\`) uses **React Hook Form + Zod resolver**, shows animated success/error states.
  
  ---
  
  ### GitHub Integration
  
  - Backend service \`githubService.ts\`:
    - Fetches repo metadata & README from GitHub:
      - repo: \`https://api.github.com/repos/$GITHUB_USERNAME/$GITHUB_REPO\`
      - readme: \`/readme\`
    - Parses the **first section of README** for preview
    - Caches server-side in memory via \`node-cache\` with TTL (\`GITHUB_CACHE_TTL_SECONDS\`).
  - Public endpoint: \`GET /api/integrations/github/featured\`
  - Frontend component: \`FeaturedGithubProject.tsx\`
    - Animated 3D-style card with:
      - Repo name
      - Description
      - Stars
      - Last updated
      - README first section preview
      - "View on GitHub" CTA
  
  ---
  
  ### Pages
  
  - \`/\` – **About**
    - Animated hero with typing-style rotating phrases
    - Skills grid with glassmorphism and hover
    - Experience timeline with GSAP scroll reveal
    - Contact form section
  
  - \`/projects\`
    - Tech stack filters (query-based)
    - 3D hover tilt project cards
    - Featured GitHub project card (live data)
    - Skeleton loaders & smooth transitions
  
  - \`/lab\`
    - Interactive 3D particle scene using **Three.js + React Three Fiber**
    - Feels like a premium design experiment, not a toy
  
  ---
  
  ### SEO
  
  - Central \`metadata\` in \`app/layout.tsx\`
  - \`app/api/sitemap/route.ts\` – sitemap XML
  - \`app/api/robots/route.ts\` – robots.txt
  - OG image from \`public/og-image.png\`
  
  ---
  
  ### Deployment
  
  #### Frontend → Vercel
  
  1. Create a new Vercel project, root at \`apps/frontend\`.
  2. Build command: \`npm run build\`
  3. Output directory: \`.next\`
  4. Environment variables:
     - \`NEXT_PUBLIC_BACKEND_URL=https://your-backend.onrender.com\`
     - \`NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app\`
     - GitHub env as in local
  
  Vercel auto-detects Next.js 14 App Router.
  
  #### Backend → Render
  
  1. New **Web Service** from GitHub repo
  2. Root directory: \`apps/backend\`
  3. Build command: \`npm install && npm run build\`
  4. Start command: \`node dist/index.js\`
  5. Environment variables: copy from \`apps/backend/.env\`, update \`MONGODB_URI\` to Atlas.
  6. Set **Health check path** to \`/api/health\` if you add one, or leave default.
  
  #### Database → MongoDB Atlas
  
  1. Create cluster, database \`portfolio\`, user with strong password.
  2. Whitelist Render IPs / \`0.0.0.0/0\` during development.
  3. Set connection string as \`MONGODB_URI\` in backend env.
  
  ---
  
  ### Notes
  
  - Strict TypeScript across frontend & backend.
  - Express backend uses:
    - **MVC**: controllers, services, models, routes
    - Centralized API response (\`res.success\`, \`res.fail\`)
    - Global error handler + logging + rate limiting + sanitization
  - Frontend emphasizes:
    - High-contrast brutalist layout with cozy touches
    - Microinteractions (cursor, hover, scroll)
    - Skeleton states and smooth transitions
  
  You can extend the admin API to manage blog posts or more advanced project metadata without touching the public UI.
  