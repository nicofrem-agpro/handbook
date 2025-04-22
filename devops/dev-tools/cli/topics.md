## 2. Consulta de Tópicos en MSK (QA, Staging y Producción)

Nuestro CLI permite consultar información clave sobre los **tópicos en MSK** (Managed Streaming for Kafka) en los distintos entornos. A continuación, se detallan los comandos disponibles:

### 🔹 Obtener Listado de Tópicos

Para obtener el listado de tópicos en cada ambiente, usa los siguientes comandos:

```sh
get-topic-stg   # Obtener listado de tópicos en Staging
get-topic-qa    # Obtener listado de tópicos en QA
get-topic-prd   # Obtener listado de tópicos en Producción
```
## Obtener Descripción de Tópicos
Si necesitas más detalles sobre un tópico en particular, puedes utilizar los siguientes comandos:

```sh
describe-topic-stg   # Obtener descripción de tópicos en Staging
describe-topic-qa    # Obtener descripción de tópicos en QA
describe-topic-prd    # Obtener descripción de tópicos en Producción

```
## Pre-requisitos

Antes de ejecutar estos comandos, es necesario tener la VPN activada.
Si no sabes cómo hacerlo o no tienes la VPN activa, puedes solicitar acceso en el canal de Slack #solicitudes-devops.

Con estos comandos, garantizamos una gestión eficiente y organizada de los tópicos en nuestros entornos de desarrollo. 🚀

