# HU-1  contactarme con un prospecto
_Como_ Usuario de Rol [RolDeUsuario]

_Quiero_ visualizar la ficha de un prospecto (nombre, origen estado) e
inspeccionar interacciones anteriores, viendo la proxima accion sugerida

_Para_ decidir si corresponde contactarlo y hacerlo con contexto suficiente

Escenario: el sistema recomienda no contactar
Dado un prospecto cuya próxima acción sugerida no implica un contacto, cuando el usuario consulta su ficha, entonces el sistema debe mostrar claramente dicha sugerencia para que el usuario pueda decidir no contactarlo.

Escenario: prospecto excluido de acciones comerciales
Dado un prospecto que cumple una regla de exclusión comercial, cuando el usuario consulta su ficha, entonces el sistema debe indicar que no corresponde realizar acciones comerciales sobre él.

Caso triste: No me puedo contactar con el por cierta caracteristica

Criterios de aceptacion:
- Freshdesk abilita los tickets que abrio el prospecto
- Sos contador nos briinda la info del cliente
- El bot agenda las interacciones automaticas 
- El humano escribe interacciones 
 

Requisitos aparecidos:
- RF-01   (Ficha unificada)
- RF-02   (Consulta del historial)
- RF-05   Generación automática de sugerencias
- PO-01   Consulta previa de la ficha
- RN-03   Exclusiones comerciales
- RI-01   SOS Contador
- RI-02   Freshdesk
- RI-03   Bot
