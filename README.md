# Civitas - Sistema de Gestión de Consorcios

Monorepo de desarrollo para Civitas (Trabajo Final Integrador).

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada)
- [pnpm](https://pnpm.io/) (`corepack enable pnpm`)

## Instalación de dependencias

Desde la raíz del proyecto:

```bash
pnpm install
```

## Ejecución en desarrollo

### Levantar todo el monorepo (Backend + Frontend)
```bash
pnpm dev
```

### Levantar únicamente el Backend (Express)
```bash
pnpm --filter @civitas/backend dev
```
El servidor queda disponible en `http://localhost:3000`.

- **Verificación de salud (Health check):**
  `GET http://localhost:3000/health`  
  Devuelve `200 OK` con `{"status": "Funcionando correctamente"}`.

### Levantar únicamente el Frontend (Vite + React)
```bash
pnpm --filter @civitas/frontend dev
```
La aplicación queda disponible en `http://localhost:5173`.

## Compilación para producción

```bash
pnpm build
```
Compila los paquetes de TypeScript y empaqueta la aplicación de frontend y backend.