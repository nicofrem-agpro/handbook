# Monitoreo de Aplicaciones con New Relic en AgendaPro

En AgendaPro, utilizamos **New Relic** como herramienta de monitoreo de aplicaciones (APM) para supervisar el rendimiento y la estabilidad de nuestras aplicaciones en tiempo real. New Relic nos ayuda a identificar cuellos de botella, errores, problemas de rendimiento y a mejorar la experiencia del usuario final.

## ¿Qué es New Relic?

New Relic es una plataforma de monitoreo y observabilidad que proporciona una visión completa del estado de las aplicaciones y de la infraestructura. Ofrece métricas detalladas sobre el rendimiento de las aplicaciones, incluyendo tiempo de respuesta, consumo de recursos, trazado de transacciones, monitoreo de bases de datos y análisis de errores. Gracias a New Relic, nuestro equipo puede detectar problemas antes de que afecten a los usuarios finales y mejorar la eficiencia del sistema.

## Funcionalidades Principales de New Relic

1. **Monitoreo de Rendimiento de Aplicaciones (APM):** Permite ver en detalle el tiempo de respuesta, rendimiento de las transacciones y uso de los recursos.
2. **Monitoreo de Infraestructura:** Proporciona visibilidad del estado de los servidores, contenedores y otros componentes de infraestructura.
3. **Alertas y Notificaciones:** Envía alertas en tiempo real sobre problemas de rendimiento, errores críticos y anomalías en el sistema.
4. **Mapeo de Dependencias:** Ayuda a visualizar la arquitectura de servicios y sus interacciones, facilitando la identificación de cuellos de botella y problemas de comunicación entre servicios.
5. **Monitoreo de Bases de Datos:** Proporciona métricas de rendimiento de consultas y ayuda a optimizar el uso de bases de datos.
6. **Insights y Paneles Personalizables:** Permite crear paneles de monitoreo personalizados con métricas clave, ideal para tener una visión ejecutiva o detallada del estado de la aplicación.

## Integración de New Relic con Nuestras Aplicaciones

Para habilitar el monitoreo con New Relic, seguimos estos pasos en nuestras aplicaciones:

### 1. Instalar el Agente de New Relic

#### Para Aplicaciones en Ruby
Instalamos el agente de New Relic mediante la gema `newrelic_rpm`:

1. Añadir la gema a tu archivo `Gemfile`:

```ruby
   gem 'newrelic_rpm'
```
2. Ejecutar bundle install para instalar la gema.
3. Configurar New Relic agregando el archivo newrelic.yml en la carpeta config o configurando las variables de entorno necesarias.
4. Asegurarse de tener el New Relic License Key en el archivo newrelic.yml o configurado en las variables de entorno. Este License Key debe ser proporcionado por el equipo de DevOps.

## Para Aplicaciones en Node.js
Instalamos el paquete newrelic en nuestras aplicaciones de Node.js:

1. Instalar el paquete usando npm o yarn:

```bash
npm install newrelic --save
# o
yarn add newrelic

```
2. Configurar New Relic creando un archivo newrelic.js en la raíz del proyecto. Este archivo contiene la configuración necesaria para habilitar el monitoreo.
3. Asegurarse de tener el New Relic License Key en el archivo de configuración o configurado en las variables de entorno. El equipo de DevOps proporciona este License Key.

2. Solicitar Acceso y Configuración en New Relic
Para comenzar a monitorear una aplicación en New Relic, es necesario que el equipo de DevOps habilite el proyecto y proporcione las credenciales (License Key y App Name) correspondientes.

## Pasos:
Solicitar al equipo de DevOps que cree un proyecto en New Relic para la aplicación.
Una vez creado el proyecto, DevOps compartirá el License Key y el App Name necesarios para la configuración.
Agregar estos valores en el archivo de configuración de New Relic o en las variables de entorno de la aplicación.
###  Verificación
Una vez configurada la aplicación, verifica que los datos estén siendo enviados correctamente a New Relic:
Accede a la consola de New Relic y dirígete a la sección APM.
Selecciona el proyecto de tu aplicación y revisa las métricas de rendimiento, incluyendo tiempos de respuesta y errores.
Configura alertas para recibir notificaciones en caso de anomalías o problemas críticos.
### Buenas Prácticas
Configurar Alertas: Es fundamental configurar alertas en New Relic para ser notificado ante problemas de rendimiento o errores críticos.
Optimizar el Uso de Recursos: Aprovecha las métricas de rendimiento y uso de recursos para mejorar la eficiencia de la aplicación.
Monitoreo de Transacciones: Habilitar el trazado de transacciones ayuda a identificar las partes de la aplicación que pueden mejorarse.
### Documentación Adicional
Para más información, consulta la documentación oficial de New Relic, donde encontrarás detalles adicionales sobre la configuración y el uso de cada funcionalidad.

## Notificaciones del Sistema de Alarmas disponibiles

| Herramienta         | Tipo de Notificación  | Disponible |
|----------------------|-----------------------|------------|
| **Slack**           | Mensajes en canales  | ✅         |
| **Correo Electrónico** | Alerta directa        | ✅         |

### Actualización de Configuración

| Versión | Fecha       | Descripción                          | Autor                     |
| ------- | ----------- | ------------------------------------ | ------------------------- |
| 1.0     | 11-11-2024  | Configuración inicial para Elastic APM en Ruby. |Yonathan Duran |
------------------------------------------------------------------------------------------



