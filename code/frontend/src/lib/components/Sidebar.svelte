<script>
	import { page } from '$app/state';

	const prospectsPath = '/';
	const settingsPath = '/configuracion';
</script>

<aside class="sidebar">
	<div class="brand">
		<img src="/images/sos-contador-logo.png" alt="Logo de SOS Contador" />
		<div class="brand-name" aria-hidden="true">
			<span class="brand-title">SOS</span>
			<span class="brand-subtitle">CONTADOR</span>
		</div>
	</div>

	<nav class="navigation" aria-label="Navegación principal">
		<a
			href={prospectsPath}
			class:active={page.url.pathname === prospectsPath}
			aria-current={page.url.pathname === prospectsPath ? 'page' : undefined}
		>
			<img src="/images/prospect-management-icon.svg" alt="" aria-hidden="true" />
			<span class="navigation-label">Gestión de prospectos</span>
		</a>

		<a
			href={settingsPath}
			class:active={page.url.pathname === settingsPath}
			aria-current={page.url.pathname === settingsPath ? 'page' : undefined}
		>
			<img src="/images/settings-icon.svg" alt="" aria-hidden="true" />
			<span class="navigation-label">Configuración</span>
		</a>
	</nav>

	<section class="user" aria-label="Usuario actual">
		<span class="avatar" aria-hidden="true">FL</span>
		<span class="user-details">
			<span class="user-name">Felipe López</span>
			<span class="user-role">Asesor Comercial</span>
		</span>
		<img class="chevron" src="/images/chevron-icon.svg" alt="" aria-hidden="true" />
	</section>
</aside>

<style>
	.sidebar {
		box-sizing: border-box;
		width: 240px;
		height: 100svh;
		padding: 24px 20px 20px;
		position: sticky;
		top: 0;
		display: flex;
		flex: 0 0 240px;
		flex-direction: column;
		color: #ffffff;
		background-color: #a30c11;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 14px;
		min-height: 56px;
	}

	.brand img {
		width: 65px;
		height: 65x;
		object-fit: contain;
	}

	.brand-name {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.brand-title {
		font-size: 22px;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.brand-subtitle {
		margin-top: 6px;
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.02em;
	}

	.navigation {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 36px;
	}

	.navigation a {
		box-sizing: border-box;
		min-height: 56px;
		padding: 11px 15px;
		display: flex;
		align-items: center;
		gap: 13px;
		border-radius: 9px;
		color: rgba(255, 255, 255, 0.88);
		font-size: 16px;
		font-weight: 400;
		line-height: 1.15;
		text-decoration: none;
		transition:
			background-color 150ms ease,
			color 150ms ease;
	}

	.navigation a:hover {
		background-color: rgba(126, 5, 10, 0.5);
		color: #ffffff;
	}

	.navigation a:focus-visible {
		outline: 2px solid #ffffff;
		outline-offset: 2px;
	}

	.navigation a.active {
		background-color: #85090e;
		color: #ffffff;
		font-weight: 600;
	}

	.navigation img {
		width: 22px;
		height: 22px;
		flex: 0 0 22px;
		opacity: 0.88;
		transition: opacity 150ms ease;
	}

	.navigation a:hover img,
	.navigation a.active img {
		opacity: 1;
	}

	.navigation-label {
		display: block;
		max-width: 120px;
	}

	.user {
		min-height: 64px;
		margin-top: auto;
		padding-top: 18px;
		display: flex;
		align-items: center;
		gap: 10px;
		border-top: 1px solid rgba(255, 255, 255, 0.18);
	}

	.avatar {
		width: 38px;
		height: 38px;
		display: grid;
		flex: 0 0 38px;
		place-items: center;
		border-radius: 50%;
		background-color: #ffffff;
		color: #a30c11;
		font-size: 13px;
		font-weight: 700;
	}

	.user-details {
		min-width: 0;
		display: flex;
		flex: 1;
		flex-direction: column;
		line-height: 1.2;
	}

	.user-name {
		font-size: 12px;
		font-weight: 600;
	}

	.user-role {
		margin-top: 3px;
		color: rgba(255, 255, 255, 0.76);
		font-size: 9px;
	}

	.chevron {
		width: 16px;
		height: 16px;
		flex: 0 0 16px;
		transform: rotate(90deg);
	}
</style>
