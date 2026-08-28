<script>
	let { productLabel, statusLabel, statusColor } = $props();
</script>

<span class="estado-badge">
	<span class="estado-punto" style:background-color={statusColor} aria-hidden="true"></span>
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

</style>
