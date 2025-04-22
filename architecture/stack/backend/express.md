[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Technology Stack](/architecture/stack/readme.md) » [Backend](/architecture/stack/backend/readme.md) » Express.js

# Express #

## 1. **Overview**  
Este documento proporciona directrices para diseñar y estructurar microservicios utilizando Express dentro de la organización. Cubre métodos de comunicación, patrones de diseño, gestión de datos y otros aspectos críticos para garantizar consistencia, mantenibilidad y escalabilidad en los microservicios.

## 2. **Core Architectural Principles**  
### 2.1 Service Structure

  - **Single Responsibility Principle (SRP):** Cada micro servicio debe enfocarse en una sola capacidad de negocio.
  -	**Arquitectura Hexagonal:** El proyecto sigue el flujo estricto del patro de arquitectura [hexagonal](/architecture/design/hexagonal.md)
  - **Service Boundaries:** Definir límites claros del micro servicio para encapsular la lógica de negocio y los datos. Usar Diseño Orientado al Dominio (DDD) para identificar agregados y contextos delimitados.
  -	**Routes Design:** Definir los puntos de entrada del sistema. Las rutas deben ser simples y delegar la lógica de negocio a los controladores.
  -	**Skinny Controllers:** Procesar las solicitudes entrantes y delegar la lógica a los servicios. Mantener los controladores ligeros.
  -	**Service Design:** Contener toda la lógica de negocio y manipulación de datos compleja. Interactuar con los repositorios para obtener, crear o actualizar datos.
  -	**Repository Design:** Manejar la comunicación con la base de datos a través de los modelos de [Sequelize](https://sequelize.org/) o [Mongoose](https://mongoosejs.com/).
  -	**Model Design:** Usar ODMs como [Mongoose](https://mongoosejs.com/) para [MongoDB](https://www.mongodb.com/) o ORMs como [Sequelize](https://sequelize.org/) para bases de datos SQL. Representar las entidades de la base de datos. Mantener la lógica de negocio fuera de los modelos. Minimizar el uso de callbacks en los modelos. (Los modelos son las definiciones de los schemas)

### 2.2 **Project Folder Structure**
  -	**Modular Structure:** Los subdirectorios dentro de src/ están organizados por modulos, y cada modulo tiene subdirectorios específicos como `models/`, `controllers/`, `middlewares/`, `services/`, `repositories/`.
  -	**Centralized Configuration:** Ubicar todas las configuraciones del proyecto en la carpeta `config/`, separando claramente las configuraciones por modulo (`config/database/`, `config/kafka/`, `config/routes/`, etc).
  - **Utils Directory:** Colocar utilidades específicas del dominio en el directorio `utils/`. Asegurarse de que estén bien documentadas y probadas.

### 2.3 **Programming Style**
  -	**Functional Programming:** Todo el código del proyecto sigue un enfoque funcional, evitando el uso de clases o patrones orientados a objetos, excepto en casos específicos.
  -	**Models Exception:** En el caso de usar [Sequelize](https://sequelize.org/), se debe construir una clase para facilitar la definición de los modelos, siguiendo las recomendaciones de [Sequelize](https://sequelize.org/). Sin embargo, el modelo debe exportar una función que permita su uso dentro del paradigma funcional.

## 3. **Communication Methods**
Referirse a [API](/architecture/design/apis.md) para obtener información de cuándo usar cada uno.

  ### 3.1 **API RESTful**
  - Utilizar [express](https://expressjs.com/es/) junto con TypeScript para crear endpoints RESTful.
  - Utilizar [axios](https://axios-http.com/es/docs/intro) para consumir otras APIs. 

  ### 3.2 **GraphQL**  
  - Usar la librería [graphql-request](https://github.com/jasonkuhrt/graffle) para consumir a través de GraphQL.
  - Usar la librería [@apollo/server](https://www.apollographql.com/docs/apollo-server/getting-started/) para enviar datos a través de GraphQL. 
  - Utilizar [GraphiQL](https://github.com/graphql/graphiql) para explorar y probar las API de GraphQL.

  ### 3.3 **Asynchronous Messaging**  
  - Implementar Kafka para la mensajería asíncrona.
  - Usar [kafkajs](https://kafka.js.org/) Producer/Consumer para consumir eventos de tópicos en Kafka.
  - Asegurar el manejo de idempotencia en los mensajes de kafka al momento de consumir

  ### 3.4 **WebSockets**  
  - Utilizar la librería [socket.io](https://socket.io/) para implementar WebSockets.

## 4. **Data Management**
  ### 4.1 **Database Design**  
  - **Primary Database:** Se recomienda [MongoDB](https://www.mongodb.com/) para aplicaciones basadas en documentos o [PostgreSQL](https://www.postgresql.org/) para aplicaciones que requieren un modelo relacional más estricto.
  - **Schema Design:** Para [MongoDB](https://www.mongodb.com/), diseñar esquemas flexibles pero consistentes. Para SQL, seguir principios de normalización pero desnormalizar donde sea necesario por razones de rendimiento
  - **Migrations:** Mantener las migraciones de bases de datos compatibles hacia atrás. Para cambios a gran escala, considerar migraciones en fases. Usar herramientas como [Sequelize CLI](https://sequelize.org/docs/v6/) para gestionar y versionar cambios en el esquema de la base de datos.

  ### 4.2 **Caching**  
  - **In-Memory Caching:** Utilizar [node-cache](https://github.com/node-cache/node-cache) para almacenamiento en caché en memoria.
  - **Query Caching:** Utilizar el caché de consultas de [Sequelize](https://sequelize.org/) para mejorar el rendimiento de datos consultados frecuentemente.  
  - **Redis:** Usar Redis con [node-redis](https://github.com/redis/node-redis) para almacenamiento en caché distribuido.

## 5. **Security**  
  ### 5.1 **Authentication & Authorization**  
  - **Authentication:** Implementar JWT para autenticación en APIs RESTful usando bibliotecas como [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken).
  - **Authorization:** Utilizar middleware personalizado o bibliotecas como [express-jwt](https://github.com/auth0/express-jwt#readme) para control de acceso basado en roles (RBAC).
  - **Encryption:** Cifrar datos sensibles usando bibliotecas como [crypto-js](https://www.npmjs.com/package/crypto-js).

  ### 5.2 **Security Practices**  
  - **Paramaters Filter:** Asegurarse de que los parámetros sensibles (como contraseñas o tokens) sean filtrados en los registros.  
  - **Input Validation:** Usar [yup](https://github.com/jquense/yup) para validar entradas de usuario.
  - **CSRF Protection:** Implementar protección [CSRF](https://es.wikipedia.org/wiki/Cross-site_request_forgery#:~:text=El%20CSRF%20) usando csurf para aplicaciones web.

## 6. **Background Jobs & Asynchronous Processing**
  ### 6.1 **Background Job Processing**
  - **Tooling:** Usar [bull](https://github.com/OptimalBits/bull) para el procesamiento de trabajos en segundo plano en Node.js con Redis.  
  - **Retry Strategies:** Implementar mecanismos de reintento o rollback para trabajos fallidos, asegurando la idempotencia para evitar efectos adversos.

  ### 6.2 **Scheduled Jobs**
  - **Tooling:** Utilizar [bull](https://github.com/OptimalBits/bull)  para programar tareas recurrentes.
  - **Best Practices:** Asegurar que los trabajos programados sean idempotentes.

## 7. **Testing Strategy**  
  ### 7.1 **Test Types**  
  - **Unit Tests:** Utilizar [Vitest](https://vitest.dev/) para pruebas unitarias de funciones.   
  - **Integration Tests:** Escribir pruebas de integración para probar interacciones entre diferentes componentes. 
  - **API Tests:** Validar las respuestas de la API usando [axios](https://axios-http.com/es/docs/intro) en combinación con [Vitest](https://vitest.dev/).

  ### 7.2 **Coverage** 
  - **Test Coverage:** Utilizar la cobertura integrada de [Vitest](https://vitest.dev/) para monitorizar la cobertura de pruebas.

## 8. **Configuration and Secrets Management**

### 8.1 **Settings**

- **Settings JSON:** Se utiliza un archivo settings.json para centralizar configuraciones no sensibles que definen el comportamiento de la aplicación en función del entorno (por ejemplo, URLs, timeouts, flags, etc.).

-	**Settings JS:** El archivo settings.js debe importar el JSON y exportar una configuración enriquecida, resolviendo valores dinámicos según el entorno actual (NODE_ENV). Este archivo actúa como punto único de acceso a las variables de configuración del proyecto.