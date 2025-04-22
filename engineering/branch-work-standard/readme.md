[Handbook](/readme.md) » [Engineering](/engineering/readme.md) » [Branch Work Standard](/engineering/branch-work-standard/readme.md) » Branch Work Standard

## **Ramas y ambientes de desarrollo (back y front)**

- `main`: Producción
- `staging`: Deploy automático a [agendaprodev.com](http://agendaprodev.com/)
- `qa-staging`: Deploy automático a [agendapro-qa.com](http://agendapro-qa.com/)

## **Trabajo en features**

Para comenzar y trabajar una funcionalidad:

- `git checkout main`
- `git pull origin main`.
- `git checkout -b feature/PRO-XX/*` (`XX` es el ID de tu tarjeta en [Basecamp](https://3.basecamp.com/5590595/projects) al feature y `*` describe la funcionalidad en inglés y con _underscore_ para separación de palabras).
- Todos los días se hace `pull` desde `main`.
- Solicitar **code reviews** por tarea haciendo pull request de tu branch hacía main para ingresar cambios a producción
  - Debes tener la aprobación de tu PM
  - Debes tener el approved de al menos 1 goodreviewer
  - Todos tus Github Actions deben pasar sin errores (tests, linters, etc)[Requerimientos Aquí](https://github.com/agendapro/handbook/blob/main/architecture/standarizations/repository-configurations/readme.md)
- Una vez cumplidos todos los requisitos simplemente puedes hacer push a main si tu característica no depende de subir otros cambios previamente lo que iniciará un proceso de deploy a producción.

## **Resolución de errores**

- `git checkout main`
- `git pull origin main`.
- `git checkout -b fix/PRO-XX/*` (`XX` es el ID de tu tarjeta en [Basecamp](https://3.basecamp.com/5590595/projects) al feature y `*` describe la funcionalidad en inglés y con _underscore_ para separación de palabras).

## **Resolución de errores urgentes**

- `git checkout main`
- `git pull origin main`.
- `git checkout -b hotfix/PRO-XX/*` (`XX` es el ID de tu tarjeta en [Basecamp](https://3.basecamp.com/5590595/projects) al feature y `*` describe el hotfix en inglés y con _underscore_ para separación de palabras).
- Cuando se termina (testeado y validado), se debe hacer un **pull request** a `main` con la descripción del hotfix (esta etapa puede requerir no esperar la corrida de los tests)
