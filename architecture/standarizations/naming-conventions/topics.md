[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Naming Conventions](/architecture/standarizations/naming-conventions/readme.md) » Topics

# Topics

Un tópico en Kafka es una categoría o un canal donde los registros/eventos se escriben y se leen. Es similar a una cola de 
mensajes o a un canal de publicación/suscripción.

Cada tópico se divide en varias particiones. Una partición es un registro ordenado e inmutable de mensajes, 
donde cada mensaje se identifica con un número de secuencia llamado "offset". Las particiones permiten el 
paralelismo y la distribución del procesamiento de datos entre varios consumidores.

### Tipos de eventos

Existen dos tipos de mensajes que se pueden enviar a través de Kafka: **eventos** y **comandos**. Por una parte,
los eventos representan un cambio o suceso en el estado de un sistema, mientras que los comandos representan una acción
que debe ser ejecutada por un componente.

### Diferencias entre Eventos y Comandos
- Eventos:
  - Representan algo que ya ha sucedido.
  - Pueden ser consumidos por múltiples suscriptores.
  - Se nombran en tiempo pasado: OrderCreated, ProfileUpdated.
- Comandos:
  - Representan la intención de ejecutar una acción.
  - Se envían a un único componente.
  - Se nombran en tiempo presente (imperativo): OrderCreate, ProfileUpdate.

### Algunas sugerencias para nombrar tópicos

- Deben utilizar una estructura jerárquica con niveles de granularidad para que sea fácil de entender. 
Por ejemplo, [dominio]\_[entidad]\_[contexto]\_[accion].
- Deben ser escritos en mayúsculas, separados por guiones bajos y en idioma inglés. 
- Deben ser descriptivos y claros sobre el evento que representan.
- Deben ser escritos en presente (para comandos) o pasado (para eventos).

## Ejemplos

### Eventos

```sh
INITIAL_CONFIGURATION # bad
COMPANY_INITIAL_CONFIG_CREATED # good

ACKNOWLEDGE_CLIENT # bad
CLIENT_ACKNOWLEDGED # good

BLACKLIST_CREATED # bad
COMPANY_BLACKLIST_CREATED # good

BOOKING_UPDATED_NOTIFICATIONS # bad
BOOKING_NOTIFICATIONS_UPDATED # good

BUSINESS_COMMON_DOCUMENTS_PDF_ERROR # bad
CLIENT_REPORT_PDF_FAILED # good

CHARLY_CLIENT_UPDATED_LAST_BOOKING # bad
CHARLY_CLIENT_LAST_BOOKING_UPDATED # good

USERB2B3PLUS_CREATED # bad
USER_CREATED # good

SUSCRIBED_EMITTER_CREATED # bad
SUBSCRIPTION_EMITTER_CREATED # good

CHECKLIST_COMPLETE_TASK # bad
CHECKLIST_TASK_COMPLETED # good

BUSINESS_COMMON_WHATSAPP_META_WEBHOOK_INCOMING_MESSAGES # bad
WHATSAPP_WEBHOOK_RECEIVED # good
```

### Comandos

```sh
CREATE # bad
COMPANY_CREATE # good

TRANSACTION_CREATE # bad
SALES_TRANSACTION_CREATE # good

BILLINGPRO_UPDATE_BILLING_INFO # bad
BILLINGPRO_BILLING_INFO_UPDATE # good

BOOKING_EVENTS_EMAIL_SEND # bad
BOOKING_EMAIL_SEND # good

MARK_SENT_REQUEST # bad
REQUEST_UPDATE # good

REMINDER_SETTINGS # bad
REMINDER_SETTINGS_UPDATE # good
```

## ¿Necesitas ayuda o sugerencias?

Muchas veces es difícil encontrar el nombre correcto para un tópico, si necesitas ayuda o sugerencias no dudes en 
preguntar a tu líder técnico o a algún miembro del equipo de arquitectura.
