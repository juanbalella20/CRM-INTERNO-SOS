<script>
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app-shell">
	<Sidebar />
	<main class="page-content">
		<Header />
		{@render children()}
	</main>
</div>

<style>
	:global(html) {
		min-width: 320px;
		background-color: #ffffff;
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
		min-height: 100vh;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		color: #172033;
	}

	.app-shell {
		min-height: 100vh;
		display: flex;
	}

	.page-content {
		min-width: 0;
		flex: 1;
	}
</style>
