## TP6 - Ingeniería y Calidad de Software

Proyecto de ejemplos de tests E2E y API con Cypress contra `https://thinking-tester-contact-list.herokuapp.com/`.

### Requisitos

- Node.js 18+ (para Cypress)

### Instalar y ejecutar Cypress (JS)

```bash
npm install
npx cypress run
```

Para abrir en modo interactivo:

```bash
npx cypress open
```

### Escenarios cubiertos

- UI: registro, login, logout.
- API (Cypress):
  - Login: credenciales incorrectas y campos vacíos.
  - Registro: email inválido, contraseña menor a 7 caracteres.
  - Alta de contacto: `firstName` requerido, `lastName` requerido.

### Conclusiones (plantilla)

- Qué validaciones cubrimos y por qué.
- Qué datos de prueba usamos y cómo aislamos casos.
- Qué valor aportan los tests automáticos al proceso de calidad.
- Hallazgos y mejoras futuras.

### Estructura

- `cypress/e2e` tests: UI (registro/login/logout) y API (login/register/contacts).
