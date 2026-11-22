import App from './App.svelte';
import './app.css';
import { mount } from 'svelte';

const app = mount(App, {
	target: document.body
});

export default app;
