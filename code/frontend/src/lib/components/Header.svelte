<script>
    import { page } from '$app/state';

    /** @type {Record<string, string>} */ 
    const titles = {
        '/': 'Gestión de prospectos',
        '/configuracion': 'Configuración'
    };

    let title = $derived(titles[page.url.pathname] ?? 'SOS Contador');

</script>

<!-- header
├── h1                        → título de la página
└── div.header-actions         → agrupa acciones del lado derecho
    ├── button.notifications   → campana
    │   └── img                → ícono SVG
    ├── div.separator          → línea vertical decorativa
    └── div.user-info          → bloque del usuario
        ├── div.avatar         → “FL”
        └── div.user-details
            ├── span.name     → Felipe López
            └── span.role     → Asesor Comercial -->

<header class="header">
    <h1>{title}</h1>

    <div class="header-actions">
        <button class="notification-button" type="button" aria-label="Ver notificaciones">
            <img src="/images/notification-bell-icon.svg" alt="" />
        </button>

        <div class="separator" aria-hidden="true"></div>

        <section class="user" aria-label="Usuario actual">
			<span class="avatar" aria-hidden="true">FL</span>
			<span class="user-details">
				<span class="user-name">Felipe López</span>
				<span class="user-role">Asesor Comercial</span>
			</span>
		</section>
    </div>
</header>

<style> 
	.header {
		box-sizing: border-box;
		min-height: 76px;
		padding: 0 26px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		background-color: #fefefe;
		border-bottom: 1px solid #edf0f4;
	}

	h1 {
		margin: 0;
		color: #172033;
		font-size: 20px;
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: -0.01em;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.notification-button {
		width: 36px;
		height: 36px;
		padding: 0;
		display: grid;
		place-items: center;
		border: 0;
		border-radius: 50%;
		background-color: #f4f6f8;
		cursor: pointer;
	}

	.notification-button:hover {
		background-color: #e9edf2;
	}

	.notification-button:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 2px;
	}

	.notification-button img {
		width: 18px;
		height: 18px;
	}

	.separator {
		width: 1px;
		height: 34px;
		background-color: #e5e7eb;
	}

	.user {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.avatar {
		width: 38px;
		height: 38px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		background-color: #a30c11;
		color: #ffffff;
		font-size: 13px;
		font-weight: 700;
	}

	.user-details {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}

	.user-name {
		color: #344054;
		font-size: 14px;
		font-weight: 700;
	}

	.user-role {
		margin-top: 2px;
		color: #667085;
		font-size: 11px;
	}

</style>
