FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Dependencias necesarias para el motor de Prisma en Alpine Linux
RUN apk add --no-cache libc6-compat openssl
RUN corepack enable

WORKDIR /app

# Etapa 1: Dependencias
FROM base AS dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/
RUN pnpm install --filter @civitas/backend... --frozen-lockfile

# Etapa 2: Desarrollo (hot-reload mediante tsx watch)
FROM dependencies AS development
ENV NODE_ENV=development
WORKDIR /app/backend
EXPOSE 3000
CMD ["pnpm", "dev"]

# Etapa 3: Build para producción
FROM dependencies AS builder
COPY backend ./backend
# Generar tipos de Prisma solo si el schema define modelos reales
RUN if grep -q "model " backend/prisma/schema.prisma 2>/dev/null; then pnpm --filter @civitas/backend exec prisma generate; fi
RUN pnpm --filter @civitas/backend build

# Etapa 4: Imagen final para producción (segura y optimizada)
FROM base AS production
ENV NODE_ENV=production
WORKDIR /app/backend

COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=dependencies /app/backend/node_modules ./node_modules
COPY --from=builder /app/backend/dist ./dist
COPY backend/package.json ./
COPY backend/prisma ./prisma

# Seguridad de producción: usuario no privilegiado (OWASP)
RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD ["node", "dist/server.js"]
