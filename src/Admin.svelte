<script lang="ts">
	import AdminDie from "./AdminDie.svelte"
	import { dice, addDie, resetDice } from "./store"

	let open = false;

	function toggleMenu() {
		open = !open;
	}
</script>

<style>
	.dice {
		display: inline-grid;
	}

	.open {
		visibility: visible;
		opacity: 1;
		transition: visibility 0s, opacity 1s linear;
	}
	.closed {
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 1s linear;
		height: 0px;
	}
</style>

<section class={open ? 'open' : 'closed'}>
	<div class="dice">
		{#each $dice as die}
			<AdminDie {die} />
		{/each}
	</div>

	<button on:click="{addDie}">Add die</button>
	<button on:click="{resetDice}">Reset dice</button>
</section>

<button on:click="{toggleMenu}">{open ? 'Hide' : 'Show'} menu</button>
