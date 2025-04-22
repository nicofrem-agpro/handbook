[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Technology Stack](/architecture/stack/readme.md) » [Backend](/architecture/stack/backend/readme.md) » Ruby on Rails

# Ruby on Rails

## 1. **Overview**

Este documento proporciona directrices para diseñar y estructurar microservicios en Ruby on Rails dentro de la organización. Cubre métodos de comunicación, patrones de diseño, gestión de datos y otros aspectos críticos para garantizar consistencia, mantenibilidad y escalabilidad en los microservicios.

## 2. **Core Architectural Principles**

### 2.1 **Service Structure**
- **Single Responsibility Principle (SRP)**: Cada servicio debe enfocarse en una sola capacidad de negocio.
- **Service Boundaries**: Definir límites claros del servicio para encapsular la lógica de negocio y los datos. Usar Diseño Orientado al Dominio (DDD) para identificar agregados y contextos delimitados.
- **Skinny Controllers**: Mantener los controladores lo más simples posible delegando la lógica de negocio a objetos de servicio, objetos de consulta y concerns. Utilizar interfaces o validadores de esquema para la validación de entradas, pero delegar la lógica de validación compleja a otros objetos.
- **Model Design**: Usar modelos para encapsular la lógica de acceso a datos. Mantener los modelos sencillos moviendo la lógica de negocio a objetos de servicio, concerns u otros objetos de dominio. Definir lógica de consulta reutilizable dentro de los modelos usando scopes, pero usar *query objetcs* para consultas más complejas. Minimizar el uso de callbacks para evitar efectos secundarios ocultos y asegurar flujos de datos claros. Preferir llamadas de métodos explícitas dentro de objetos de servicio u otros objetos de dominio.

### 2.2 **Project Folder Structure**
- **Standard Rails Structure**: Seguir la estructura convencional de Rails (`app/models`, `app/controllers`, etc.), pero adaptarla para la lógica específica del servicio.
- **Modular Organization**: Usar `app/services` y `app/actors` para la lógica de dominio, encapsulando operaciones de negocio complejas.
- **Concerns**: Organizar comportamientos compartidos entre modelos, controladores y otras clases usando `app/models/concerns` y `app/controllers/concerns`.
- **Lib Directory**: Colocar utilidades y bibliotecas no específicas del dominio en el directorio `lib/`. Asegurarse de que estén bien documentadas y probadas.

### 2.3 **Service Objects**
- **Purpose**: Encapsular la lógica de negocio compleja o las interacciones entre múltiples modelos en objetos de servicio ubicados en `app/services` o  `app/actors`. Implementar *command pattern* con `actors` para encapsular la lógica de negocio que involucra flujos de trabajo complejos, especialmente aquellos que pueden cambiar o evolucionar con el tiempo.
- **Structure**: Usar una interfaz clara, típicamente un único método `call` que maneja la operación.
- **Dependency Injection**: Pasar dependencias (por ejemplo, repositorios, otros servicios) a los objetos de servicio a través de inicializadores para facilitar las pruebas y el mantenimiento.
- **Other Service Objects**: Trabajando con microservicios lo suficientemente pequeños, que debería ser la mayoría de los casos, para mantener el orden no debería ser necesario crear otros tipos de objetos de servicio como `decorators`, `query`, `strategy`, `facade` y otros. Sólo en casos justificados, se preferirá usar estos otros tipos de objetos.

## 3. **Communication Methods**
Referirse a [API](/architecture/design/apis.md) para obtener información de cuándo usar cada uno.

### 3.1 **RESTful API**
- Usar `ActionController::API` de Rails para *endpoints* RESTful.
- Para serialización compleja, usar `ActiveModel::Serializers` o `JSON:API Serializer`.

### 3.2 **GraphQL**
- Usar la gema `graphql-ruby` para implementar GraphQL en Rails.
- `GraphiQL` puede ser usado como IDE en el navegador para explorar APIs GraphQL.

### 3.3 **Asynchronous Messaging**
- Usar `Kafka` para emitir mensajería asíncrona.
- Usar `Karafka` para consumir eventos de tópicos en Kafka para comunicación asíncrona.

### 3.4 **WebSockets**
- Usar `ActionCable` de Rails para WebSockets.
- Para entornos de producción, asegurar una escalabilidad adecuada usando Redis como backend para `ActionCable`.

