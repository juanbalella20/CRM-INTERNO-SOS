# CRM-INTERNO-SOS

## Levantar el frontend

Requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
cd code/frontend
npm install
npm run dev
```

Abrí `http://localhost:5173` en el navegador.

### Opciones elegidas al crear el proyecto (`npx sv create`)

- Template: **minimal** (Skeleton project) — sin demos de sobra
  - Las otras plantillas traen páginas y componentes de ejemplo que habría que borrar antes de empezar.
- Type checking: **jsdoc** — tipado liviano con comentarios, sin TypeScript completo
  - TypeScript suma sintaxis nueva; jsdoc da autocompletado sin cambiar cómo se escribe JS. Se puede migrar más adelante.
- Add-ons: **ninguno** — sin ESLint, Prettier, Tailwind, Vitest, etc.
  - Cada uno resuelve un problema que este prototipo todavía no tiene (estilo de código en equipo, atajos de CSS, testing automatizado).

