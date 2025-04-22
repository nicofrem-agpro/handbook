[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Technology Stack](/architecture/stack/readme.md) » Backend

# Backend

## When to Use Each Technology

**Importante**: La elección de un lenguaje de programación y framework debe ser congruente con los conocimientos técnicos de tu equipo.
No elijas una tecnología que tu equipo no conozca, ya que esto puede resultar en un aumento en el tiempo de desarrollo, 
en la calidad del código y en la dificultad de mantenimiento.

### Java

[Java](/architecture/stack/backend/java.md)

- **Performance**: Java ofrece excelente rendimiento para aplicaciones que manejan cargas pesadas.
- **Complex business logic**: El tipado fuerte de Java y su robustez lo hacen ideal para implementar lógica de negocio compleja.
- **Critical consistency**: Cuando la consistencia de datos es crucial, Java proporciona herramientas sólidas para garantizarla.
- **Enterprise integration**: Java tiene un amplio soporte para integración con sistemas empresariales legacy.
- **Real-time processing**: Ideal para aplicaciones que requieren procesamiento en tiempo real y baja latencia.

**Considerations**:
- Requiere desarrolladores con experiencia en Java y sus frameworks (como Spring Boot).
- Excelente para proyectos a largo plazo que necesitan escalabilidad y mantenibilidad.
- Puede tener una curva de aprendizaje más pronunciada para desarrolladores junior.

### Express

[Express](/architecture/stack/backend/express.md)

- **Light and Small**: Ideal para microservicios con responsabilidades limitadas y bien definidas.
- **Low Complexity APIs**: Excelente para crear APIs rápidas y eficientes con Express.js.
- **Real-time Services**: NodeJS brilla en aplicaciones que requieren comunicación en tiempo real (como chats o notificaciones push).
- **Collaboration with frontend**: Permite a los desarrolladores de frontend contribuir más fácilmente al backend.
- **Asynchronous Processing**: Ideal para servicios que manejan muchas operaciones I/O concurrentes.

**Considerations**:
- Perfecto para equipos con fuerte experiencia en JavaScript.
- Excelente para proyectos que requieren prototipado rápido y ciclos de desarrollo cortos.
- Puede no ser la mejor opción para aplicaciones con cálculos intensivos o que requieren mucho procesamiento en CPU.

### Ruby on Rails

[Ruby on Rails](/architecture/stack/backend/ruby-on-rails.md)

- **CRUD**: Rails destaca en la creación rápida de aplicaciones con operaciones CRUD estándar.
- **Backoffices**: La facilidad de uso de Rails y sus gemas lo hacen ideal para construir interfaces de administración.
- **Boilerplate**: Rails puede ahorrar tiempo en servicios que requieren mucha configuración inicial.
- **RESTful APIs**: Rails API mode es excelente para crear APIs RESTful de manera eficiente.

**Considerations**:
- Ideal para equipos familiarizados con Ruby y su ecosistema.
- Excelente para proyectos que requieren un desarrollo rápido y mantenimiento a largo plazo.
- Puede no ser la mejor opción para aplicaciones que requieren un rendimiento extremadamente alto.

## General Recommendations

1. **Project Requirements**: Considera el rendimiento requerido, la complejidad de la lógica de negocio y las habilidades del equipo.

2. **Scalability**: Java puede ser preferible para aplicaciones que necesitarán escalar significativamente en el futuro.

3. **Long-term**: Ruby on Rails puede ser más fácil de mantener para aplicaciones CRUD estándar.

4. **Development Speed**: NodeJS y Ruby on Rails pueden ofrecer un desarrollo más rápido para ciertos tipos de aplicaciones.

5. **Ecosystem**: Considera las bibliotecas y herramientas disponibles en cada ecosistema que puedan beneficiar tu proyecto.

6. **Consult with Architecture Team**: Para decisiones importantes sobre la elección de tecnología, siempre es recomendable consultar con el equipo de arquitectura para asegurar la alineación con la estrategia tecnológica de la empresa.

Recuerda, estas son pautas generales. Cada proyecto puede tener requisitos únicos que pueden influir en la elección de la tecnología. Siempre evalúa caso por caso y no dudes en consultar con el equipo de arquitectura si tienes dudas.
