# Automatización de Pruebas API - Sistema de Guías con Serenity BDD

Este proyecto implementa la automatización de pruebas API usando **Playwright**, **Serenity BDD** y el patrón **Screenplay** para el sistema de creación de guías con servicio "Contra Entrega".

## Tecnologías Utilizadas

- **Playwright** - Framework para automatización de pruebas API  
- **Serenity BDD** - Framework de reporting y organización de pruebas
- **Screenplay Pattern** - Patrón de diseño para organización de pruebas
- **TypeScript** - Lenguaje de programación
- **Node.js** - Entorno de ejecución

## Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd reto

# Instalar dependencias
npm install
```

## Ejecución de Pruebas

### Todas las pruebas
```bash
npm test
```

### Pruebas específicas
```bash
# Todas las pruebas funcionales (10 casos de prueba)
npx playwright test functional.spec.ts
```

## Pruebas de Performance con K6

### 1. Instalación de K6

- Windows: `choco install k6`  
- Mac/Linux: `brew install k6` o [descarga desde la web oficial](https://k6.io/docs/getting-started/installation/)

### 2. Ejecución de las pruebas

Desde la raíz del proyecto:

```sh
k6 run k6/carga.js   # Prueba de carga
k6 run k6/estres.js  # Prueba de estrés
```