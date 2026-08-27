<script>
	let { productLabel, statusLabel, statusId } = $props();
</script>

<span class="estado-badge" data-status={statusId}>
	<span class="estado-punto" aria-hidden="true"></span>
	{productLabel} · {statusLabel}
</span>

<style>
	.estado-badge {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		width: fit-content;
		padding: 3px 7px;
		border-radius: 4px;
		color: #475467;
		background-color: #f2f4f7;
		font-size: 12px;
		line-height: 1.2;
		white-space: nowrap;
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
</style>
