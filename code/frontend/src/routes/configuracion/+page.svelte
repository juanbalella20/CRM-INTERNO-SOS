<script>
	import { products } from '$lib/data/prospect-filters.js';
	import { statusActions } from '$lib/data/status-actions.js';
</script>

<section class="configuracion">
	<section class="panel configuracion-productos" aria-labelledby="productos-title">
		<div class="panel-encabezado">
			<div>
				<h2 id="productos-title">Productos</h2>
				<p>Define todos los productos y servicios disponibles en el CRM</p>
			</div>
			<button class="boton-nuevo" type="button">+ Nuevo producto</button>
		</div>

		<ul class="lista-productos">
			{#each products as product}
				<li>
					<span class="producto-nombre">
						<span class="producto-icono" aria-hidden="true">◇</span>
						{product.label}
					</span>
					<button class="boton-icono" type="button" aria-label={`Eliminar ${product.label}`}>
						<img src="/images/trash-icon.svg" alt="" />
					</button>
				</li>
			{/each}
		</ul>
	</section>

	<section class="panel configuracion-estados" aria-labelledby="estados-title">
		<div class="panel-encabezado">
			<div>
				<h2 id="estados-title">Estados y próximas acciones</h2>
				<p>Configura el flujo de conversión secuencial para tus prospectos</p>
			</div>
			<button class="boton-nuevo" type="button">+ Nuevo estado</button>
		</div>

		<div class="estados-grid">
			{#each statusActions as statusAction, index}
				<details class="estado" open={index < 2}>
					<summary>
						<span class="estado-titulo">
							<span class="estado-orden">{index + 1}°</span>
							{statusAction.label}
						</span>
						<span class="estado-acciones" aria-hidden="true">
							<span class="chevron">⌄</span>
							<img src="/images/trash-icon.svg" alt="" />
						</span>
					</summary>

					<div class="estado-contenido">
						<p class="acciones-titulo">Próximas acciones requeridas</p>
						<ul class="lista-acciones">
							{#each statusAction.nextActions as nextAction}
								<li>
									<span>
										<span class="accion-icono" aria-hidden="true">▷</span>
										{nextAction}
									</span>
									<button class="boton-icono" type="button" aria-label={`Eliminar ${nextAction}`}>
										<img src="/images/trash-icon.svg" alt="" />
									</button>
								</li>
							{/each}
						</ul>
						<button class="boton-agregar" type="button">+ Agregar próxima acción</button>
					</div>
				</details>
			{/each}
		</div>
	</section>
</section>

<style>
	.configuracion {
		max-width: 1240px;
		padding: 22px 20px 36px;
		display: grid;
		gap: 16px;
		background: #f8fafc;
	}

	.panel {
		padding: 16px;
		border: 1px solid #e4e7ec;
		border-radius: 9px;
		background: #fff;
	}

	.panel-encabezado {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		color: #1d2939;
		font-size: 16px;
		font-weight: 700;
	}

	.panel-encabezado p {
		margin-top: 3px;
		color: #667085;
		font-size: 13px;
	}

	.boton-nuevo,
	.boton-agregar {
		border: 0;
		border-radius: 6px;
		font: inherit;
		font-weight: 600;
		cursor: pointer;
	}

	.boton-nuevo {
		height: 30px;
		padding: 0 12px;
		color: #fff;
		background: #b20b12;
		font-size: 13px;
		white-space: nowrap;
	}

	.boton-nuevo:hover {
		background: #93090f;
	}

	.lista-productos,
	.lista-acciones {
		margin: 14px 0 0;
		padding: 0;
		list-style: none;
	}

	.lista-productos li {
		min-height: 38px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #eaecf0;
		color: #344054;
		font-size: 14px;
	}

	.producto-nombre,
	.estado-titulo,
	.lista-acciones li > span {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.producto-icono,
	.accion-icono {
		color: #d0111b;
		font-size: 16px;
		line-height: 1;
	}

	.boton-icono {
		width: 28px;
		height: 28px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 0;
		border-radius: 5px;
		background: transparent;
		cursor: pointer;
	}

	.boton-icono:hover {
		background: #fff1f1;
	}

	.boton-icono img,
	.estado-acciones img {
		width: 15px;
		height: 15px;
	}

	.estados-grid {
		margin-top: 14px;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		align-items: start;
		gap: 10px 20px;
	}

	.estado {
		border: 1px solid #e4e7ec;
		border-radius: 7px;
		background: #fff;
	}

	.estado[open] {
		background: #f8fafc;
	}

	.estado summary {
		min-height: 40px;
		padding: 0 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		color: #344054;
		font-size: 13px;
		font-weight: 700;
		cursor: pointer;
		list-style: none;
	}

	.estado summary::-webkit-details-marker {
		display: none;
	}

	.estado-orden {
		padding: 3px 6px;
		border-radius: 5px;
		color: #475467;
		background: #eaecf0;
		font-size: 12px;
	}

	.estado-acciones {
		display: inline-flex;
		align-items: center;
		gap: 9px;
	}

	.chevron {
		color: #667085;
		font-size: 16px;
		line-height: 1;
	}

	.estado[open] .chevron {
		transform: rotate(180deg);
	}

	.estado-contenido {
		padding: 12px 10px 10px;
		border-top: 1px solid #e4e7ec;
	}

	.acciones-titulo {
		color: #667085;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
	}

	.lista-acciones {
		margin-top: 9px;
		display: grid;
		gap: 6px;
	}

	.lista-acciones li {
		min-height: 28px;
		padding: 0 5px 0 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #eaecf0;
		border-radius: 5px;
		background: #fff;
		color: #344054;
		font-size: 12px;
	}

	.lista-acciones .boton-icono {
		width: 23px;
		height: 23px;
	}

	.lista-acciones .boton-icono img {
		width: 13px;
		height: 13px;
	}

	.boton-agregar {
		margin-top: 10px;
		padding: 5px 9px;
		border: 1px solid #e4e7ec;
		color: #b20b12;
		background: #fff;
		font-size: 12px;
	}

	.boton-agregar:hover {
		background: #fff5f5;
	}

	button:focus-visible,
	summary:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 2px;
	}

	@media (max-width: 850px) {
		.estados-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.configuracion {
			padding: 16px;
		}

		.panel-encabezado {
			flex-direction: column;
		}

		.estados-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
