<script lang="ts">
	let {
		state,
		errorMSG = 'no error'
	}: { state: 'loading' | 'error'; errorMSG?: string } = $props();
</script>

<div>
	{#if state == 'loading'}
		<h1>Loading...</h1>
		<p>Getting data from Piped API</p>
	{:else if state == 'error'}
		<h1>Crashed!!!</h1>
		<p>Error: {errorMSG}</p>
	{/if}
</div>

<style>
	div {
		padding: 1rem;
		background: black;
		display: grid;
		place-items: center;
	}
</style>
