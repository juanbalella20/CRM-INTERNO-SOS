<svelte:head>
	<title>Gestión de prospectos | SOS Contador</title>
</svelte:head>

<script>
	import ProspectTable from '$lib/components/ProspectTable.svelte';
	import { products, statuses } from '$lib/data/prospect-filters.js';
	import { prospects } from '$lib/data/prospects.js';
	import Detalle from '$lib/components/Detalle.svelte';
	import ProspectForm from '$lib/components/ProspectForm.svelte';

	/** @type {string[]} */
	let selectedStatuses = $state([]);
	/** @type {string} */
	let selectedProduct = $state('');
	/** @type {string} */
	let searchQuery = $state('');
	/** @type {'id' | 'name' | 'lastInteraction' | 'nextAction' | null} */
	let sortField = $state(null);
	/** @type {'asc' | 'desc'} */
	let sortDirection = $state('asc');

	/** @param {string} statusId */
	function toggleStatus(statusId) {
		selectedStatuses = selectedStatuses.includes(statusId)
			? selectedStatuses.filter((id) => id !== statusId)
			: [...selectedStatuses, statusId];
	}

	/** @param {(typeof prospects)[number]} prospect */
	function matchesFilters(prospect) {
		const opportunities = selectedProduct
			? prospect.opportunities.filter((o) => o.productId === selectedProduct)
			: prospect.opportunities;

		if (selectedProduct && opportunities.length === 0) return false;
		if (selectedStatuses.length > 0 && !opportunities.some((o) => selectedStatuses.includes(o.statusId))) {
			return false;
		}

		if (searchQuery.trim()) {
			const query = searchQuery.trim().toLowerCase();
			const matchesSearch =
				String(prospect.id).toLowerCase().includes(query) ||
				prospect.name.toLowerCase().includes(query) ||
				prospect.email.toLowerCase().includes(query);
			if (!matchesSearch) return false;
		}

		return true;
	}

	/** @param {string} date */
	function getDateTimestamp(date) {
		const [day, month, year] = date.split('/').map(Number);
		return new Date(year, month - 1, day).getTime();
	}

	/** @param {'id' | 'name' | 'lastInteraction' | 'nextAction'} field */
	function sortBy(field) {
		if (sortField === field) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
			return;
		}

		sortField = field;
		sortDirection = 'asc';
	}

	let filteredProspects = $derived(prospects.filter(matchesFilters));

	let orderedProspects = $derived.by(() => {
		if (!sortField) return filteredProspects;

		const direction = sortDirection === 'asc' ? 1 : -1;
		return [...filteredProspects].sort((first, second) => {
			if (sortField === 'id' || sortField === 'name') {
				return String(first[sortField]).localeCompare(String(second[sortField]), 'es', { numeric: true }) * direction;
			}

			const firstDate = sortField === 'lastInteraction'
				? getDateTimestamp(first.lastInteraction.date)
				: getDateTimestamp(first.nextAction.dueDate);
			const secondDate = sortField === 'lastInteraction'
				? getDateTimestamp(second.lastInteraction.date)
				: getDateTimestamp(second.nextAction.dueDate);
			return (firstDate - secondDate) * direction;
		});
	});
	/** @type {object | null} */
	let prospectoSeleccionado= $state(null)

	/** @param {object} prospect */
	function  SeleccionarProspecto(prospect){
		prospectoSeleccionado= prospect;
	}

	function cerrarDetalle(){
		prospectoSeleccionado= null;
	}

</script>

<section class="pagina-prospectos">
	<div class="contenido-principal">
		<form class="buscador" onsubmit={(e) => e.preventDefault()}>
			<img class="buscador-icono" src="/images/search-icon.svg" alt="" aria-hidden="true" />
			<input
				type="search"
				aria-label="Buscar prospectos"
				placeholder="Buscar por nombre, correo o ID..."
				bind:value={searchQuery}
			/>
		</form>

		<div class="filtros">
			<div class="filtros-productos">
				<label for="producto">Productos</label>
				<select id="producto" bind:value={selectedProduct}>
					<option value="">Todos los productos</option>
					{#each products as product}
						<option value={product.id}>{product.label}</option>
					{/each}
				</select>
			</div>

			<div class="filtros-estado">
				<p>Filtrar por estado</p>

				<div class="estados">
					{#each statuses as status}
						<button
							type="button"
							class:seleccionado={selectedStatuses.includes(status.id)}
							aria-pressed={selectedStatuses.includes(status.id)}
							onclick={() => toggleStatus(status.id)}
						>
							<span class="estado-punto" style:background-color={status.color} aria-hidden="true"></span>
							{status.label}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<button id="agregar-prospecto" type="button" aria-label="Agregar prospecto " >+</button>

		<div class="tabla-contenedor">
			<ProspectTable
				prospects={orderedProspects}
				onSelectProspect={SeleccionarProspecto}
				{sortField}
				{sortDirection}
				onSort={sortBy}
			/>
		</div>
	</div>


	{#if prospectoSeleccionado}
		<Detalle prospect={prospectoSeleccionado} onClose={cerrarDetalle} />
	{/if}

</section>

<style>
	.pagina-prospectos {
		min-height: calc(100vh - 76px);
		display: flex;
		align-items: stretch;
		background-color: #f8fafc;
	}

	.contenido-principal {
		box-sizing: border-box;
		flex: 1;
		min-width: 0;
		padding: 24px 26px;
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
		font-size: 15px;
	}

	.buscador input::placeholder {
		color: #98a2b3;
	}

	.filtros {
		margin-top: 16px;
		display: flex;
		align-items: flex-start;
		gap: 24px;
	}

	.filtros-productos {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.filtros-productos label {
		color: #475467;
		font-size: 13px;
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
		font-size: 14px;
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
		font-size: 13px;
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
		font-size: 14px;
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

	.tabla-contenedor {
		margin-top: 20px;
	}


	@media (max-width: 640px) {
		.pagina-prospectos {
			flex-direction: column;
		}

		.contenido-principal {
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
