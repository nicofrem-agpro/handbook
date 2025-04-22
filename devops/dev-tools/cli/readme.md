# Proceso de Automatización con CLI en Agendapro

Dentro de Agendapro, contamos con un CLI diseñado para agilizar nuestros procesos diarios y optimizar tareas repetitivas. Este CLI nos permite realizar diversas acciones clave en el desarrollo y mantenimiento de nuestros proyectos, garantizando estándares consistentes en configuración, monitoreo y despliegue.

## 1. Creación de Repositorios

El CLI permite la creación automatizada de repositorios para las siguientes tecnologías:

- **React** (Frontend)
- **Express** (Backend en Node.js)
- **Ruby** (Backend en Ruby on Rails)

Este proceso asegura que los proyectos sean generados con una configuración base estandarizada, facilitando la integración con nuestras herramientas de monitoreo y despliegue.

[Para ver cómo lo hacemos, haz clic aquí](repos.md)

## 2. Consulta de Tópicos en Ambientes de QA, Staging y Producción

A través del CLI, los desarrolladores pueden consultar información clave sobre los distintos tópicos en **MSK** (Managed Streaming for Kafka), incluyendo:

- **Verificación de existencia de tópicos**
- **Consulta de particiones en cada ambiente**

Esto permite una gestión más eficiente y rápida de los entornos de desarrollo y producción.  

[Para ver cómo lo hacemos, haz clic aquí](topics.md)

## 3. Creación de Secretos en Vault

El CLI facilita la creación y gestión de secretos dentro de nuestra herramienta **Vault**, asegurando la configuración adecuada de variables comunes necesarias para:

- **Monitoreo** (APM, logs, métricas)
- **Deployments**
- **Configuraciones sensibles**

Esto estandariza y refuerza la seguridad en la gestión de credenciales y configuraciones dentro de los distintos entornos.  
[Para ver cómo lo hacemos, haz clic aquí](vault.md).

## 4. Estándares de Registro y Monitoreo

Facilitamos la integración con nuestros sistemas de monitoreo en cada nuevo proyecto, asegurando una correcta captura de métricas y registros desde el primer día.

Los templates de DSK están siempre actualizados, lo que permite que cada aplicación nueva se conecte fácilmente a herramientas como:

- **Sentry para frontend y backend**

- **Elastic Stack para centralización de logs**

- **New Relic en entornos propay**

Automatizamos las configuraciones necesarias para que el equipo pueda centrarse en el desarrollo sin preocuparse por la integración manual de monitoreo.


## 5. Registro de Proyectos en Backstage

- **Cada nuevo proyecto se documenta automáticamente en Backstage, facilitando su descubrimiento y mantenimiento dentro de Agendapro.**

- **Los templates de DSK incluyen configuración lista para Backstage, lo que permite que cualquier servicio nuevo sea registrado y administrado sin esfuerzo adicional.**

- **Garantizamos estandarización y acceso centralizado a la información clave de cada proyecto.**


Este enfoque nos permite mantener procesos eficientes, seguros y alineados con las mejores prácticas en el desarrollo y operación de software dentro de Agendapro.