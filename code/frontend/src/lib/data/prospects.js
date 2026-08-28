export const prospects = [
	{
		id: 128,
		name: 'Juan Pérez',
		email: 'juan.perez@email.com',
		opportunities: [
			{ productId: 'sos-contador', statusId: 'cerrada' },
			{ productId: 'sos-sueldos', statusId: 'contactado' }
		],
		origin: 'Web',
		isCommerciallyExcluded: false,
		lastInteraction: { date: '18/08/2026', channel: 'WhatsApp' },
		nextAction: { title: 'Ofrecer el software de sueldos', dueDate: '20/08/2026' },
		interactionSummary:
			'Consultó por las funcionalidades de SOS Contador y solicitó información sobre la integración con sus procesos administrativos.'
	},
	{
		id: 154,
		name: 'Ana López',
		email: 'ana.lopez@email.com',
		opportunities: [{ productId: 'sos-sueldos', statusId: 'nuevo-prospecto' }],
		origin: 'Web',
		isCommerciallyExcluded: true,
		lastInteraction: { date: '15/08/2026', channel: 'Mail' },
		nextAction: { title: 'Revisar la exclusión comercial', dueDate: '22/08/2026' },
		interactionSummary:
			'Solicitó asistencia para organizar el trabajo con comprobantes y facturas de ARCA. Se la excluyó temporalmente de acciones comerciales hasta definir el acompañamiento adecuado.'
	},
	{
		id: 211,
		name: 'Pedro Díaz',
		email: 'pedro.diaz@email.com',
		opportunities: [
			{ productId: 'sos-contador', statusId: 'interesado' },
			{ productId: 'sos-sueldos', statusId: 'interesado' }
		],
		origin: 'Llamadas',
		isCommerciallyExcluded: false,
		lastInteraction: { date: '16/08/2026', channel: 'Llamada' },
		nextAction: { title: 'Enviar propuesta comercial', dueDate: '31/08/2026' },
		interactionSummary:
			'Manifestó interés en centralizar la gestión comercial y pidió una propuesta con los alcances de SOS CRM.'
	},
	{
		id: 278,
		name: 'María Gómez',
		email: 'maria.gomez@email.com',
		opportunities: [{ productId: 'sos-contador', statusId: 'cerrada' }],
		origin: 'Webinar',
		isCommerciallyExcluded: false,
		lastInteraction: { date: '12/08/2026', channel: 'Webinar' },
		nextAction: { title: 'Coordinar una demostración', dueDate: '29/08/2026' },
		interactionSummary:
			'Participó del webinar de gestión de estudios y solicitó una demostración enfocada en el seguimiento de clientes.'
	},
	{
		id: 342,
		name: 'Lucía Fernández',
		email: 'lucia.fernandez@email.com',
		opportunities: [{ productId: 'sos-contador', statusId: 'propuesta-enviada' }],
		origin: 'Bot Web',
		isCommerciallyExcluded: false,
		lastInteraction: { date: '10/08/2026', channel: 'Bot Web' },
		nextAction: { title: 'Confirmar interés en la propuesta', dueDate: '23/08/2026' },
		interactionSummary:
			'Ingresó una consulta desde el sitio web sobre planes y precios. Quedó pendiente confirmar qué solución se ajusta a su necesidad.'
	}
];
