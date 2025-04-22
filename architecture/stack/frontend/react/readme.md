[Handbook](/readme.md) » [Architecture](/architecture/readme.md) » [Technology Stack](/architecture/stack/readme.md) » [Frontend](/architecture/stack/frontend/readme.md) » ReactJS

# ReactJS

## 1. **Overview**

Este documento proporciona directrices para diseñar y estructurar aplicaciones frontend basadas en ReactJS dentro de la organización. Cubre mejores prácticas, elección de bibliotecas y estructura de proyectos para garantizar consistencia, mantenibilidad y escalabilidad en nuestras aplicaciones frontend.

## 2. **Core Architectural Principles**

### 2.1 **Component Structure**
- **Functional Components**: Utilizar componentes funcionales con hooks como estándar para todos los nuevos componentes.
- **Component Composition**: Favorecer la composición de componentes pequeños y reutilizables sobre componentes grandes y complejos.
- **Presentational and Container Components**: Separar los componentes de presentación (UI pura) de los componentes contenedores (manejo de estado y lógica).

### 2.2 **State Management**
- **Local State**: Usar `useState` para estado local simple de componentes.
- **Context API**: Utilizar Context API para estado global compartido entre componentes cercanos en el árbol.
- **Zustand**: Para aplicaciones grandes y complejas, para manejar el estado global de la aplicación.
- **Async State**: Usar React Query para manejar estado asíncrono y caching de datos del servidor.

### 2.3 **Project Folder Structure**
- **Feature-based Structure**: Organizar el código por características o módulos de la aplicación.
- **Shared Components**: Mantener componentes compartidos en una carpeta `components` en la raíz.
- **Utilities and Helpers**: Colocar funciones de utilidad y helpers en una carpeta `utils`.
- **API Calls**: Centralizar las llamadas a la API en una carpeta `services` o `api`.

## 3. **Library Choices**
- **Zero Dependencies**: Mantener y justificar cualquier librería de terceros, de lo contrario todo debe ser desarrollado internamente.

### 3.1 **UI Components**
- **Primary UI Library**: [Amethyst](https://github.com/agendapro/amethyst) , [Emerald](https://github.com/agendapro/emerald) o [Emerald-Icons](https://github.com/agendapro/emerald-icons).
- **Form Handling**: React Hook Form.

### 3.2 **Routing**
- **Router**: Usar React Router para el manejo de rutas en aplicaciones de página única (SPA) .

### 3.3 **Styling**
- **CSS-in-JS**: Tailwind.

### 3.4 **Testing**
- **Testing Framework**: Vitest.
- **Component Testing**: React Testing Library para pruebas de componentes.
- **E2E Testing**: Cypress para pruebas de extremo a extremo.
- **MSW**: para mocking de solicitudes y data.

## 4. **Best Practices**

### 4.1 **Performance Optimization**
- **Code Splitting**: Utilizar lazy loading y Suspense para cargar componentes de forma dinámica.
- **Memoization**: Usar `useMemo` y `useCallback` para optimizar renders innecesarios.
- **Virtual Lists**: Implementar listas virtualizadas para renderizar grandes conjuntos de datos eficientemente (Caso App Mobile).
- **Compression**: Siempre usar al configuración de compresión Brotli y Gzip. Ej: [Vite.config](https://github.com/agendapro/agendapro-dsk-template-react/blob/main/vite.config.ts#L35)
  
### 4.2 **Error Handling**
- **Error Boundaries**: Implementar Error Boundaries para capturar y manejar errores en la interfaz de usuario.
- **Fallback UI**: Proporcionar interfaces de usuario de respaldo para estados de error y carga.

### 4.3 **Accessibility**
- **ARIA Attributes**: Usar atributos ARIA apropiadamente para mejorar la accesibilidad.
- **Keyboard Navigation**: Asegurar que la aplicación sea navegable completamente por teclado.

### 4.4 **Code Quality**
- **Linting**: Utilizar ESLint con la configuración de Airbnb como base, personalizando según sea necesario.
- **Formatting**: Usar Prettier para mantener un estilo de código consistente.
- **Type Checking**: Implementar TypeScript para añadir tipado estático y mejorar la calidad del código.

## 5. **Security**

### 5.1 **Data Protection**
- **Sensitive Data**: Nunca almacenar datos sensibles en el estado del cliente o en el almacenamiento local sin cifrar.
- **API Security**: Usar HTTPS para todas las comunicaciones con el backend. Implementar tokens JWT para autenticación.

### 5.2 **Input Validation**
- **Client-side Validation**: Implementar validación de entrada del lado del cliente, pero siempre como complemento a la validación del servidor, nunca como reemplazo.

## 6. **Testing Strategy**

### 6.1 **Unit Testing**
- **Component Tests**: Escribir pruebas unitarias para componentes individuales utilizando React Testing Library.
- **Hook Tests**: Probar hooks personalizados de forma aislada.

### 6.2 **Integration Testing**
- **User Flows**: Escribir pruebas de integración para flujos de usuario comunes utilizando React Testing Library.

### 6.3 **E2E Testing**
- **Critical Paths**: Implementar pruebas E2E con Cypress para los flujos críticos de la aplicación.

### 6.4 **Performance Testing**
- **Lighthouse**: Utilizar Lighthouse para auditar el rendimiento, accesibilidad y mejores prácticas.
- **Bundle Analysis**: Usar herramientas como Webpack Bundle Analyzer o [Vite Bundle Analyzer](https://www.npmjs.com/package/vite-bundle-visualizer) para optimizar el tamaño del bundle.

## 7. **Deployment and CI/CD**

### 7.1 **Build Process**
- **Bundling**: Vite o NextJs + Amplify según sea el caso.
- **Environment Variables**: Manejar configuraciones específicas del entorno a través de variables de entorno.

### 7.2 **Continuous Integration**
- **CI Pipeline**: Configurar un pipeline de CI que ejecute linting, pruebas y build en cada pull request.
- **Automated Deployment**: Implementar despliegues automatizados a entornos de staging y producción tras la aprobación de pull requests.

Recuerda, estas son pautas generales para nuestros proyectos ReactJS. Cada proyecto puede tener requisitos únicos que pueden requerir ajustes en estas prácticas. Siempre consulta con el equipo de arquitectura si tienes dudas o necesitas hacer modificaciones significativas a estas directrices.
