# Requisitos 

## Detallaremos los requisitos tanto funcionales como  o funcionales del proyecto, los que no s permitira construir las historias de usarios correspondientes para la realizacion del sistema


### Requisitos Funcionales

#### Gestion de prospectos
**RF-01**  Ficha unificada del prospecto 
    El sistema debe permitir visualizar una ficha unificada de cada prospecto, concentrando en un único lugar la información necesaria para comprender su situación comercial y su historial relacionado.
 * Datos principales
    - identificación
    - datos de contacto
    - origen/canal
    - responsable
    - estado actual
    - información comercial relevante
    - Estado comercial
    - etapa actual
    - fecha de ingreso a la etapa
    - responsable 
    - oportunidad
    - próxima acción
  * Historial de interacciones
    - contactos
    - llamadas
    - mails
    - chats
    - asesoramientos
    - interacciones con el Bot
    - intentos de conversión
    - asistencia a webinars
    - comunicaciones automáticas
    - otras actividades 


- RF-01.1. Origen/canal
El sistema debe registrar y mostrar el origen o canal de entrada del prospecto.
- RF-01.2. Estado actual
El sistema debe registrar y mostrar el estado comercial actual del prospecto.
- RF-01.3. Estado proveniente de SOS Contador
El sistema debe obtener y mostrar, desde SOS Contador, la información necesaria para representar el estado de cliente/pago y la eventual baja del prospecto.
Preguntas abiertas asociadas: PA-01
- RF-01.4. Acceso a Freshdesk
La ficha unificada debe permitir acceder al historial de soporte/tickets de Freshdesk asociado al prospecto.



**RF-02** Consulta de historial de interacciones

Al ingresar a la ficha de un prospecto, el sistema debe permitir visualizar todas sus interacciones registradas en orden cronológico.
• La consulta debe permitir reconstruir qué ocurrió con el prospecto a lo largo del tiempo.
• El historial debe incluir tanto interacciones realizadas por personas como interacciones registradas automáticamente por BOT, cuando corresponda.

**RF-03** Editar Caracteristicas del prospectos
    Debido a algun cambio en su estado o error de tiepo en sus datos a lo mejor debe ser triado 





**RF-04**. Registro de interacciones
El sistema debe permitir registrar cada interacción asociada a un prospecto.
• Fecha de la interacción.
• Responsable.
• Resumen de lo sucedido.
• Canal o tipo de interacción.
• Proxima accion
• Fecha de proxima accion



**RF-05** Se debera generar alertas a los Usuarios de actividades pendientes a realizar,como proxima accion vencida de uno o N prospectos, o proxima a vencerse, (a lo mejor si un cliente se da de baja, y lo podemos saber desde SOS, poder notificarlo tambien)


### Requisitos de integracion

**RI-01** Se debe poder integrar con el sistema de SOS, para poder obtener la tabla de usuarios-la tabla de prospectos

**RI-02** El sistema debe estar abierto a la integracion de cualquier API externo 