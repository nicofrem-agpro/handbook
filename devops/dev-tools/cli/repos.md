# Creación de Repositorios

En Agendapro, utilizamos repositorios **template** en GitHub para estandarizar la estructura de nuestros proyectos y asegurar que todos los nuevos desarrollos incluyan la lógica e integraciones adquiridas como mejores prácticas de nuestros despliegues.

Actualmente, contamos con los siguientes templates:

- **Template Ruby:** [agendapro-dsk-template-ruby](https://github.com/agendapro/agendapro-dsk-template-ruby)
- **Template React:** [agendapro-dsk-template-react](https://github.com/agendapro/agendapro-dsk-template-react)
- **Template Express:** [agendapro-dsk-template-express](https://github.com/agendapro/agendapro-dsk-template-express)

Estos templates contienen configuraciones predefinidas para facilitar la integración con nuestras herramientas de monitoreo, despliegue y seguridad.

### Comandos para Crear Nuevos Repositorios

Para generar nuevos proyectos basados en estos templates, utilizamos los siguientes comandos en nuestro CLI:

```sh
new-backend-ruby              # Crea un nuevo backend en Ruby on Rails
new-micro                     # Crea un nuevo MicroFrontend en React
new-backend-express           # Crea un nuevo backend en Express
```
## Pre-requisitos
### Configuración de Credenciales en GitHub
Antes de poder utilizar los templates, es necesario autenticar nuestras credenciales de GitHub mediante los siguientes comandos:

```sh
vault-github-login <token>    # Iniciar sesión con GitHub
github-token <token>          # Establecer el token de GitHub
```
Con esta configuración, aseguramos un acceso seguro y controlado a los repositorios template, permitiendo que los nuevos proyectos sigan las mejores prácticas establecidas en Agendapro.
