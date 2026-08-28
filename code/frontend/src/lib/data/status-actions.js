export const statusActions = [
	{
		id: 'nuevo-prospecto',
		label: 'Nuevo prospecto',
		nextActions: ['Realizar primer contacto', 'Agendar llamada']
	},
	{
		id: 'contactado',
		label: 'Contactado',
		nextActions: ['Volver a llamar', 'Enviar información', 'Enviar mensaje de seguimiento']
	},
	{
		id: 'interesado',
		label: 'Interesado',
		nextActions: []
	},
	{
		id: 'propuesta-enviada',
		label: 'Propuesta enviada',
		nextActions: []
	},
	{
		id: 'cerrado',
		label: 'Cerrado',
		nextActions: []
	}
];
