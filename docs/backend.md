# Backend de Civitas

## Requisitos

- Node.js
- pnpm

## Desarrollo

Desde la raíz del repositorio:

```bash
pnpm --filter @civitas/backend dev
```

El servidor queda disponible en `http://localhost:3000`.

## Verificación de salud

```text
GET http://localhost:3000/health
```

La respuesta exitosa tiene estado HTTP `200` y devuelve un objeto JSON con el estado del servidor.

## Build y ejecución

```bash
pnpm --filter @civitas/backend build
pnpm --filter @civitas/backend start
```

La estructura inicial separa rutas, controladores, servicios, repositorios, modelos, middlewares, tipos y utilidades dentro de `src`.
