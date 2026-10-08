# Guía de contribución - Civitas

## Ramas principales

El proyecto utiliza las siguientes ramas principales:

- `main`: contiene las versiones estables del proyecto.
- `develop`: rama de integración del desarrollo.

No se realizarán desarrollos directamente sobre `main` o `develop`.

## Ramas de trabajo

Cada tarea se desarrollará en una rama propia creada a partir de `develop`.

Formato:

`tipo/descripcion`

Tipos utilizados:

- `feature/`: nuevas funcionalidades.
- `fix/`: corrección de errores.
- `docs/`: documentación.
- `refactor/`: refactorizaciones.
- `test/`: pruebas.
- `chore/`: configuración o mantenimiento.

Ejemplos:

- `feature/unidades-api`
- `feature/login-mock`
- `fix/paginacion-unidades`
- `docs/git-workflow`

Una vez terminada la tarea se abrirá un Pull Request hacia `develop`.

## Commits

Los commits deben ser pequeños, descriptivos e identificables.

Formato recomendado:

`tipo: descripción breve`

Ejemplos:

- `feat: agregar listado mock de unidades`
- `fix: corregir paginación de unidades`
- `docs: documentar estrategia de ramas`
- `refactor: unificar respuestas HTTP`
- `test: agregar casos de prueba de reclamos`
- `chore: configurar eslint`

Cada integrante deberá realizar los commits utilizando su propia cuenta de GitHub y su identidad real.

## Pull Requests

Todo cambio destinado a `develop` deberá realizarse mediante Pull Request.

El Pull Request deberá:

- indicar qué tarea/ticket resuelve;
- resumir los cambios realizados;
- identificar al implementador;
- tener asignado el revisor correspondiente;
- ser aprobado antes del merge.

No se realizarán merges del propio Pull Request sin la revisión acordada.

## Revisiones cruzadas

Se utilizará la siguiente rotación:

Federico → Homero → Martín → Matías → Nicolás → Federico

Esto significa que:

- Homero revisa a Federico.
- Martín revisa a Homero.
- Matías revisa a Martín.
- Nicolás revisa a Matías.
- Federico revisa a Nicolás.

El revisor debe comprobar que el cambio cumpla los criterios de aceptación antes de aprobar el Pull Request.

## Flujo de trabajo

1. Actualizar `develop`.
2. Crear una rama para la tarea.
3. Realizar cambios y commits.
4. Publicar la rama en GitHub.
5. Crear un Pull Request hacia `develop`.
6. Solicitar revisión al integrante correspondiente.
7. Corregir observaciones si existen.
8. Obtener aprobación.
9. Realizar merge a `develop`.

## Trazabilidad

Cada integrante debe trabajar utilizando su propia cuenta e identidad de Git.

Las ramas, commits y Pull Requests deben permitir identificar claramente:

- quién realizó el cambio;
- qué tarea corresponde;
- qué cambios fueron realizados;
- quién revisó el trabajo.