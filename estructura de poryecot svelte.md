# Estructura de proyecto Svelte

Este documento muestra cómo se conectan las carpetas del frontend actual, construido con **SvelteKit**.

```text
CRM-INTERNO-SOS/
├── code/
│   ├── frontend/                       # Aplicación web SvelteKit
│   │   ├── src/
│   │   │   ├── app.html                # Documento HTML base de la aplicación
│   │   │   ├── app.d.ts                # Tipos globales de SvelteKit
│   │   │   ├── lib/                    # Código reutilizable (alias: $lib)
│   │   │   │   ├── assets/             # Imágenes, íconos y otros recursos internos
│   │   │   │   ├── components/         # Componentes visuales reutilizables
│   │   │   │   │   └── Sidebar.svelte
│   │   │   │   └── index.js            # Punto de exportación opcional de lib
│   │   │   │
│   │   │   └── routes/                 # Rutas y pantallas de la aplicación
│   │   │       ├── +layout.svelte       # Estructura común: Sidebar + contenido
│   │   │       ├── +page.svelte         # Pantalla principal: /
│   │   │       └── configuracion/       # Pantalla: /configuracion
│   │   │
│   │   ├── static/                     # Archivos públicos servidos sin procesar
│   │   ├── package.json                # Dependencias y comandos del frontend
│   │   └── .svelte-kit/                # Archivos generados; no se editan
│   │
│   └── backend/                        # API y lógica del servidor (a desarrollar)
│
├── docs/                               # Requisitos, arquitectura y documentación
└── images/                             # Recursos compartidos del repositorio
```

## Cómo se conectan

```text
Navegador
   │
   ▼
src/app.html
   │  crea el documento HTML base
   ▼
src/routes/+layout.svelte
   │  aplica la estructura compartida en todas las rutas
   ├── importa $lib/components/Sidebar.svelte
   └── renderiza la página solicitada
          │
          ├── /                → src/routes/+page.svelte
          └── /configuracion   → src/routes/configuracion/+page.svelte

Componentes y recursos reutilizables
src/lib/components + src/lib/assets
          │
          └── se importan desde layouts y páginas mediante $lib/...
```

## Explicación

### `src/routes`

Es el centro de navegación de SvelteKit. Cada carpeta representa una URL y cada archivo `+page.svelte` representa la pantalla que se muestra en esa URL. Por ejemplo, `src/routes/configuracion/+page.svelte` responde a `/configuracion`.

### `src/routes/+layout.svelte`

Es el contenedor común de las pantallas. Actualmente monta el `Sidebar` y coloca dentro de `<main>` el contenido de la ruta activa. Por eso no hay que repetir la barra lateral en cada página.

### `src/lib`

Guarda elementos que se reutilizan en más de una pantalla. SvelteKit permite acceder a esta carpeta con el alias `$lib`; por ejemplo:

```js
import Sidebar from '$lib/components/Sidebar.svelte';
```

Los componentes visuales van en `lib/components` y los recursos internos, como íconos o imágenes importadas desde código, van en `lib/assets`.

### `static`

Contiene archivos públicos que no necesitan ser importados desde JavaScript o Svelte. Se acceden directamente desde la raíz del sitio, por ejemplo: `static/logo.png` se utiliza como `/logo.png`.

### `backend`

Es el lugar reservado para la API, la conexión con la base de datos y las reglas de negocio del servidor. El frontend debería consumirlo mediante solicitudes HTTP; así la interfaz y la lógica de negocio quedan separadas.

## Regla práctica

- Una **pantalla o URL** nueva: crearla en `src/routes`.
- Un elemento visual reutilizable: crearlo en `src/lib/components`.
- Una imagen importada desde un componente: guardarla en `src/lib/assets`.
- Un archivo público accesible por URL: guardarlo en `static`.
