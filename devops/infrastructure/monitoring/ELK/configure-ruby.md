# Configuración de la Gema para Elastic APM en Ruby

Este archivo detalla cómo configurar la gema de Elastic APM en una aplicación Ruby para enviar datos de rendimiento a nuestros servidores de APM en **Kibana**. Esta configuración cubre tanto el entorno de **producción** como el de **desarrollo**.

## Requisitos Previos
Asegúrate de tener instalada la gema de Elastic APM en tu aplicación. Puedes añadirla a tu archivo `Gemfile` de la siguiente manera:
```ruby
gem 'elastic-apm'
```
Luego, instala la gema ejecutando:
```ruby
bundle install
```
## Configuración de Entornos

La configuración se basa en las variables de entorno específicas para cada entorno: producción y desarrollo.

### Entorno de Producción

Para configurar Elastic APM en producción, utiliza las siguientes variables de entorno:
```bash
APM_SECRET_TOKEN=your_production_secret_token  
APM_SERVER_URL=http://prod-apm.agendapro-devops.com  
APM_SERVICE_NAME=your_service_name
```
En el archivo `config/initializers/elastic_apm.rb`, coloca lo siguiente:

```ruby
if Rails.env.production?  
  ElasticAPM.start(  
    secret_token: ENV['APM_SECRET_TOKEN'],  
    server_url: ENV['APM_SERVER_URL'],  
    service_name: ENV['APM_SERVICE_NAME']  
  )  
end
```
### Entorno de Desarrollo

Para configurar Elastic APM en desarrollo, utiliza las siguientes variables de entorno:

```bash
APM_SECRET_TOKEN=your_development_secret_token  
APM_SERVER_URL=http://dev-apm.agendapro-devops.com  
APM_SERVICE_NAME=your_service_name
```
En el archivo `config/initializers/elastic_apm.rb`, coloca lo siguiente:
```ruby
if Rails.env.development?  
  ElasticAPM.start(  
    secret_token: ENV['APM_SECRET_TOKEN'],  
    server_url: ENV['APM_SERVER_URL'],  
    service_name: ENV['APM_SERVICE_NAME']  
  )  
end
```
## Notas Adicionales

- Asegúrate de definir los valores correctos para `APM_SECRET_TOKEN` en cada entorno para garantizar la autenticación y seguridad de los datos.
- El `APM_SERVICE_NAME` debe coincidir con el nombre del servicio que se desea monitorear en Kibana. Esto permite una fácil identificación y filtrado de los datos en la interfaz de APM.
- En caso de problemas de conectividad, verifica que las URLs de APM (`APM_SERVER_URL`) sean accesibles desde los entornos donde se ejecuta tu aplicación.

## Actualización de Configuración

| Versión | Fecha       | Descripción                          |Author|
| ------- | ----------- | ------------------------------------ |--------------------|
| 1.0     | 11-11-2024  | Configuración inicial para Elastic APM en Ruby. |Yonathan Duran|
