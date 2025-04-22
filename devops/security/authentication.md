<p align="left">
  <img src="img/hv.png" alt="HashiCorp Vault Logo" height="60"/>
</p>
# 🔐 Autenticación en Vault

Vault es nuestra fuente de verdad para gestionar secretos de manera segura. En esta sección explicamos los dos métodos principales de autenticación que utilizamos en nuestra organización:

1. Acceso interactivo para desarrolladores (mediante GitHub personal token).
2. Acceso automatizado desde pipelines (mediante AppRole y `vault-action`).

---

## 👨‍💻 1. Acceso de desarrolladores (modo interactivo)

Los desarrolladores que necesiten acceder a secretos desde la **interfaz web de Vault** pueden hacerlo utilizando su cuenta de GitHub personal con un token de acceso. Este método permite explorar y validar secretos directamente desde el navegador en entornos de desarrollo y staging.

### 🔗 URL de acceso:

> https://ap-vault.agendapro-devops.com

### 🧭 Pasos para autenticarse

1. Generar un **Personal Access Token (PAT)** desde GitHub con el scope `read:org` (no hace falta más permisos).
2. Acceder a la interfaz web de Vault:  
   [https://ap-vault.agendapro-devops.com](https://ap-vault.agendapro-devops.com)
3. Elegir el método de autenticación `GitHub`.
4. Pegar el token en el campo correspondiente y hacer login.

### 🛑 Recomendaciones

- El acceso está limitado a rutas específicas según el equipo al que pertenecés.
- El token de GitHub se recomienda renovar cada 90 días.

---

## 🤖 2. Acceso desde GitHub Actions (modo automatizado)

Los pipelines de GitHub Actions se autentican contra Vault utilizando el método **AppRole**, gestionado por el equipo DevOps. Esta autenticación permite obtener secretos en tiempo de ejecución sin exponerlos directamente en el repositorio.

### ✅ ¿Por qué AppRole?

- Compatible con entornos CI/CD.
- No requiere sesión interactiva.
- Permite definir políticas estrictas de acceso por proyecto y entorno.

### 🔐 Requisitos

- Vault accesible públicamente o mediante red privada (según el runner).
- Variables `VAULT_ADDR`, `VAULT_ROLE_ID` y `VAULT_SECRET_ID` almacenadas como `GitHub Secrets`.

### ⚙️ Ejemplo en GitHub Actions

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Authenticate and fetch secrets from Vault
        uses: hashicorp/vault-action@v2
        with:
          url: ${{ secrets.VAULT_ADDR }}
          method: approle
          roleId: ${{ secrets.VAULT_ROLE_ID }}
          secretId: ${{ secrets.VAULT_SECRET_ID }}
          secrets: |
            secret/data/dev/app/config API_KEY | APP_API_KEY
