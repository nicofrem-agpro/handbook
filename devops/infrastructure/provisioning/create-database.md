[Handbook](/readme.md) » [DevOps](/devops/readme.md) » [Infrastructure](/devops/infrastructure/readme.md) » [Provisioning](/devops/infrastructure/provisioning/readme.md) » Create Database

# How to create a database
Este documento explica cómo crear una base de datos a través del workflow "Create Database" en el repositorio automatización-devops. Para los ambientes de staging y QA, los usuarios podrán realizar el proceso completo de manera independiente. En producción, el proceso requerirá de una aprobación para finalizar. La contraseña de los logins será provista por el equipo de DevOps.

## Para los ambientes de Staging y QA
1. Ingresar a la sección de [Actions](https://github.com/agendapro/automatizacion-devops/actions) del repositorio automatizacion-devops. Ir al workflow llamado "Create Database" y clickear sobre "Run workflow". 
2. Ingresar el nombre de la base de datos que desea crear, el ambiente y el usuario de login para la misma. Clickear en el botón de "Run workflow".
3. En los logs del Workflow, bajo el step de "Run the script" se indicará si la base de datos y el usuario se crearon correctamente o si hubo algún problema durante la creación.
4. Deberá solicitar la contraseña de su login al equipo de Devops.


## Para el ambiente de Producción
1. Ingresar a la sección de Actions del repositorio automatizacion-devops. Ir al workflow llamado "Create Database" y clickear sobre "Run workflow".
2. Ingresar el nombre de la base de datos que desea crear, el ambiente y el usuario de login para la misma. Clickear en el botón de "Run workflow".
3. El workflow creará un issue con la base de datos a crear y asignará a un miembro del equipo de Devops y de Arquitectura para su revisión.
4. Enviar un mensaje al canal #solicitudes-devops en slack con la información de la base de datos a crear. Una vez revisado y aprobado, será creada en el ambiente de producción.

    Para que sea aprobada la creación de la base de datos en producción, debes enviar un mensaje al canal #solicitudes-devops en slack con la siguiente información:
    - Url del issue
    - Nombre del equipo
    - Nombre de la base de datos
    - Propósito de la base de datos. Breve descripción de su necesidad.

6. Una vez aprobada, en los logs del Workflow, bajo el step de "Run the script" se indicará si la base de datos y el usuario se crearon correctamente o si hubo algún problema durante la creación.
7. Deberá solicitar la contraseña de su login al equipo de Devops.


## Notas: 
- Los nombres de la base de datos y del login deberán respetar las convenciones recomendadas por PostgreSQL para nombres de identificadores. Deben comenzar con una letra o guion bajo, y pueden contener letras, números y guiones bajos.
