## 3. Creación de Secretos en Vault

En Agendapro utilizamos la suite de **HashiCorp Vault**, la cual nos permite almacenar secretos de forma segura y además funciona como un **Configuration Manager**, permitiendo gestionar variables de entorno según el ambiente (**Staging, QA y Producción**).

### 🔹 Estructura Estándar de Almacenamiento

Para mantener la organización de los secretos dentro de **Vault**, seguimos la siguiente estructura:

```sh
nombre-del-proyecto/
  ├── app/
  │   ├── <rama>   # Variables de la aplicación según la rama
  ├── infra/
  │   ├── <rama>   # Variables de infraestructura según la rama

```
Esta jerarquía nos permite manejar configuraciones de forma clara y ordenada, garantizando que las variables de cada entorno estén correctamente segmentadas.

## 🔹 Creación de Nuevos Espacios en Vault

Para facilitar los primeros pasos en los deployments a producción, contamos con el siguiente comando:

```sh
enable-vault   # Crea una nueva ruta en Vault y carga las variables de conexión a APMs y clústeres de producción
```
## 🔹 Borrado de Secretos en Vault
Para eliminar una ruta en Vault, es necesario realizar una solicitud al área de DevOps a través del canal de Slack:

📌 #solicitudes-devops

Esto garantiza un control adecuado sobre los secretos y evita eliminaciones accidentales que puedan afectar despliegues en producción.