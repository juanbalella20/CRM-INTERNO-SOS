<svelte:head>
	<title>Gestión de prospectos | SOS Contador</title>
</svelte:head>

<script>
	import { products, statuses } from '$lib/data/prospect-filters.js';
	import { prospects } from '$lib/data/prospects.js';

	/** @type {string[]} */
	let selectedStatuses = $state([]);

	/** @param {string} statusId */
	function toggleStatus(statusId) {
		selectedStatuses = selectedStatuses.includes(statusId)
			? selectedStatuses.filter((id) => id !== statusId)
			: [...selectedStatuses, statusId];
	}

	/** @param {string} productId */
	function getProductLabel(productId) {
		return products.find((product) => product.id === productId)?.label;
	}

	/** @param {string} statusId */
	function getStatusLabel(statusId) {
		return statuses.find((status) => status.id === statusId)?.label;
	}
</script>

<section class="pagina-prospectos">
	<form class="buscador">
		<img class="buscador-icono" src="/images/search-icon.svg" alt="" aria-hidden="true" />
		<input
			type="search"
			aria-label="Buscar prospectos"
			placeholder="Buscar por nombre, correo o ID..."
		/>
	</form>

	<div class="filtros">
		<div class="filtros-productos">
			<label for="producto">Productos</label>
			<select id="producto">
				<option>Todos los productos</option>
			</select>
		</div>

		<div class="filtros-estado">
			<p>Filtrar por estado</p>

			<div class="estados">
				{#each statuses as status}
					<button
						type="button"
						class:seleccionado={selectedStatuses.includes(status.id)}
						data-status={status.id}
						aria-pressed={selectedStatuses.includes(status.id)}
						onclick={() => toggleStatus(status.id)}
					>
						<span class="estado-punto" aria-hidden="true"></span>
						{status.label}
					</button>
				{/each}
			</div>
		</div>

	</div>

	<div class="tabla-prospectos">
		<table>
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Nombre</th>
					<th scope="col">Correo</th>
					<th scope="col">Oportunidades</th>
					<th scope="col">Origen</th>
					<th scope="col">Exclusión comercial</th>
					<th scope="col">Última interacción</th>
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>
				{#each prospects as prospect (prospect.id)}
					<tr>
						<td>{prospect.id}</td>
						<td>{prospect.name}</td>
						<td>{prospect.email}</td>
						<td>
							<ul>
								{#each prospect.opportunities as opportunity}
									<li>
										{getProductLabel(opportunity.productId)} —
										{getStatusLabel(opportunity.statusId)}
									</li>
								{/each}
							</ul>
						</td>
						<td>{prospect.origin}</td>
						<td>{prospect.isCommerciallyExcluded ? 'Excluido' : '—'}</td>
						<td>
							{prospect.lastInteraction.date}
							<br />
							{prospect.lastInteraction.channel}
						</td>
						<td>
							<button type="button" aria-label={`Ver detalle de ${prospect.name}`}>
								Ver detalle
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

	</div>

</section>

<style>
	.pagina-prospectos {
		padding: 24px 26px;
		background-color: #f8fafc;
	}

	.buscador {
		box-sizing: border-box;
		min-height: 40px;
		padding: 0 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		border: 1px solid #e4e7ec;
		border-radius: 6px;
		background-color: #ffffff;
	}

	.buscador:focus-within {
		border-color: #a30c11;
		box-shadow: 0 0 0 3px rgba(163, 12, 17, 0.12);
	}

	.buscador-icono {
		width: 18px;
		height: 18px;
		flex: 0 0 18px;
	}

	.buscador input {
		width: 100%;
		padding: 0;
		border: 0;
		outline: 0;
		color: #344054;
		background: transparent;
		font: inherit;
		font-size: 14px;
	}

	.buscador input::placeholder {
		color: #98a2b3;
	}

	.filtros {
		margin-top: 16px;
		display: flex;
		align-items: flex-end;
		gap: 24px;
	}

	.filtros-productos {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.filtros-productos label {
		color: #475467;
		font-size: 12px;
		font-weight: 600;
	}

	.filtros-productos select {
		box-sizing: border-box;
		width: 174px;
		height: 36px;
		padding: 0 12px;
		border: 1px solid #d0d5dd;
		border-radius: 6px;
		color: #344054;
		background-color: #ffffff;
		font: inherit;
		font-size: 13px;
		cursor: pointer;
	}

	.filtros-productos select:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 2px;
	}

	.filtros-estado {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.filtros-estado p {
		margin: 0;
		color: #475467;
		font-size: 12px;
		font-weight: 600;
	}

	.estados {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.estados button {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		height: 36px;
		padding: 0 12px;
		border: 1px solid #d0d5dd;
		border-radius: 6px;
		color: #344054;
		background-color: #ffffff;
		font: inherit;
		font-size: 13px;
		cursor: pointer;
	}

	.estados button:hover {
		background-color: #f9fafb;
	}

	.estados button.seleccionado {
		border-color: #98a2b3;
		background-color: #eaecf0;
	}

	.estados button:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 2px;
	}

	.estado-punto {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background-color: #667085;
	}

	[data-status='nuevo-prospecto'] .estado-punto {
		background-color: #2563eb;
	}

	[data-status='contactado'] .estado-punto {
		background-color: #0891b2;
	}

	[data-status='interesado'] .estado-punto {
		background-color: #7c3aed;
	}

	[data-status='propuesta-enviada'] .estado-punto {
		background-color: #d97706;
	}

	[data-status='cerrada'] .estado-punto {
		background-color: #059669;
	}

	@media (max-width: 640px) {
		.pagina-prospectos {
			padding: 16px;
		}

		.filtros-productos select {
			width: 100%;
		}

		.filtros {
			align-items: stretch;
			flex-direction: column;
			gap: 16px;
		}
	}
</style>
