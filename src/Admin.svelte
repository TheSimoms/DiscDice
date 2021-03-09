<script lang="ts">
	import { dice, addDie, resetDice } from './store'
	import AdminDie from './AdminDie.svelte'
</script>

<style>
	.dice {
		display: grid;
	}
</style>

<div class="dice">
	{#each $dice as die}
		<AdminDie {die} />
	{/each}
</div>

<button on:click="{addDie}">Add die</button>
<button on:click="{resetDice}">Reset dice</button>
