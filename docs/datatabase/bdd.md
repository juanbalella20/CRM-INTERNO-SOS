# Modelo de datos — CRM Interno SOS


## Núcleo comercial: Prospecto, Producto, Estado, Oportunidad

### El problema

La empresa vende varios productos de software. Un mismo prospecto puede estar en
un estado comercial distinto **para cada producto**: cliente activo del Sistema 1
y, al mismo tiempo, en primer contacto por el Sistema 2.

Por lo tanto el estado **no es un atributo del prospecto**. Un prospecto solo no
tiene un estado: el estado nace del cruce prospecto + producto.

### La solución: entidad Oportunidad

`Oportunidad` representa el cruce **"este prospecto con este producto"**. Es la
entidad que sostiene el estado comercial y la negociación.

| id | prospecto_id | producto_id | estado_id | fecha_apertura |
|----|--------------|-------------|-----------|----------------|
| 1  | 1 (Juan)     | 1 (Sist. 1) | 3 (Cliente activo)  | 2026-01-10 |
| 2  | 1 (Juan)     | 2 (Sist. 2) | 1 (Primer contacto) | 2026-03-02 |
| 3  | 2 (Ana)      | 1 (Sist. 1) | 2 (Propuesta enviada) | 2026-02-15 |

### Relaciones

```
Prospecto   --(1,1)-- Tiene    --(0,N)-- Oportunidad
Producto    --(1,1)-- refiere  --(0,N)-- Oportunidad
Estado      --(1,1)-- Esta en  --(0,N)-- Oportunidad
Oportunidad --(1,1)-- genera   --(0,N)-- Proxima Accion
Regla       --(0,1)-- Genera   --(0,N)-- Proxima Accion
Estado      --(1,1)-- anterior a --(1,1)-- Estado
```

Lectura:

- Un prospecto tiene 0 o N oportunidades; una oportunidad pertenece a 1 y sólo 1 prospecto.
- Un producto aparece en 0 o N oportunidades; una oportunidad refiere a 1 y sólo 1 producto.
- Un estado aplica a 0 o N oportunidades; una oportunidad está en 1 y sólo 1 estado.
- Una oportunidad genera 0 o N próximas acciones; una próxima acción pertenece a 1 y sólo 1 oportunidad.
- Una regla genera 0 o N próximas acciones; una próxima acción fue generada por 0 o 1 regla.
- `anterior a` es la autorrelación de Estado que define el orden del pipeline.

### Decisiones tomadas

**El `(0,N)` del lado Oportunidad en `Tiene`.** La oportunidad se crea cuando
ocurre algo real, no de antemano. No se pre-generan filas "no ofrecido" para cada
combinación prospecto × producto: la ausencia de fila ya significa que no se le
ofreció. La ficha del prospecto lista igual los productos con su estado — eso se
resuelve en la consulta, no en la tabla.

**El pipeline de estados es único.** Todos los productos comparten la misma gama
de estados; `Estado` es un catálogo global, no uno por producto.

**Próxima acción siempre cuelga de una oportunidad.** `oportunidad_id` nunca es
NULL. `regla_id` es opcional: NULL significa que la cargó una persona, con valor
significa que la generó una regla. No es un arco exclusivo — se evitó a propósito
el diseño con dos FK mutuamente excluyentes, donde la base no puede impedir filas
con ambas en NULL o ambas llenas. Esto permite que la ficha del prospecto muestre
todas sus próximas acciones juntas, sin importar el origen.

### Lo que esta decisión reemplazó

- `Etapa comercial` como atributo de Prospecto → el estado vive en la oportunidad.
- `Prospecto --tiene-- Estado` → reemplazado por `Esta en` sobre Oportunidad.
- `Prospecto --Tiene-- Proxima Accion` (era N:N) → reemplazado por `genera` desde Oportunidad.
- `Estado --genera-- Proxima Accion` → reemplazado por `genera` desde Oportunidad.

### Entidades y atributos

| Entidad | Atributos |
|---|---|
| Producto | id, nombre |
| Oportunidad | id, fechaApertura, fechaCierre, |
| Estado | id, nombre |
| Proxima Accion | id, nombre, fecha de proxima accion, estado |
| Regla | id, Nombre, descripcion |

El atributo `estado` de Proxima Accion admite: PENDIENTE, REALIZADA, VENCIDA.

---

## Pendientes


- Definir si `Interaccion --genera-- Estado` debe apuntar ahora a Oportunidad, o eliminarse.
- Borrar aristas sueltas residuales cerca de Usuario y las cajas de cardinalidad flotantes.
- Historial de cambios de estado: hoy la oportunidad guarda sólo el estado actual.
  Si se necesita medir tiempo por etapa, requiere una entidad aparte. No implementar aún.
