<script lang="ts">
	import { dice, addDie, resetDice } from './store'
	import AdminDie from './AdminDie.svelte'
</script>

<style>
	.heading {
		padding-left: 0.25em;
	}

	.dice {
		display: grid;
	}
</style>

<div class="dice">
	{#each $dice as die, index}
		<h3 class="heading">Die {index + 1}</h3>
		<AdminDie {die} />
	{/each}
</div>

<button on:click="{addDie}">Add die</button>
<button on:click="{resetDice}">Reset dice</button>
