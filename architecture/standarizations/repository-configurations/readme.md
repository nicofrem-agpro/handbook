[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Standardizations](/architecture/standarizations/readme.md) » Repository Configurations and Required Workflows

# Repository Configurations and Required Workflows

## Repository Configurations

- Default branch: `main`.
- Eliminar rama al mergear pull request.
- Branch protection rules (`main`) desde org ruleset:
  -  Only pull requests.
  -  1 codeowner reviewer en cada pull request.
  -  `tests`, `linters` y `commitlint` como required checks.
-  Archivo `.github/stale.yml` para cerrar PRs “olvidados” ([Ejemplo](/architecture/standarizations/repository-configurations/templates/stale.yml)).
-  Archivo `.github/dependabot.yml` para hacer seguimiento de dependencias vulneradas ([Ejemplo](/architecture/standarizations/repository-configurations/templates/dependabot.yml)).
-  Archivo `.github/CODEOWNERS` con los devs responsables del repositorio ([Ejemplo](/architecture/standarizations/repository-configurations/templates/CODEOWNERS)).

## Pull Request Required Workflows

Los Pull Requests que vayan a `main`, además de estar validados funcionalmente por parte del equipo, deben correr exitosamente los siguientes workflows para poder hacer merge:
-  `.github/workflows/tests.yml`: En este workflow ([Ejemplo](/architecture/standarizations/repository-configurations/templates/tests.yml) para un proyecto Frontend ReactJS) se deben correr los tests unitarios y de integración que afecten la cobertura de tests, y luego, en este mismo, se debe reportar el cambio a Sonarqube con quality gate. 
-  `.github/workflows/linters.yml`: En este workflow ([Ejemplo](/architecture/standarizations/repository-configurations/templates/linters.yml)) se deben correr los linters de código para validar que el código cumple con los estándares de calidad definidos.
-  `.github/workflows/commitlint.yml`: En este workflow ([Ejemplo](/architecture/standarizations/repository-configurations/templates/commitlint.yml)) se debe validar que los commits cumplen con el formato definido en el estandar de Semantic Commit Messages.

## Pull Request Optional Workflows

Además de los workflows requeridos, se pueden correr los siguientes workflows:
- `.github/workflows/dependencies.yml`: En este workflow ([Ejemplo](/architecture/standarizations/repository-configurations/templates/dependencies.yml)) se deben correr los chequeos de dependencias vulneradas y se deben actualizar las dependencias vulneradas.
- `.github/workflows/e2e.yml`: En este workflow ([Ejemplo](/architecture/standarizations/repository-configurations/templates/e2e.yml)) se deben correr los tests end-to-end que definan los encargados del proyecto.
