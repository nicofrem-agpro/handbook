<p align="left">
  <img src="img/hv.png" alt="HashiCorp Vault Logo" height="60"/>
</p>
### Estructura por proyecto en Vault

Cada proyecto tiene su propio **KV engine** en Vault, con tres carpetas (paths) internas según entorno:

- nombre-del-proyecto/
  - staging/      # Entorno de pruebas de desarrollo  
  - qa/           # Entorno de calidad  
  - production/   # Entorno productivo (acceso restringido)

---

### Ejemplo real

- api-notifications/
  - staging/  
  - qa/  
  - production/

- `staging/`: Uso libre para pruebas y desarrollo continuo.
- `qa/`: Entorno de testing antes de pasar a producción.
- `production/`: Contiene secretos sensibles. Solo accesible por personas autorizadas.

---

### Accesos por defecto para desarrolladores

Por política organizacional, todos los desarrolladores tendrán **acceso por defecto a las carpetas `qa/` y `staging/`** dentro del engine de su(s) proyecto(s) asignado(s).

Esto les permitirá:

- Consultar y actualizar secretos necesarios para entornos de prueba.
- Validar integraciones y configuraciones sin depender de terceros.
- Automatizar workflows de desarrollo y testing (CI/CD).

> **Importante:**  
Los desarrolladores **no tendrán visibilidad ni acceso a la carpeta `production/`**.  
El entorno productivo está restringido exclusivamente a personas designadas con permisos específicos, con el fin de proteger datos sensibles y evitar accesos no autorizados.
