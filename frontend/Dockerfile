FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Etapa 1: Dependencias
FROM base AS dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/
RUN pnpm install --filter @civitas/frontend... --frozen-lockfile

# Etapa 2: Desarrollo (hot-reload con Vite dev server)
FROM dependencies AS development
ENV NODE_ENV=development
WORKDIR /app/frontend
EXPOSE 5173
CMD ["pnpm", "dev"]

# Etapa 3: Build para producción
FROM dependencies AS builder
COPY frontend ./frontend
RUN pnpm --filter @civitas/frontend build

# Etapa 4: Imagen final para producción con Nginx
FROM nginx:alpine AS production
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
