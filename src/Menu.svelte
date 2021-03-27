<script lang="ts">
    import Fa from 'svelte-fa'
    import { faBars } from '@fortawesome/free-solid-svg-icons'
	import Admin from './Admin.svelte'

	let open = false;

	function toggleMenu() {
		open = !open;
	}
</script>

<style>
	#menu-button {
		float: right;
		width: 2.5em;
	}
</style>

<section>
	<button id="menu-button" on:click="{toggleMenu}">
		<Fa icon={faBars} />
	</button>

	{#if open}
		<Admin />
	{/if}
</section>
