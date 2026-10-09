/**
 * ==============================================================================
 * CIVITAS - SEED DE BASE DE DATOS (FASE 2)
 * ==============================================================================
 *
 * Script de inicialización de datos para la base de datos PostgreSQL.
 *
 * NOTA DEL MVP (FASE 1):
 * Durante el MVP, los datos de demostración y fixtures son provistos
 * directamente por los servicios y repositorios en memoria (Mock API).
 *
 * En Fase 2 (integración con PostgreSQL), este script poblará las tablas con
 * los datos iniciales de:
 * - Consorcios
 * - Unidades Funcionales
 * - Personas / Residentes
 * - Profesionales
 * - Reclamos
 *
 * Ejemplo de ejecución prevista para Fase 2:
 * `pnpm exec prisma db seed`
 */

export async function main() {
  console.log("Seed de base de datos reservado para Fase 2 (PostgreSQL).");
}

if (process.env.NODE_ENV !== "test") {
  main().catch((e) => {
    console.error(e);
  });
}
