# Procedimiento Operativo: Cambio de DNS para API en Cloudflare y AWS API Gateway

## Propósito
Definir un procedimiento claro para realizar el cambio del DNS de un API configurado en Cloudflare y AWS API Gateway 
desde una región (por ejemplo, West) hacia otra región (por ejemplo, Virginia) como parte de un Plan de Recuperación 
ante Desastres (DRP).

---

## Versionamiento

| **Versión** | **Fecha**       | **Autor**         | **Descripción**                              |
|-------------|-----------------|-------------------|----------------------------------------------|
| 1.0         | 04-12-2024 | Yonathan Duran    | Creación inicial del procedimiento.          |

---

## Alcance
Este procedimiento aplica a los cambios de configuración de DNS en Cloudflare y redirección de tráfico entre regiones 
en AWS API Gateway para escenarios de recuperación ante desastres o mantenimiento crítico.

---

## Responsabilidades
1. **Equipo DevOps:** Responsable de ejecutar los cambios en Cloudflare y AWS API Gateway.
2. **Equipo de Infraestructura:** Responsable de coordinar y validar la infraestructura activa en la región de destino.
3. **Líder del DRP:** Responsable de supervisar y aprobar el cambio en coordinación con todas las partes interesadas.

---

## Procedimiento

### 1. Verificación Previa
- Asegúrese de que la infraestructura en la región de destino esté completamente operativa:
  - Verifique que el API en AWS API Gateway esté habilitado y funcional.
  - Confirme la sincronización de datos entre regiones, si aplica.
  - Valide los logs y métricas de rendimiento para evitar interrupciones al tráfico.

### 2. Comunicación y Aprobación
- Notifique a los equipos relevantes sobre el cambio planeado, incluyendo:
  - **Líder del DRP:** Para la aprobación formal.
  - **Usuarios finales o equipos dependientes:** Para informar posibles interrupciones momentáneas.
- Obtenga la aprobación formal antes de proceder.

### 3. Cambiar el DNS en Cloudflare
1. Acceda al panel de administración de **Cloudflare**.
2. Navegue a la configuración del DNS correspondiente al API.
3. Localice el registro **CNAME** o **A Record** asociado al API en la región West.
4. Actualice el valor del registro para apuntar al nuevo endpoint de la región de Virginia (ejemplo: `api.virginia.example.com`).
5. Ajuste el **TTL (Time-to-Live)** a un valor bajo (por ejemplo, 30 segundos) para permitir una rápida propagación.
6. Guarde los cambios.

### 4. Actualizar AWS API Gateway
1. Acceda a la consola de **AWS Management Console**.
2. Navegue a **API Gateway** y seleccione la API correspondiente.
3. Valide que el endpoint en la región Virginia esté configurado y accesible.
4. Actualice las configuraciones globales si es necesario:
   - Ajuste las políticas de CORS para la nueva región.
   - Actualice cualquier referencia interna a la región anterior (West).
5. Pruebe el endpoint de Virginia para confirmar que responde correctamente a las solicitudes.

### 5. Validación del Cambio
- Espere a que los cambios de DNS se propaguen (puede tardar algunos minutos dependiendo del TTL configurado).
- Realice pruebas funcionales en el API desde la región de Virginia:
  - Verifique los logs de acceso para confirmar la recepción del tráfico.
  - Realice pruebas de estrés si el tiempo lo permite.
- Confirme con los equipos y usuarios relevantes que el acceso al API es correcto.

### 6. Monitoreo Posterior al Cambio
- Monitoree el tráfico en ambas regiones durante las siguientes **2 horas** para identificar anomalías.
- Asegúrese de que los registros de Cloudflare y AWS muestren actividad solo en la región Virginia.
- Ajuste el TTL en Cloudflare a su valor predeterminado una vez confirmada la estabilidad.

### 7. Registro del Cambio
- Documente los detalles del cambio:
  - Hora exacta de inicio y finalización.
  - Validaciones realizadas.
  - Equipo responsable del cambio.
- Actualice el registro del DRP para futuros cambios o auditorías.

---

## Notas Adicionales
- Este procedimiento debe ser ejecutado únicamente en escenarios de DRP o mantenimiento crítico.
- Se recomienda realizar pruebas periódicas de este procedimiento en entornos de desarrollo para garantizar su efectividad.

---

## Aprobación
Este procedimiento es aprobado y supervisado por el líder del DRP y el equipo DevOps.

## Fecha de Vigencia
04 diciembre 2024
