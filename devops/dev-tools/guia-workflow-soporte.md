**Gestión de Incidentes en Slack**

La implementación de este flujo en Slack tiene como objetivo agilizar la gestión de incidentes, permitiendo a los equipos reportar, actualizar y hacer seguimiento de problemas de manera centralizada.

Toda la información de los incidentes se almacena en una base de datos, lo que permite su posterior extracción y análisis para generar reportes y mejorar la gestión operativa.

📍 ¿Cómo funciona?
Los usuarios pueden interactuar con los flujos de trabajo de Soporte dentro del canal #Soporte de Slack, donde podrán:
- Crear nuevos incidentes utilizando el botón "Incidentes". ✅
- Recibir notificaciones sobre los incidentes registrados y sus actualizaciones. ✅
- Hacer seguimiento a los reportes en curso. ✅
- Actualizar el estado y detalles de los incidentes en tiempo real a través del flujo "Actualización Incidentes". ✅

📌 ¿Dónde reportar incidentes?
Los reportes y actualizaciones se gestionan dentro del canal #Soporte.

📖 ¿Cómo reportar un incidente? - Guía de Uso
Para crear un nuevo incidente o actualizar uno existente, seguí los pasos detallados a continuación.

1️⃣ Creación de un Incidente

📌 ¿Cuándo se usa?
Cuando hay que reportar un nuevo incidente en el sistema.

📌 Pasos:
1. Clickear en el botón "Incidentes".
2. Completar el formulario con la información del incidente. Todos los campos obligatorios deben ser completados.
   - El estado inicial de un incidente siempre será "Abierto".
4. Enviar el formulario.
5. El sistema validará y creará el incidente en la base de datos.
6. Confirmación de creación del incidente:
   - Se enviará un mensaje al channel de Soporte con los detalles del incidente. 
   - Se incluirá el ID del incidente, que será necesario para futuras actualizaciones.

📌 Posibles errores:
- Campos obligatorios incompletos: El sistema no permitirá la creación del incidente hasta completar todos los datos requeridos.

2️⃣ Actualización de un Incidente

📌 ¿Cuándo se usa?
Cuando se necesita actualizar el estado o detalles de un incidente existente.

📌 Pasos:
1. Iniciar el flujo de trabajo "Actualizar Incidente".
2. Ingresar los datos obligatorios:
   - ID del incidente a actualizar.
   - Nuevo estado.
   - Comentario con el avance.
   - El resto de los campos son opcionales y solo deben completarse si es necesario actualizarlos (equipo responsable, severidad, tipo de incidente, etc.).
4. Enviar el formulario.
5. El sistema validará la actualización y la registrará en la base de datos.
6. Confirmación de actualización del incidente:
   - Se enviará un mensaje al channel de Soporte informando el cambio de estado. El mensaje incluirá la hora de modificación y el usuario que realizó el cambio.
   - Si hay un error, el usuario que inició el flujo recibirá una notificación con el detalle del problema. La actualización deberá realizarse nuevamente, revisando el ID y el estado antes de intentar actualizar nuevamente.

📌 Posibles errores:
- El ID del incidente no existe en la base de datos: Se enviará una notificación en Slack con el mensaje 🚨 "No encontramos ese incidente" 🚨.
Se intenta ingresar una combinación de ID y estado que ya fue registrada.
- Estado duplicado: Si se intenta actualizar un incidente con el mismo estado ya registrado, el sistema rechazará la actualización con el mensaje 🚨 "Estado ya registrado" 🚨.
