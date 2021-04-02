<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { dice } from './store'

    let latestRoll: string[] = [];
    let rollHistory: string[][] = [];

    function rollDice(): void {
        if (latestRoll.length) {
            rollHistory = [...rollHistory, latestRoll];
        }

        latestRoll = $dice.map(die => die.roll());
    }
</script>

<section>
    <button on:click={rollDice}>{$_('die.roll.roll_dice')}</button>

    <ul>
        {#each latestRoll as roll}
            <li>{roll}</li>
        {/each}
    </ul>

    {#if rollHistory.length}
        {$_('die.roll.previous_rolls')}:
    {/if}
    <ul>
        {#each [...rollHistory].reverse().slice(0, 69) as rolls}
            <li>{rolls.join(', ')}</li>
        {/each}
    </ul>
</section>
