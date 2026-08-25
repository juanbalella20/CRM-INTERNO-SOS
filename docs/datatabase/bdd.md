# Base de datos — CRM Interno SOS

## Introducción

Esta base de datos respalda el CRM interno de SOS. Su objetivo es registrar los
prospectos y las empresas con las que trabaja la organización, las personas
usuarias del sistema y cada interacción comercial.

El núcleo comercial parte del producto: cada interacción trata sobre un producto,
el producto tiene un estado actual y ese estado determina las próximas acciones
predeterminadas.

> **Convención de cardinalidades.** En este documento se usa la lectura acordada
> para el diagrama. Por ejemplo, `A — (1,N) — relación — (1,1) — B` se lee como:
> cada **A** tiene exactamente un **B** y cada **B** se relaciona con uno o muchos
> **A**.

## Entidades

### 1. Empresa

Representa a una organización con la que se trabaja. Agrupa prospectos, usuarios
y los estados disponibles en su contexto.

**Atributos**

- `id`: identificador único.
- `nombre`: nombre de la empresa.

### 2. Prospecto

Representa a una persona o entidad potencialmente interesada en los productos.
Las interacciones comerciales se registran sobre el prospecto.

**Atributos**

- `id`: identificador único.
- `cuit_cuil`: identificación fiscal.
- `nombre_completo`: nombre completo del prospecto.
- `correo`: correo de contacto.
- `telefono`: teléfono de contacto.
- `origen`: procedencia del prospecto.

### 3. Usuario

Representa a una persona que utiliza el CRM y que puede ser responsable de
interacciones.

**Atributos**

- `id`: identificador único.
- `nombre`: nombre de la persona usuaria.
- `correo`: correo de acceso o contacto.
- `contraseña`: credencial de acceso.

### 4. Interacción

Representa un contacto o evento comercial: una llamada, correo, conversación con
el bot u otro canal. Conserva el resumen y la fecha del evento.

**Atributos**

- `id`: identificador único.
- `fecha`: fecha de la interacción.
- `canal`: medio por el que ocurrió.
- `resumen_interaccion`: resumen de lo conversado o realizado.

### 5. Producto

Representa un producto de software ofrecido o tratado en el CRM.

**Atributos**

- `id`: identificador único.
- `nombre`: nombre del producto.

### 6. Estado

Representa el estado comercial actual que tiene un producto. También funciona
como la definición que determina las próximas acciones predeterminadas.

**Atributos**

- `id`: identificador único.
- `nombre`: nombre del estado.

### 7. Próxima acción

Representa una tarea de seguimiento que debe realizarse a partir de un estado.
Puede estar pendiente, realizada o vencida.

**Atributos**

- `id`: identificador único.
- `nombre`: descripción corta de la acción.
- `fecha_proxima_accion`: fecha prevista para ejecutarla.
- `estado`: estado operativo de la acción: `PENDIENTE`, `REALIZADA` o `VENCIDA`.

### 8. Regla

Representa una regla que puede generar una próxima acción de forma automática.

**Atributos**

- `id`: identificador único.
- `nombre`: nombre de la regla.
- `descripcion`: explicación de su comportamiento.

### 9. Tag

Representa una etiqueta para clasificar usuarios. La tabla existe en la base de
datos, aunque su uso en la aplicación queda pendiente.

**Atributos**

- `id`: identificador único.
- `descripcion_funcion`: descripción o función de la etiqueta.

## Relaciones

### Empresa y prospecto — `TrabajaCon`

Una empresa trabaja con uno o muchos prospectos. Cada prospecto pertenece a una
sola empresa.

### Empresa y usuario — `Tiene`

Una empresa tiene uno o muchos usuarios. Cada usuario pertenece a una sola
empresa.

### Empresa y estado — `Crea`

Una empresa crea cero o muchos estados. Cada estado corresponde a una sola
empresa.

### Prospecto e interacción — `Participa`

Un prospecto participa en una o muchas interacciones. Cada interacción corresponde
a un solo prospecto.

### Usuario e interacción — `Responsabiliza`

Un usuario puede ser responsable de cero o muchas interacciones. Cada interacción
tiene exactamente un usuario responsable.

### Interacción y producto — `Es sobre`

Cada interacción es sobre exactamente un producto. Un producto puede aparecer en
cero o muchas interacciones.

### Producto y estado — `Tiene`

Cada producto tiene exactamente un estado actual. Un estado puede estar asociado
a cero o muchos productos.

### Estado y próxima acción — `Tiene`

Un estado tiene una o muchas próximas acciones predeterminadas. Cada próxima
acción pertenece a un solo estado. Esta relación materializa la regla principal
del modelo: **el estado define las acciones de seguimiento**.

### Regla y próxima acción — `Genera`

Una regla puede generar cero o muchas próximas acciones. Una próxima acción puede
haber sido generada por cero o una regla; cuando no hay regla asociada, la acción
no fue creada automáticamente por una regla.

### Estado e interacción — `Genera`

El diagrama mantiene una relación `Genera` entre Estado e Interacción: una
interacción puede estar asociada a un estado y un estado puede relacionarse con
cero o una interacción. Su significado funcional debe confirmarse antes de
implementarlo como una restricción de base de datos.

### Estado y estado — `Anterior a`

`Estado` se relaciona consigo mismo para representar el orden del pipeline. Un
estado puede tener, como máximo, un estado anterior.

### Usuario y tag — `Tiene`

Un usuario tiene cero o muchas etiquetas y una etiqueta puede asociarse con uno o
muchos usuarios.

## Relación pendiente de completar en el diagrama

El rombo `Participa` situado junto a `Interacción` tiene un extremo sin entidad
conectada. No se documenta como una relación de negocio hasta definir su segunda
entidad y sus cardinalidades.
