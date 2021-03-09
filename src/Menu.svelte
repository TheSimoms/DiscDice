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

	.open {
		visibility: visible;
		opacity: 1;
		transition: visibility 0s, opacity 0.5s linear;
	}
	.closed {
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.1s linear;
		height: 0px;
	}
</style>

<section>
	<button id="menu-button" on:click="{toggleMenu}">
		<Fa icon={faBars} />
	</button>

	<div  class={open ? 'open' : 'closed'}>
		<Admin />
	</div>
</section>
