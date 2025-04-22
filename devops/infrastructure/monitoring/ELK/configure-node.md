# Configuración de Node.js para enviar datos APM a ELK

## 1. Instalación del paquete `elastic-apm-node`
Instala el paquete `elastic-apm-node` usando npm o yarn:

```bash
npm install elastic-apm-node --save
# o
yarn add elastic-apm-node
```
## 2. Configuración del Agente APM
Importa y configura el agente APM en tu aplicación Node.js. Esto se debe hacer al principio de tu archivo principal (por ejemplo, app.js o server.js).

```javascript
// Importar el cliente de APM
const apm = require('elastic-apm-node').start({
  serviceName: 'nombre_de_tu_servicio',
  serverUrl: 'http://<IP_o_HTTPS_de_tu_servidor_APM>:8200', // Dirección de tu servidor APM
  secretToken: 'token_secreto_si_es_necesario',  // (Opcional) Si tu servidor APM requiere token
  environment: 'producción',  // El ambiente en el que se ejecuta la aplicación
});
```
## 3. Configuración de Elasticsearch
Asegúrate de que Elasticsearch esté configurado y funcionando para almacenar los datos APM. Si aún no lo has instalado, sigue las instrucciones en la documentación oficial.

```bash
# Instalar Elasticsearch
# Guía de instalación: https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html
```

## 4. Verificación
Una vez que tu aplicación esté en funcionamiento, los datos APM deberían ser enviados automáticamente a Elasticsearch. Verifica en Kibana para asegurarte de que los datos se están recibiendo correctamente:

## Actualización de Configuración

| Versión | Fecha       | Descripción                          |Author|
| ------- | ----------- | ------------------------------------ |--------------------|
| 1.0     | 11-11-2024  | Configuración inicial para Elastic APM en Nodejs. |Yonathan Duran|