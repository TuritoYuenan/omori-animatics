<script lang="ts">
	import type { Animatic } from '../animatics';

	let {
		data,
		site = 'https://youtube.com'
	}: { data: Animatic; site?: string } = $props();
</script>

<a href={site + data.url} target="_blank" rel="noreferrer noopener">
	<img src={data.thumbnail} alt="Video thumbnail" width="336" height="188" />
	<section>
		<p><small>{data.uploadedDate}</small> - by {data.uploaderName}</p>
		<p><strong>{data.title}</strong></p>
	</section>
</a>

<style>
	/* Card */
	a {
		background: black;
		border: var(--border);
		transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	/* Highlight upon hovering */
	a:hover {
		color: silver;
	}

	/* Responsive thumbnail image */
	img {
		width: 100%;
		height: auto;
	}

	/* Metadata */
	section {
		padding: 0.5rem;
		padding-top: 0;
	}
</style>
