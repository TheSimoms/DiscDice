<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { fade } from 'svelte/transition';
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

<div in:fade="{{delay: 0, duration: 300}}">
	<div class="dice">
		{#each $dice as die, index}
			<h3 class="heading">{$_('die.admin.die')} {index + 1}</h3>
			<AdminDie {die} />
		{/each}
	</div>

	<button on:click="{addDie}">{$_('die.admin.add_die')}</button>
	<button on:click="{resetDice}">{$_('die.admin.reset_dice')}</button>
</div>
