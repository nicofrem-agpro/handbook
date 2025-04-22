[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Design](/architecture/design/readme.md) » API

# API

## 1. Communication Methods

### 1.1 **RESTful API**
- **When to Use**:
  - Ideal para operaciones CRUD y recursos que se asignan directamente a métodos HTTP (GET, POST, PUT, DELETE).
  - Funciona bien para la mayoría de las interacciones cliente-servidor tradicionales, donde la simplicidad y la escalabilidad son prioridades.
- **Best Practices**:
  - Implementar versionado con *namespaces* (por ejemplo, `/api/v1/`) para compatibilidad retroactiva.
  - Usar códigos de estado HTTP estándar y mensajes de error significativos.

### 1.2 **GraphQL**
- **When to Use**:
  - Adecuado para clientes que requieren flexibilidad en la consulta de datos, especialmente cuando diferentes clientes necesitan diferentes subconjuntos de datos.
  - Útil para optimizar el rendimiento al reducir el sobreaprovisionamiento o la subobtención de datos.
- **Best Practices**:
  - Definir un esquema claro con tipos, consultas y mutaciones.
  - Usar resolvers para encapsular la lógica para obtener datos y ejecutar mutaciones.
  - Implementar técnicas de agrupación (`graphql-batch`) para reducir problemas de consultas N+1.

### 1.3 **Asynchronous Messaging**
- **When to Use**:
  - Adecuado para desacoplar servicios y habilitar arquitecturas impulsadas por eventos.
  - Ideal para tareas que no requieren respuesta inmediata o que pueden procesarse en segundo plano, como enviar correos electrónicos o procesar grandes volúmenes de datos.
- **Best Practices**:
  - Implementar idempotencia en los mensajes para manejar reintentos y evitar duplicaciones.
  - Asegurar una adecuada monitorización y registro de las colas de mensajes para manejar fallos.

### 1.4 **WebSockets**
- **When to Use**:
  - Adecuado para necesidades de comunicación en tiempo real, como aplicaciones de chat, notificaciones en vivo o actualizaciones de datos en tiempo real.
- **Best Practices**:
  - Implementar autenticación y autorización para asegurar la comunicación.
  - Usar canales para organizar y gestionar las conexiones WebSocket.
