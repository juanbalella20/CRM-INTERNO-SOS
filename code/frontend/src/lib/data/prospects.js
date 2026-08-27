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
		lastInteraction: { date: '18/08/2026', channel: 'WhatsApp' }
	},
	{
		id: 154,
		name: 'Ana López',
		email: 'ana.lopez@email.com',
		opportunities: [{ productId: 'sos-sueldos', statusId: 'nuevo-prospecto' }],
		origin: 'Web',
		isCommerciallyExcluded: true,
		lastInteraction: { date: '15/08/2026', channel: 'Mail' }
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
		lastInteraction: { date: '16/08/2026', channel: 'Llamada' }
	},
	{
		id: 278,
		name: 'María Gómez',
		email: 'maria.gomez@email.com',
		opportunities: [{ productId: 'sos-contador', statusId: 'cerrada' }],
		origin: 'Webinar',
		isCommerciallyExcluded: false,
		lastInteraction: { date: '12/08/2026', channel: 'Webinar' }
	},
	{
		id: 342,
		name: 'Lucía Fernández',
		email: 'lucia.fernandez@email.com',
		opportunities: [{ productId: 'sos-contador', statusId: 'propuesta-enviada' }],
		origin: 'Bot Web',
		isCommerciallyExcluded: false,
		lastInteraction: { date: '10/08/2026', channel: 'Bot Web' }
	}
];
