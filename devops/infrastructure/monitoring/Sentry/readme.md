# Monitoreo APM con Sentry en AgendaPro

En AgendaPro, utilizamos **Sentry** como herramienta para el monitoreo de aplicaciones APM (Application Performance Monitoring). Sentry nos permite detectar, analizar y solucionar problemas de rendimiento de manera eficiente en nuestras aplicaciones, proporcionando información detallada sobre las transacciones y errores que ocurren en tiempo real.

## Requisitos para Activar el Monitoreo APM

### 1. Instalar la Gema en Ruby
Para comenzar a utilizar el monitoreo APM de Sentry en una aplicación Ruby, es necesario instalar la gema `sentry-ruby` y habilitar la integración APM.

## Pasos:
### 1. Añadir la gema en tu archivo `Gemfile`:

   ```ruby
   gem 'sentry-ruby'
   gem 'sentry-rails'  # Si usas Rails
```
### 2. Ejecutar `bundle install` para instalar la gema.
### 3. Configurar Sentry en tu aplicación Ruby. En el archivo config/initializers/sentry.rb (en caso de usar Rails):

```ruby
Sentry.init do |config|
  config.dsn = 'https://<tu_dsn_de_sentry>@sentry.io/<tu_proyecto>'
  config.traces_sample_rate = 1.0  # Configura el porcentaje de transacciones a monitorear
  # Opcional: config.environment = 'producción'  # Define el ambiente de ejecución
end
```
## Procedimiento para node

Para habilitar el monitoreo APM en una aplicación Node.js, se debe instalar el paquete @sentry/node.
### 1. Instalar el paquete usando npm o yarn:
```javascript
npm install @sentry/node --save

yarn add @sentry/node

```

### 2. Configurar Sentry en tu aplicación Node.js. En el archivo principal de tu aplicación (por ejemplo, app.js):

```javascript

const Sentry = require('@sentry/node');

Sentry.init({ 
  dsn: 'https://<tu_dsn_de_sentry>@sentry.io/<tu_proyecto>', 
  tracesSampleRate: 1.0  // Configura el porcentaje de transacciones a monitorear
});

// Capturar errores
app.use(Sentry.Handlers.errorHandler());

```
## Solicitar la Creación del Proyecto en Sentry

### Pasos:
 1. Solicitar a tu equipo de DevOps que cree un proyecto en Sentry desde la interfaz web de Sentry.
 2. Una vez que el proyecto esté creado, el equipo de DevOps te proporcionará el DSN (Data Source Name), que es necesario para configurar el monitoreo APM en tu aplicación.
 3. Usar el DSN proporcionado en la configuración de tu aplicación Ruby o Node.js.

###  Verificación
Una vez que hayas instalado y configurado el agente de Sentry en tu aplicación y hayas recibido el DSN de DevOps, asegúrate de que los datos APM se estén enviando correctamente a Sentry.

### Inicia la aplicación.
Verifica en la interfaz de Sentry que las transacciones y errores estén siendo monitoreados.
Accede a la sección de Performance dentro de Sentry para ver las transacciones y el rendimiento de tu aplicación.

### Consideraciones Finales
El monitoreo APM te ayudará a identificar cuellos de botella y errores en el rendimiento de tu aplicación en tiempo real.
Es importante configurar adecuadamente el porcentaje de transacciones a monitorear (traces_sample_rate) para no sobrecargar el sistema.
Asegúrate de que todos los ambientes (desarrollo, prueba, producción) estén correctamente configurados para monitoreo, si es necesario.
Para cualquier duda o problema durante la configuración, contacta al equipo de DevOps o revisa la documentación oficial de Sentry.

## Notificaciones del Sistema de Alarmas disponibiles

| Herramienta         | Tipo de Notificación  | Disponible |
|----------------------|-----------------------|------------|
| **Slack**           | Mensajes en canales  | ✅         |
| **Correo Electrónico** | Alerta directa        | ✅         |

### Actualización de Configuración

| Versión | Fecha       | Descripción                          |Author|
| ------- | ----------- | ------------------------------------ |--------------------|
| 1.0     | 11-11-2024  | Configuración inicial para Elastic APM en Ruby. |Yonathan Duran|