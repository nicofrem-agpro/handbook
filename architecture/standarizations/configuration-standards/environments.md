[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Standarizations](/architecture/standarizations/readme.md) » [Configuration standards](/architecture/standarizations/configuration-standards/readme.md) » Environments

## Variables de Entorno vs. Secretos: Definición y Buenas Prácticas

Para garantizar claridad, seguridad y consistencia en nuestros proyectos, seguimos una separación clara entre configuración de entorno y secretos.

### Configuración

La configuración hace referencia a valores no sensibles que definen cómo debe comportarse una aplicación en un entorno determinado. Algunos ejemplos son:
-	Flags de funcionalidades
-	Límites de reintentos
-	Valores por defecto (zona horaria, localización, etc.)
-	URLs internas o identificadores de servicios

Estos valores generalmente no representan un riesgo de seguridad, por lo que pueden almacenarse en archivos de configuración versionados. Su objetivo principal es permitir modificar el comportamiento de la aplicación sin cambiar el código.

### Secretos

Los secretos son credenciales sensibles que nunca deben almacenarse en el control de versiones. Algunos ejemplos son:
-	Claves de API
-	Contraseñas de bases de datos
-	Claves de cifrado
-	Tokens de autenticación

Los secretos deben gestionarse mediante un sistema seguro de manejo de secretos, en nuestro caso [Vault](/devops/security/readme.md).