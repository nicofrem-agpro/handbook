# Procedimiento Operativo: Solicitud de Replicación de Tablas de Base de Datos Mediante AWS DMS

## Propósito
Establecer un proceso claro y eficiente para la solicitud, aprobación y ejecución de la replicación de tablas de base de datos pesadas (≥ 500 GB) mediante AWS Database Migration Service (DMS), garantizando la correcta disponibilidad de los datos al equipo DevOps.

---

## Versionamiento

| Versión | Fecha       | Autor                  | Descripción                              |
|---------|-------------|------------------------|------------------------------------------|
| 1.0     | 2024-12-04  | Yonathan Duran   | Creación inicial del procedimiento.      |

---

## Alcance
Este procedimiento aplica a todas las solicitudes realizadas por los equipos internos que requieran la replicación de tablas de bases de datos utilizando AWS DMS.

## Responsabilidades
1. **Equipo Solicitante:** Responsable de identificar la necesidad de replicación y realizar la solicitud en el canal designado.
2. **Departamento DevOps:** Responsable de atender, coordinar y ejecutar las solicitudes de replicación.
3. **Líder del Proyecto:** Responsable de supervisar el cumplimiento del procedimiento y coordinar con todas las partes involucradas.

---

## Procedimiento

### 1. Solicitud de Replicación
- El equipo solicitante deberá ingresar una solicitud formal en el canal de Slack **#solicitudes-devops** con la siguiente estructura:
  - **Asunto:** Solicitud de replicación de tabla(s) mediante AWS DMS.
  - **Descripción:** Detallar el propósito de la replicación, el nombre de la tabla, tamaño aproximado en GB, y cualquier información relevante adicional.
  - **Plazo:** Indicar el plazo deseado para la disponibilidad de los datos.
  - **Contacto:** Persona responsable de la solicitud para aclaraciones.

### 2. Evaluación de la Solicitud
- El departamento DevOps evaluará la solicitud en un plazo máximo de **2 días hábiles** para verificar su viabilidad técnica y alineación con las prioridades operativas.
- En caso de requerir información adicional, se solicitará al equipo correspondiente en el mismo hilo de Slack.

### 3. Planificación y Ejecución
- Una vez aprobada, el departamento DevOps coordinará la ejecución del proceso de replicación utilizando AWS DMS.
- Se notificará al solicitante el cronograma estimado y las condiciones específicas del proceso (por ejemplo, tiempo de sincronización y validaciones).

### 4. Entrega y Validación
- Al completar la replicación, el equipo DevOps notificará en el canal correspondiente e indicará los detalles de acceso y validación.
- El solicitante deberá confirmar la correcta disponibilidad y funcionalidad de los datos replicados.

### 5. Registro y Cierre
- Todas las solicitudes y resultados se documentarán en un registro interno para su seguimiento y auditoría.
- El cierre de cada solicitud se formalizará mediante una confirmación en el canal de Slack.

---

## Notas Adicionales
- Las solicitudes deben realizarse con al menos **5 días hábiles de anticipación** para garantizar la planificación adecuada.
- Cualquier desviación o problema durante la replicación será notificada inmediatamente al equipo solicitante.

---

## Ejemplo de Solicitud
**Caso de Ejemplo:**
- **Asunto:** Solicitud de replicación de tablas de base de datos
- **Descripción:** Migración de las tablas `clients` y `bookings` desde la base de datos `agendapro_production` hacia una nueva base de datos denominada `microservicioAvenger`.
  - **Tamaño Aproximado:** `clients` (150 GB), `bookings` (200 GB).
  - **Propósito:** Centralización de datos para el microservicio `Avenger`.
  - **Precondiciones:**
    - Ecosistema de despliegue completado.
    - Kafka configurado.
    - Monitores y alertas asociados al servicio configurados.
  - **Plazo:** Se requiere disponibilidad en un plazo de 7 días hábiles.
  - **Contacto:** [Nombre del Responsable].

---

## Aprobación
Este procedimiento es aprobado y supervisado por el líder del departamento DevOps.

- **Reviewer:** Yonathan Duran

## Fecha de Vigencia
2024-12-04
