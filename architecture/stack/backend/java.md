[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Technology Stack](/architecture/stack/readme.md) » [Backend](/architecture/stack/backend/readme.md) » Java

# Java

## 1. **Overview**

Este documento proporciona directrices para diseñar y estructurar microservicios en Java dentro de la organización. Cubre métodos de comunicación, patrones de diseño, gestión de datos y otros aspectos críticos para garantizar consistencia, mantenibilidad y escalabilidad en los microservicios.

## 2. **Core Architectural Principles**

### 2.1 **Service Structure**
- **Single Responsibility Principle (SRP)**: Cada servicio debe enfocarse en una sola capacidad de negocio.
- **Service Boundaries**: Definir límites claros del servicio para encapsular la lógica de negocio y los datos. Usar Diseño Orientado al Dominio (DDD) para identificar agregados y contextos delimitados.
- **Thin Controllers**: Mantener los controladores lo más simples posible delegando la lógica de negocio a servicios y objetos de dominio. Utilizar validadores de esquema para la validación de entradas.
- **Model Design**: Usar entidades JPA para encapsular la lógica de acceso a datos. Mantener los modelos sencillos moviendo la lógica de negocio a servicios u otros objetos de dominio. Definir consultas complejas usando JPQL o Criteria API.

### 2.2 **Project Folder Structure**
- **Standard Spring Boot Structure**: Seguir la estructura convencional de Spring Boot (`src/main/java`, `src/main/resources`, etc.), adaptándola para la lógica específica del servicio.
- **Modular Organization**: Usar paquetes como `com.company.service.domain`, `com.company.service.application`, y `com.company.service.infrastructure` para organizar el código.
- **Utility Classes**: Colocar utilidades y clases auxiliares en un paquete `com.company.service.common`.

### 2.3 **Service Layer**
- **Purpose**: Encapsular la lógica de negocio compleja o las interacciones entre múltiples entidades en servicios.
- **Structure**: Usar interfaces para definir contratos de servicio e implementaciones concretas.
- **Dependency Injection**: Utilizar la inyección de dependencias de Spring para gestionar las dependencias entre componentes.

## 3. **Communication Methods**
Referirse a [API](/architecture/design/apis.md) para obtener información de cuándo usar cada uno.

### 3.1 **RESTful API**
- Usar Spring Web para implementar endpoints RESTful.
- Para serialización compleja, usar Jackson con anotaciones personalizadas.

### 3.2 **GraphQL**
- Utilizar Spring for GraphQL para implementar APIs GraphQL.
- Usar GraphiQL o GraphQL Playground para explorar y probar APIs GraphQL.

### 3.3 **Asynchronous Messaging**
- Usar Spring Kafka para integración con Apache Kafka para mensajería asíncrona.
- Implementar listeners de Kafka para consumir eventos de tópicos.

### 3.4 **WebSockets**
- Utilizar Spring WebSocket para implementar comunicación bidireccional en tiempo real.
- Considerar STOMP sobre WebSocket para mensajería estructurada.

## 4. **Data Management**

### 4.1 **Database Design**
- **Primary Database**: Se recomienda PostgreSQL por su amplio conjunto de características y rendimiento.
- **Schema Design**: Seguir principios de normalización pero desnormalizar donde sea necesario por razones de rendimiento. Usar claves foráneas para mantener la integridad referencial.
- **Migrations**: Usar Flyway o Liquibase para gestionar y versionar cambios en el esquema de la base de datos.

### 4.2 **Caching**
- **Query Caching**: Utilizar el caché de segundo nivel de Hibernate para mejorar el rendimiento en datos frecuentemente accedidos.
- **Distributed Caching**: Usar Spring Cache con Redis como proveedor para almacenamiento en caché distribuido.

## 5. **Security**

### 5.1 **Authentication & Authorization**
- **Authentication**: Implementar JWT para autenticación en APIs RESTful usando Spring Security.
- **Authorization**: Utilizar anotaciones de Spring Security como `@PreAuthorize` para control de acceso basado en roles (RBAC).
- **Encryption**: Cifrar datos sensibles en reposo y en tránsito usando las utilidades de cifrado de Spring.

### 5.2 **Security Practices**
- **Input Validation**: Usar Bean Validation (JSR 380) para validar entradas de usuario.
- **CSRF Protection**: Habilitar protección CSRF en Spring Security para aplicaciones web.

## 6. **Background Jobs & Asynchronous Processing**

### 6.1 **Background Job Processing**
- **Tooling**: Utilizar Spring Batch para procesamiento de trabajos en lotes.
- **Job Structure**: Definir jobs y steps en configuraciones de Spring Batch.
- **Retry Strategies**: Implementar políticas de reintento usando Spring Retry.

### 6.2 **Scheduled Jobs**
- **Tooling**: Usar `@Scheduled` de Spring para tareas programadas simples, o Quartz Scheduler para casos más complejos.
- **Best Practices**: Asegurar que los trabajos programados sean idempotentes.

## 7. **Testing Strategy**

### 7.1 **Test Types**
- **Unit Tests**: Usar JUnit 5 con Mockito para pruebas unitarias de servicios y otros componentes.
- **Integration Tests**: Escribir pruebas de integración usando Spring Boot Test para probar interacciones entre diferentes componentes.
- **API Tests**: Validar las respuestas de la API usando RestAssured o TestRestTemplate.
- **End-to-End Tests**: Usar Selenium WebDriver para pruebas de extremo a extremo de la aplicación.

### 7.2 **Coverage**
- **Test Coverage**: Integrar JaCoCo para monitorizar la cobertura de pruebas.

### 7.3 **Test Data Management**
- **Test Containers**: Utilizar Testcontainers para proporcionar bases de datos y servicios reales durante las pruebas.
- **Data Builders**: Implementar el patrón Builder para crear datos de prueba flexibles y reutilizables.