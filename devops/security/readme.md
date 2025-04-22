<p align="left">
  <img src="img/hv.png" alt="HashiCorp Vault Logo" height="60"/>
</p>
# 🔐 Seguridad y Gestión de Secretos

## Objetivo de esta sección

Esta sección del handbook tiene como propósito centralizar y estandarizar la forma en la que manejamos secretos dentro de nuestra organización. Buscamos establecer un modelo de **gestión de secretos robusto, seguro, auditable y automatizable**, alineado con buenas prácticas y principios de *least privilege* (mínimo privilegio).

La información contenida acá está dirigida a:

- Desarrolladores que necesitan consumir secretos de forma segura.
- Equipos de DevOps/SRE responsables de orquestar la infraestructura y pipelines.
- Personas líderes técnicas que definen la estrategia de seguridad.

## Qué buscamos lograr

✅ Utilizar **Vault** como fuente única de verdad para todos los secretos de sistemas, APIs, credenciales y configuraciones sensibles.  
✅ Habilitar el acceso dinámico y temporal a los secretos desde nuestras herramientas de CI/CD como GitHub Actions.  
✅ Establecer una arquitectura escalable y segura que permita auditar, rotar y gestionar permisos por entorno y equipo.  
✅ Reducir la exposición de credenciales en logs, código fuente o pipelines.  

---

## 📚 Índice de esta sección

- [`autenticacion`](authentication.md) – Métodos de autenticación utilizados y recomendaciones.
- [`estructura-vault`](structure.md) – Forma de trabajo, organización de rutas y convenciones.
- [`roles-prod.md`](roles-prod.md) – Líderes responsables de la gestión de secretos en producción.

---

Para cualquier sugerencia o mejora, abrí un PR o escribinos directamente en el canal de `#devops`.
