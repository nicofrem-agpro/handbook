[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Technology Stack](/architecture/stack/readme.md) » Frontend

# Frontend

## ReactJS

Actualmente, nuestros frontend son desarrollados en ReactJS. Puedes encontrar más detalles sobre la tecnología y las mejores prácticas en la sección de [ReactJS](/architecture/stack/frontend/react/readme.md). 

Dependiendo del tipo de aplicación que se desee desarrollar, existen 3 formas de implementar ReactJS:

- [NextJS](/architecture/stack/frontend/react/nextjs.md)
- [Single-SPA](/architecture/stack/frontend/react/single-spa.md)
- [Standalone](/architecture/stack/frontend/react/standalone.md)

En la siguiente sección, se presentan las consideraciones para cada una de las opciones.

## When to Use Each React-based Technology

### NextJS

[NextJS](/architecture/stack/frontend/react/nextjs.md)

- **SEO is critical**: NextJS ofrece renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG), lo que mejora significativamente el SEO.
- **Performance is crucial**: El renderizado del lado del servidor y la división de código automática mejoran los tiempos de carga inicial.
- **Dynamic routes are needed**: NextJS proporciona un sistema de enrutamiento potente y flexible.
- **Image optimization is important**: NextJS incluye optimización de imágenes automática.
- **Scalability is required**: NextJS se adapta bien a proyectos pequeños y grandes por igual, y escala con facilidad.

**Considerations**:
- Ideal para aplicaciones web complejas que requieren un buen SEO.
- Excelente para proyectos que necesitan un rendimiento optimizado desde el inicio.
- Puede tener una curva de aprendizaje inicial para desarrolladores nuevos en el framework.

### Single-SPA (Micro-frontends)

[Single-SPA](/architecture/stack/frontend/react/single-spa.md)

- **A micro-frontend architecture is required**: Permite dividir la aplicación en partes más pequeñas y manejables.
- **Different teams work on different sections**: Facilita el desarrollo paralelo y la implementación independiente.
- **Technological flexibility is needed**: Permite usar diferentes frameworks o versiones de React en diferentes partes de la aplicación.
- **Team scalability is a priority**: Ayuda a escalar el desarrollo permitiendo que múltiples equipos trabajen de forma independiente.

**Considerations**:
- Ideal para aplicaciones grandes y complejas con múltiples equipos de desarrollo.
- Requiere una buena planificación y coordinación entre equipos.
- Puede aumentar la complejidad de la configuración inicial y el despliegue.

### Standalone React

[Standalone React](/architecture/stack/frontend/react/standalone.md)

- **The project is not part of the main platform**: Para aplicaciones o herramientas independientes.
- **Maximum flexibility is required**: Permite total control sobre la configuración y las dependencias.
- **The project is relatively simple**: Para aplicaciones pequeñas o medianas sin necesidades complejas de SEO o renderizado del lado del servidor.
- **Creating a rapid prototype**: React standalone permite iniciar rápidamente sin la sobrecarga de frameworks adicionales.

**Considerations**:
- Ideal para proyectos pequeños a medianos o para experimentación.
- Requiere más configuración manual para características como enrutamiento o manejo de estado.
- Puede ser menos optimizado para SEO sin configuración adicional.

## General Recommendations

1. **Evaluate project needs**: Considera factores como SEO, rendimiento, escalabilidad y complejidad del proyecto.

2. **Consider team experience**: Elige la tecnología con la que tu equipo se sienta más cómodo, o esté dispuesto a aprender.

3. **Consider integration with existing systems**: Si el proyecto necesita integrarse con la plataforma principal, Single-SPA podría ser la mejor opción.

4. **Analyze performance requirements**: Si el rendimiento y el SEO son críticos, NextJS podría ser la mejor elección.

5. **Value development speed**: Para proyectos pequeños o prototipos, React standalone puede ofrecer la ruta más rápida.

6. **Think about long-term maintenance**: Considera cómo la elección afectará el mantenimiento y la escalabilidad futura del proyecto.

7. **Consult with the architecture team**: Para decisiones importantes sobre la elección de tecnología, siempre es recomendable consultar con el equipo de arquitectura para asegurar la alineación con la estrategia tecnológica de la empresa.

Recuerda, estas son pautas generales. Cada proyecto puede tener requisitos únicos que pueden influir en la elección de la tecnología. Siempre evalúa caso por caso y no dudes en consultar con el equipo de arquitectura si tienes dudas.