<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		desc,
		children
	}: { title: string; desc: string; children?: Snippet } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
</svelte:head>

<header>
	<h1>{title}</h1>
	<p>{desc}</p>
	{@render children?.()}
</header>

<style>
	header {
		margin: 1rem;
		padding-inline: 1rem;
		padding-block: 2rem;
		background: black;
		text-align: center;
		border: var(--border);
	}
</style>
