import { defineConfig } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	base: process.env.BASE_PATH ?? '/',
	plugins: [
		svelte({
			preprocess: vitePreprocess(),
		})
	],
	server: {
		host: true
	},
});