## 4. **Data Management**

### 4.1 **Database Design**
- **Primary Database**: Se recomienda PostgreSQL por su amplio conjunto de características, incluyendo soporte para JSONB y búsqueda de texto completo.
- **Schema Design**: Seguir principios de normalización pero desnormalizar donde sea necesario por razones de rendimiento. Usar claves foráneas para mantener la integridad referencial.
- **Migrations**: Mantener las migraciones de bases de datos compatibles hacia atrás. Para cambios a gran escala, considerar migraciones en fases.


### 4.2 **Caching**
- **Query Caching**: Usar el almacenamiento en caché de consultas integrado en ActiveRecord para mejorar el rendimiento en datos frecuentemente accedidos.
- **Fragment Caching**: Usar el almacenamiento en caché de fragmentos de Rails para almacenar partes de vistas que no cambian con frecuencia.
- **Redis Caching**: Usar Redis para almacenamiento en memoria de consultas costosas o respuestas de la API. Implementar estrategias claras de invalidación de caché.

### 4.3 Pagination
- Paginating database records: Usar la gema de Pagy para manejar paginación en los registros de base de datos.

## 5. **Security**

### 5.1 **Authentication & Authorization**
- **Authentication**: Usar `Devise` para la autenticación de usuarios, e implementar tokens JWT para endpoints públicos de la API. Si no es un servicio expuesto públicamente, se puede limitar la comunicación a redes privadas y usar un sistema simple de autenticación.
- **Authorization**: Implementar control de acceso basado en roles (RBAC) usando `CanCanCan`.
- **Encryption**: Cifrar datos sensibles en reposo usando `pgcrypto` para PostgreSQL y en tránsito usando TLS.

### 5.2 **Security Practices**
- **Parameter Filtering**: Asegurarse de que los parámetros sensibles (por ejemplo, contraseñas, tokens) se filtren de los registros.
- **Input Validation**: Validar y sanear todas las entradas de usuario para prevenir inyecciones SQL, XSS y otras vulnerabilidades.

## 6. **Background Jobs & Asynchronous Processing**

### 6.1 **Background Job Processing**
- **Tooling**: Usar `Sidekiq` para procesamiento de trabajos en segundo plano, con Redis como almacén de trabajos.
- **Job Structure**: Colocar trabajos en segundo plano en `app/jobs`, asegurando que cada trabajo encapsule una sola unidad de trabajo.
- **Retry Strategies**: Implementar mecanismos de reintento o rollback para trabajos fallidos, con retroceso exponencial, colas de mensajes fallidos e idempotencia para manejar la reejecución o repetición de trabajos sin efectos adversos.

### 6.2 **Scheduled Jobs**
- **Tooling**: Usar `Sidekiq-Cron` para programar tareas recurrentes.
- **Best Practices**: Mantener los trabajos programados idempotentes para manejar la reejecución sin efectos adversos.

## 7. **Testing Strategy**

### 7.1 **Test Types**
- **Unit Tests**: Usar `RSpec` con `FactoryBot` para pruebas unitarias de modelos, objetos de servicio y otros componentes. Usar las funciones integradas de `RSpec` para mocking y stubbing.
- **Integration Tests**: Escribir pruebas de integración usando `RSpec` para probar interacciones entre diferentes componentes, particularmente puntos finales de la API.
- **API Tests**: Validar las respuestas de la API usando herramientas como `RSpec` combinado con `VCR` y `WebMock` para solicitudes HTTP externas.
- **System Tests**: Usar `Capybara` para pruebas de extremo a extremo de la aplicación desde la perspectiva del usuario.

### 7.2 **Coverage**
- **Test Coverage**: Integrar `SimpleCov` para monitorizar la cobertura de pruebas y asegurar que las rutas críticas estén bien probadas.

### 7.3 **Test Data Management**
- **Factories**: Usar `FactoryBot` para crear datos de prueba flexibles y reutilizables. Definir traits para diferentes variaciones de datos de prueba.
- **Fixtures**: Limitar el uso de fixtures de Rails para evitar pruebas frágiles, y preferir factories para datos dinámicos.

## 8. **Configuration and Secret Management**

### 8.1 **Settings**
- **Settings**: Utilizamos la gema `settings` para manejar variables de configuración de manera centralizada y consistente. Esta proporciona un único punto de acceso a valores definidos por entorno a lo largo del proyecto.