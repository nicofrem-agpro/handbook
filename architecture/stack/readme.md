[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » Technology Stack

# Technology Stack

El stack tecnológico se refiere al conjunto de tecnologías, herramientas y servicios
utilizados para desarrollar y ejecutar una aplicación. Este stack abarca desde los lenguajes de programación y 
frameworks hasta las bases de datos, servidores y servicios de nube. La elección adecuada de estas tecnologías es 
crucial para garantizar el rendimiento, la escalabilidad y la mantenibilidad del sistema.

Ya sea que estés empezando a trabajar en el proyecto o buscando optimizar una implementación existente, esta 
sección te brindará las bases necesarias para tomar decisiones informadas y efectivas en cuanto al uso de tecnologías
en nuestra organización.

## Backend

La elección del framework backend dependerá del tipo de aplicación que se desee desarrollar. Puedes encontrar más detalles sobre cada elección en la sección de [Backend](/architecture/stack/backend/readme.md). Actualmente, se tienen las siguientes opciones:

| Opción    | Lenguaje de programación | Framework                |
|-----------|--------------------------|--------------------------|
| [Ruby On Rails](/architecture/stack/backend/ruby-on-rails.md)  | Ruby | Ruby On Rails |
| [Express](/architecture/stack/backend/express.md)  | NodeJs | Express.js |
| [Java](/architecture/stack/backend/java.md)  | Java | Spring Boot |

## Frontend

La elección del tipo de frontend dependerá del tipo de aplicación que se desee desarrollar. Puedes encontrar más detalles sobre cada elección en la sección de [Frontend](/architecture/stack/frontend/readme.md), y una guía con las mejores prácticas generales para proyectos en ReactJS en la sección de [ReactJS](/architecture/stack/frontend/react/readme.md).
Actualmente, se tienen las siguientes opciones:

| Opción    | Lenguaje de programación | Framework                |
|-----------|--------------------------|--------------------------|
| [NextJS](/architecture/stack/frontend/react/nextjs.md)  | Typescript | NextJS |
| [Single-SPA](/architecture/stack/frontend/react/single-spa.md)  | Typescript | ReactJS |
| [Standalone](/architecture/stack/frontend/react/standalone.md)  | Typescript | ReactJS |

## Bases de Datos

La elección de la base de datos dependerá del tipo de aplicación que se desee desarrollar. Puedes encontrar más detalles sobre cada elección en la sección de [Database](/architecture/stack/database/readme.md). Actualmente, se tienen las siguientes opciones:

| Propósito                         | Base de datos       | Proveedor       |
|-----------------------------------|---------------------|-----------------|
| Base de Datos Relacional          | PostgreSQL          | AWS RDS         |
| Base de Datos NoSQL               | MongoDB             | AWS DocumentDB  |
| Caché y Almacenamiento en Memoria | Redis               | AWS ElastiCache |
| Búsquedas y Análisis              | Elasticsearch       | AWS OpenSearch  |

## Excepciones

En algunos casos, puede ser necesario utilizar tecnologías o herramientas que no estén incluidas en este stack.
En estos casos, es importante que se justifique adecuadamente la elección de dichas tecnologías y que se consulte
con el equipo de arquitectura y tecnología para asegurar que la implementación sea coherente con los estándares y
las prácticas de la organización.
