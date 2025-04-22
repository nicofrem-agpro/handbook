[Handbook](/readme.md) » [Devops](/devops/readme.md) » [Dev Tools](/devops/dev-tools/readme.md) » Backstage

# Backstage

## Proceso para integrar repositorios en Backstage 

### Introducción 
El objetivo de este procedimiento es que los equipos creen y mantengan un archivo catalog-info.yaml en la ruta correcta dentro de cada repositorio de AgendaPro. La ruta debe ser una la siguiente:

  - /agendapro/nombrerepo/blob/main/backstage/catalog-info.yaml

En este mismo path, también deberán incluir una carpeta y un archivo relativos a la documentación:
  - /agendapro/nombrerepo/blob/main/backstage/docs/readme.md
  - /agendapro/nombrerepo/blob/main/backstage/mkdocs.yaml

Si no tienen esta estructura, deben crearla, y guardar un archivo de tipo catalog-info.yaml completando los valores necesarios. En caso de que ya exista la ruta en su repositorio, solo hay que asegurarse de que el archivo contenga la información requerida y los valores faltantes estén completos.

Para los repositorios creados a través del CLI de AgendaPro, el path de Backstage junto con la carpeta /docs, el archivo catalog-info.yaml y el archivo /mkdocs.yaml ya deberían estar disponibles.

El propósito de este proceso es que se tomen los valores de este archivo y se lleven a Backstage. Esto permitirá en un futuro tener un registro centralizado y actualizado de los proyectos de AgendaPro.

### 1. Ubicación del archivo:
Para que el proceso de automatización pueda encontrar el archivo catalog-info.yaml, debe estar ubicado en la siguiente ruta:
  - https://github.com/agendapro/nombrerepo/blob/main/backstage/catalog-info.yaml
    
El archivo debe estar ubicado directamente en la raíz de la carpeta backstage, en la rama main.

### 2. Formato del archivo.
A modo de ejemplo, un archivo catalog-info para un proyecto de tipo backend express:

```
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: ${repository-name}
  annotations:
    github.com/project-slug: agendapro/${repository-name}
    github.com/team-slug: agendapro/${team-name}
    vault.io/secrets-path: agendapro/${repository-name}
    backstage.io/techdocs-ref: dir:.
  tags:
    - node-20
    - bash
  description: Repositoria donde se versionan las distitntas herramientas automatizadas mediante CLI 
  links:
  - url: https://github.com/agendapro/${repository-name}
    title: repositorio
    icon: dashboard
    type: admin-dashboard
spec:
  type: automatizacion
  owner:  ${team-name}
  system:  ${repository-name}
  lifecycle: production
```
Nota: este es solo un ejemplo, los campos como tags, description, y otros valores deben ajustarse según las características específicas de cada proyecto.

Los siguientes campos deben estar completos: 
  - apiVersion: Versión del esquema: (backstage.io/v1alpha1).
  - kind: Tipo de entidad: Component.
  - metadata:
    - name: Nombre del repositorio (${repository-name}).
    - annotations: Enlaces a GitHub, Vault y TechDocs, personalizados con ${repository-name} y ${team-name}.
    - tags: Tecnologías usadas (ej. node-20, bash).
    - description: Descripción breve del repositorio.
    - links: Enlace al repositorio en GitHub, con título "repositorio" y tipo "admin-dashboard".
  - spec:
    - type: Frontend, backend o automatizacion.
    - owner: Responsable (${team-name}).
    - system: Relacionado con el repositorio (${repository-name}).
    - lifecycle: Ciclo de vida actual (production).


### 3. Opciones de Owner: 
Las opciones disponibles para el campo owner son las siguientes: apio, bizops, core, devops, growth, mobile, propay.

### 4. Carpeta /docs y vinculación con README.md: 
Para poder visibilizar la documentación del readme.md en Backstage, necesitamos incluir el archivo mkdocs.yaml en el path /backstage. 

A modo de ejemplo, un archivo mkdocs.yaml, en el que se deben reemplazar los valores necesarios:
```
site_name: "agendapro/${repository-name}"
site_description: "Documentancion de ${repository-name}"
nav:
  - Introduction: README.md

plugins:
  - techdocs-core
```

Adicionalmente, es necesario crear una carpeta /docs en el path /backstage, y allí incluir el readme.md de nuestro repositorio.

### 5. Frecuencia de actualización de components en Backstage: 
El script encargado de verificar los repositorios con el archivo catalog-info.yaml y sincronizarlos con Backstage se ejecutará todos los viernes a las 12hs.


## Scorecard

### Proceso de Implementación


