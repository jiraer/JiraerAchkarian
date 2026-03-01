FROM node:20-alpine AS base
  WORKDIR /app
  
  FROM base AS deps
  COPY package.json ./
  RUN npm install
  
  FROM base AS build
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  RUN npm run build
  
  FROM node:20-alpine AS runtime
  WORKDIR /app
  ENV NODE_ENV=production
  COPY --from=build /app/dist ./dist
  COPY package.json ./
  RUN npm install --omit=dev
  EXPOSE 4000
  CMD ["node", "dist/index.js"]
  