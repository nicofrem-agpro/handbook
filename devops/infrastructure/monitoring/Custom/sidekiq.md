# Monitoreo Customizado de Colas de Sidekiq en AgendaPro

En AgendaPro, implementamos un monitoreo customizado para gestionar el rendimiento y estado de las colas de Sidekiq. Esta solución nos permite verificar el encolamiento y procesamiento de trabajos en tiempo real, y asegurar que todos los jobs finalicen correctamente antes de detener Sidekiq en Kubernetes.

## Descripción de la Solución

### 1. Preparación de Pods en Kubernetes
Hemos realizado una configuración en el `preStop` de los contenedores de Kubernetes, para que los pods que ejecutan Sidekiq esperen a que todos los jobs encolados finalicen antes de detener Sidekiq. Esta configuración evita la interrupción de jobs en proceso y garantiza una ejecución continua y confiable.

### 2. Monitoreo desde Bastion Host del Estado de Redis en Elasticache
Desde la máquina de **bastion**, se ejecutan consultas periódicas al servicio de Elasticache (Redis) para obtener las llaves de la base de datos que permiten conocer el estado de las colas en Sidekiq. Esto nos proporciona información actualizada sobre el encolamiento actual y el estado de los trabajos.

### 3. Almacenamiento de Datos en MySQL
La información obtenida del encolamiento de jobs en Redis es almacenada en una base de datos **MySQL** que reside en el bastion host. Esto permite mantener un historial y tener acceso rápido a los datos sobre el estado de las colas.

### 4. Monitoreo en Grafana
**Grafana** ejecuta un query cada minuto a la base de datos MySQL en el bastion host, obteniendo los valores actualizados del estado de las colas. Esto nos permite visualizar de forma gráfica y en tiempo real el encolamiento y estado de los jobs en Sidekiq, ayudando a nuestro equipo a detectar y resolver cualquier problema de rendimiento o de procesamiento.

## Notificaciones del Sistema de Alarmas disponibiles

| Herramienta         | Tipo de Notificación  | Disponible |
|----------------------|-----------------------|------------|
| **Slack**           | Mensajes en canales  | ✅         |

## Diagrama de la Solución

```mermaid
graph TD
  A[Kubernetes Pods de Sidekiq] -->|preStop: Espera que finalicen los jobs| B[Sidekiq]
  B -->|Procesamiento de Jobs| C[Elasticache Redis]
  C -->|Estado de Encolamiento| D[Bastion Host]
  D -->|Consulta Estado de Colas| E[(MySQL)]
  E -->|Historial de Encolamiento| F[Grafana]
  F -->|Consulta cada minuto| E
````
### Actualización de Configuración

| Versión | Fecha       | Descripción                          | Autor                     |
| ------- | ----------- | ------------------------------------ | ------------------------- |
| 1.0     | 11-11-2024  | Configuración inicial para Elastic APM en Ruby. |Yonathan Duran |
------------------------------------------------------------------------------------------