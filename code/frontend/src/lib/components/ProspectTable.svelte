<script>
	import { products, statuses } from '$lib/data/prospect-filters.js';
	import EstadoBadge from './EstadoBadge.svelte';

	let { prospects, onSelectProspect, sortField, sortDirection, onSort } = $props();

	/** @param {string} productId */
	function getProductLabel(productId) {
		return products.find((product) => product.id === productId)?.label;
	}

	/** @param {string} statusId */
	function getStatusLabel(statusId) {
		return statuses.find((status) => status.id === statusId)?.label;
	}

	/** @param {string} statusId */
	function getStatusColor(statusId) {
		return statuses.find((status) => status.id === statusId)?.color;
	}
</script>

<div class="tabla-prospectos">
	<table>
		<thead>
			<tr>
				<th scope="col" aria-sort={sortField === 'id' ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}><button class:activo={sortField === 'id'} class="sort-button" type="button" aria-label="Ordenar por ID" onclick={() => onSort('id')}>ID <span class="sort-icon" aria-hidden="true">{sortField === 'id' ? (sortDirection === 'asc' ? '↑' : '↓') : '↑↓'}</span></button></th>
				<th scope="col" aria-sort={sortField === 'name' ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}><button class:activo={sortField === 'name'} class="sort-button" type="button" aria-label="Ordenar por nombre" onclick={() => onSort('name')}>Nombre <span class="sort-icon" aria-hidden="true">{sortField === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : '↑↓'}</span></button></th>
				<th scope="col">Correo</th>
				<th scope="col">Oportunidades</th>
				<th scope="col">Origen</th>
				<th scope="col">Exclusión comercial</th>
				<th scope="col" aria-sort={sortField === 'lastInteraction' ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}><button class:activo={sortField === 'lastInteraction'} class="sort-button" type="button" aria-label="Ordenar por última interacción" onclick={() => onSort('lastInteraction')}>Última interacción <span class="sort-icon" aria-hidden="true">{sortField === 'lastInteraction' ? (sortDirection === 'asc' ? '↑' : '↓') : '↑↓'}</span></button></th>
				<th scope="col">Acciones</th>
			</tr>
		</thead>
		<tbody>
			{#each prospects as prospect (prospect.id)}
				<tr>
					<td class="prospect-id">{prospect.id}</td>
					<td class="prospect-name">{prospect.name}</td>
					<td>{prospect.email}</td>
					<td>
						<ul class="opportunity-list">
							{#each prospect.opportunities as opportunity}
								<li>
									<EstadoBadge
										productLabel={getProductLabel(opportunity.productId)}
										statusLabel={getStatusLabel(opportunity.statusId)}
										statusColor={getStatusColor(opportunity.statusId)}
									/>
								</li>
							{/each}
						</ul>
					</td>
					<td>{prospect.origin}</td>
					<td>
						<span class:commercially-excluded={prospect.isCommerciallyExcluded}>
							{prospect.isCommerciallyExcluded ? 'Excluido' : '—'}
						</span>
					</td>
					<td class="last-interaction">
						<span>{prospect.lastInteraction.date}</span>
						<span>{prospect.lastInteraction.channel}</span>
					</td>
					<td>
						<button
							class="detail-button"
							type="button"
							aria-label={`Ver detalle de ${prospect.name}`}
							onclick={() => onSelectProspect(prospect)}
						>
							›
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.tabla-prospectos {
		overflow-x: auto;
		border: 1px solid #eaecf0;
		border-radius: 10px;
		background-color: #ffffff;
	}

	table {
		width: 100%;
		min-width: 1000px;
		border-collapse: collapse;
	}

	th {
		padding: 14px 12px;
		border-bottom: 1px solid #eaecf0;
		color: #667085;
		background-color: #f9fafb;
		font-size: 12px;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
	}

	.sort-button {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 0;
		border: 0;
		color: inherit;
		background: transparent;
		font: inherit;
		font-weight: inherit;
		cursor: pointer;
	}

	.sort-button:hover {
		color: #344054;
	}

	.sort-button.activo {
		color: #a30c11;
	}

	.sort-button.activo .sort-icon {
		color: currentColor;
	}

	.sort-button:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 3px;
		border-radius: 2px;
	}

	.sort-icon {
		color: #98a2b3;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: -3px;
	}

	td {
		padding: 14px 12px;
		border-bottom: 1px solid #eaecf0;
		color: #475467;
		font-size: 13px;
		vertical-align: middle;
	}

	tbody tr:last-child td {
		border-bottom: 0;
	}

	tbody tr:hover {
		background-color: #fcfcfd;
	}

	.prospect-id,
	.prospect-name {
		color: #344054;
		font-weight: 600;
	}

	.opportunity-list {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.commercially-excluded {
		display: inline-flex;
		padding: 3px 7px;
		border: 1px solid #f04438;
		border-radius: 4px;
		color: #b42318;
		background-color: #fef3f2;
		font-size: 11px;
		font-weight: 600;
	}

	.last-interaction {
		display: flex;
		flex-direction: column;
		gap: 2px;
		white-space: nowrap;
	}

	.last-interaction span:first-child {
		color: #344054;
		font-weight: 600;
	}

	.last-interaction span:last-child {
		color: #98a2b3;
		font-size: 11px;
	}

	.detail-button {
		width: 24px;
		height: 24px;
		border: 0;
		border-radius: 4px;
		color: #667085;
		background: transparent;
		font-size: 20px;
		line-height: 1;
		cursor: pointer;
	}

	.detail-button:hover {
		color: #344054;
		background-color: #f2f4f7;
	}

	.detail-button:focus-visible {
		outline: 2px solid #a30c11;
		outline-offset: 2px;
	}
</style>
