<script>
    import EstadoBadge from "./EstadoBadge.svelte";
    import { products, statuses } from '$lib/data/prospect-filters.js';

    let { prospect, onClose } = $props();

	/** @param {string} productId */
	function getProductLabel(productId) {
		return products.find((product) => product.id === productId)?.label;
	}

	/** @param {string} statusId */
	function getStatusLabel(statusId) {
		return statuses.find((status) => status.id === statusId)?.label;
	}

  
</script>

<section class="detalle-prospecto">
    <header class="detalle-encabezado">
        <div>
            <h2>{prospect.name}</h2>
            <p>ID: {prospect.id} · {prospect.email}</p>
        </div>

        <button class="cerrar-detalle" type="button" aria-label="Cerrar detalle"
							onclick={onClose}>×
            
        </button>
    </header>

    <section class="detalle-seccion oportunidades">
        <h3>Oportunidades ({prospect.opportunities.length})</h3>

		<div class="lista-oportunidades">
			{#each prospect.opportunities as opportunity}
				<EstadoBadge
					productLabel={getProductLabel(opportunity.productId)}
					statusLabel={getStatusLabel(opportunity.statusId)}
					statusId={opportunity.statusId}
				/>
            {/each}
		</div>
    </section>

    <section class="detalle-seccion">
        <h3>Origen</h3>
        <p>{prospect.origin}</p>
    </section>

    <section class="proxima-accion">
	    <h3>Próxima acción</h3>
        <p class="accion-titulo">{prospect.nextAction.title}</p>
        <p class="accion-fecha">Fecha sugerida: {prospect.nextAction.dueDate}</p>
    </section>

    <section class="detalle-seccion resumen-interacciones">
        <h3>Resumen de interacciones</h3>
        <p>{prospect.interactionSummary}</p>
    </section>

    <button class="ver-ficha-completa" type="button">Ver ficha completa</button>
</section>

<style>
	.detalle-prospecto {
		box-sizing: border-box;
		width: 320px;
		min-width: 320px;
		min-height: calc(100vh - 76px);
		padding: 18px 14px 16px;
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		border-left: 1px solid #eaecf0;
	}

	.detalle-encabezado {
		padding-bottom: 14px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 12px;
		border-bottom: 1px solid #eaecf0;
	}

	h2,
	h3,
	p {
		margin: 0;
	}

	h2 {
		color: #172033;
		font-size: 20px;
		font-weight: 700;
		line-height: 1.25;
	}

	.detalle-encabezado p {
		margin-top: 4px;
		color: #667085;
		font-size: 12px;
	}

	.cerrar-detalle {
		width: 24px;
		height: 24px;
		padding: 0;
		border: 0;
		border-radius: 50%;
		color: #475467;
		background: transparent;
		font-size: 20px;
		line-height: 1;
		cursor: pointer;
	}

	.cerrar-detalle:hover {
		background-color: #f2f4f7;
	}

	.cerrar-detalle:focus-visible,
	.ver-ficha-completa:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 2px;
	}

	.detalle-seccion,
	.proxima-accion {
		margin-top: 18px;
	}

	h3 {
		color: #667085;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.lista-oportunidades {
		margin-top: 9px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
	}

	.detalle-seccion > p {
		margin-top: 7px;
		color: #344054;
		font-size: 13px;
		line-height: 1.45;
	}

	.proxima-accion {
		padding: 13px;
		border: 1px solid #fecdca;
		border-radius: 9px;
		background-color: #fff6f5;
	}

	.proxima-accion h3 {
		color: #b42318;
	}

	.accion-titulo {
		margin-top: 9px;
		color: #b42318;
		font-size: 13px;
		font-weight: 700;
		line-height: 1.4;
	}

	.accion-fecha {
		margin-top: 4px;
		color: #d92d20;
		font-size: 12px;
	}

	.resumen-interacciones p {
		color: #667085;
	}

	.ver-ficha-completa {
		width: 100%;
		min-height: 40px;
		margin-top: auto;
		padding: 0 14px;
		border: 0;
		border-radius: 6px;
		color: #ffffff;
		background-color: #a30c11;
		font: inherit;
		font-size: 13px;
		font-weight: 700;
		cursor: pointer;
	}

	.ver-ficha-completa:hover {
		background-color: #85090d;
	}

	@media (max-width: 640px) {
		.detalle-prospecto {
			width: 100%;
			min-width: 0;
			min-height: auto;
			border-left: 0;
			border-top: 1px solid #eaecf0;
		}

		.ver-ficha-completa {
			margin-top: 24px;
		}
	}
</style>