#### 1. Ubicación del Archivo scorecard 
- Cada equipo de desarrollo debe completar su scorecard y asegurarse de incluirlo en el archivo `catalog-info.yaml` correspondiente a su repositorio.
- Cada 48hs se ejecutará un script que monitorea los nuevos componentes en Backstage, y crea un borrador de scorecard en el path correspondiente. Verificar si ya existe antes de crear uno.
- Debe haber un scorecard por cada repositorio, y debe incluirse en la sección de `annotations` del archivo `catalog-info.yaml` de esta forma:
  
  ```yaml
  annotations:
    scorecard/jsonDataUrl: 'https://github.com/agendapro/Backstage-referencia/blob/main/samples/score-NombreRepo.json'

- A continuación, se muestra un ejemplo de archivo scorecard.json completo con métricas clave:
```yaml
{
  "entityRef": {
    "kind": "component",
    "name": "ms-google-calendar"
  },
  "generatedDateTimeUtc": "2024-12-02 10:00",
  "scorePercent": 100,
  "scoreLabel": "100",
  "scoreSuccess": "success",
  "scoringReviewer": "María",
  "scoringReviewDate": "2024-12-02T08:00:00Z",
  "areaScores": [
    {
      "id": 1,
      "title": "Supervisión y Monitoreo",
      "scorePercent": 100,
      "scoreLabel": "100",
      "scoreSuccess": "success",
      "scoreEntries": [
        {
          "id": 101,
          "title": "Monitoreo de Kafka",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Monitoreo de Kafka, incluyendo métricas y alertas."
        },
        {
          "id": 102,
          "title": "Gestión de Colas con Sidekiq",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Gestión y monitoreo de colas con Sidekiq con alertas configuradas."
        },
        {
          "id": 103,
          "title": "APM Integrado con Kibana",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "APM integrado con Kibana para monitoreo de rendimiento."
        },
        {
          "id": 104,
          "title": "Supervisión con Grafana y Prometheus",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Supervisión de infraestructura con Grafana y Prometheus."
        },
        {
          "id": 105,
          "title": "Monitoreo de Errores con Sentry",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Monitoreo de errores con Sentry."
        }
      ]
    },
    {
      "id": 2,
      "title": "Normas de Gestión del Repositorio",
      "scorePercent": 100,
      "scoreLabel": "100",
      "scoreSuccess": "success",
      "scoreEntries": [
        {
          "id": 201,
          "title": "Rama Main",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Uso de la rama principal denominada 'main'."
        },
        {
          "id": 202,
          "title": "Requisito de Status Checks",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Configuración de status checks para la calidad del código."
        },
        {
          "id": 203,
          "title": "Revisión Obligatoria de Pull Requests",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Revisión obligatoria de pull requests para garantizar calidad."
        },
        {
          "id": 204,
          "title": "Gestión con CODEOWNERS",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Gestión de responsabilidades mediante CODEOWNERS."
        },
        {
          "id": 205,
          "title": "Stale",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Configuración para marcar ramas inactivas como 'Stale'."
        },
        {
          "id": 206,
          "title": "Actualización de Dependencias con Dependabot",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Actualización automática de dependencias con Dependabot."
        },
        {
          "id": 207,
          "title": "Eliminar Rama Después de Merge",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Eliminación automática de ramas después de realizar un merge."
        },
        {
          "id": 208,
          "title": "Requiere Review de CODEOWNERS",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Revisión de pull requests por CODEOWNERS."
        },
        {
          "id": 209,
          "title": "Catalog-info",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Integración del repositorio con Backstage."
        },
        {
          "id": 210,
          "title": "Análisis de Código con SonarQube",
          "scorePercent": 100,
          "scoreSuccess": "success",
          "details": "Análisis de calidad de código con SonarQube."
        }
      ]
    }
  ]
}
```
[Scorecard de referencia](https://github.com/agendapro/Backstage-referencia/blob/main/samples/score-ms-google-calendar.json)


#### **2. Pull Request (PR) Requerido**
Los desarrolladores deben crear el archivo en el directorio *agendapro/Backstage-referencia/blob/main/samples* y ejecutar un **PR hacia el repositorio y la carpeta correspondiente** para que el scorecard pueda ser visualizado correctamente en Backstage. El equipo Devops revisará la información del scorecard y hará el merge correspondiente.

#### **3. Frecuencia de Actualización**
El script de sincronización de los scorecards se ejecutará todos los días a las 8:00 hs, consolidando la información de todas las scorecards existentes en el [Scoreboard Consolidado](https://backstage.agendapro-devops.com/score-board).

## Procedimiento de Pase a Producción y Verificación de Backstage
- El pase a producción requiere 5 días hábiles de preaviso para revisión y aprobación por parte del equipo Devops.
- Los desarrolladores son responsables de completar el procedimiento y enviar un correo al equipo DevOps con todos los detalles necesarios:
  - Nombre del Repositorio
  - Scorecard JSON URL: Link al archivo en GitHub
  - Fecha Propuesta de Pase a Producción: [Fecha específica]
  - Link al PR del Scorecard: URL del Pull Request en GitHub (si aplica)
- Durante este tiempo, el equipo DevOps verificará que el archivo catalog-info.yaml, el scorecard y la documentación en Backstage estén actualizados.
- Una vez aprobado el pase a producción, el equipo DevOps notificará por correo electrónico la finalización del proceso.

