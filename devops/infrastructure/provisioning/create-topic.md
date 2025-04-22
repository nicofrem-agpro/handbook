[Handbook](/readme.md) » [DevOps](/devops/readme.md) » [Infrastructure](/devops/infrastructure/readme.md) » [Provisioning](/devops/infrastructure/provisioning/readme.md) » Create Topic

# How to create a topic

> [!IMPORTANT]  
> Asegúrate de que el nombre de tu tópico cumpla con las [convenciones de nombres](/architecture/standarizations/naming-conventions/topics.md).

### En ambiente de Staging

1. Ingresa al [workflow de automatización](https://github.com/agendapro/automatizacion-devops/actions/workflows/kafka.yaml) para crear un nuevo tópico
2. Click en `Run workflow`
3. Selecciona la acción `create`
4. Ingresa el nombre del tópico
5. Selecciona el ambiente `staging`
6. Ingresa el número de particiones
7. Click en `Run workflow`
8. Listo, el workflow se encargará de crear el tópico en el ambiente de staging

### En ambiente de Producción

1. Ingresa al [workflow de automatización](https://github.com/agendapro/automatizacion-devops/actions/workflows/kafka.yaml) para crear un nuevo tópico
2. Click en `Run workflow`
3. Selecciona la acción `create`
4. Ingresa el nombre del tópico
5. Selecciona el ambiente `production`
6. Ingresa el número de particiones
7. Click en `Run workflow`
8. El workflow creará un [issue](https://github.com/agendapro/automatizacion-devops/issues) con la información del tópico a crear y asignará a un miembro del equipo de Devops y de Arquitectura para su revisión.
9. Envía un mensaje al canal **#solicitudes-devops** en slack con la información del tópico a crear (detalles más abajo)
10. Una vez revisado y aprobado, el tópico será creado en el ambiente de producción.

Para que sea aprobado la creación del tópico en producción, debes enviar un mensaje al canal **#solicitudes-devops** en slack con la siguiente información:

- Url del issue
- Nombre del tópico
- Descripción del tópico
- Número de particiones
- Contenido del tópico (Payload)

por ejemplo:

> Por favor crear el siguiente tópico en producción:
>```
>Issue       : https://github.com/agendapro/automatizacion-devops/issues/7
>Nombre      : BOOKING_CREATED
>Descripción : Tópico para notificar la creación de una reserva
>Particiones : 4
>Payload     : {
>  "bookingId": "123",
>  "userId": "456",
>  "roomId": "789",
>  "checkIn": "2020-01-01",
>  "checkOut": "2020-01-02"
>}
>```
