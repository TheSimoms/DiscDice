<script lang="ts">
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
    <button on:click={rollDice}>Roll</button>

    <ul>
        {#each latestRoll as roll}
            <li>{roll}</li>
        {/each}
    </ul>

    {#if rollHistory.length}
        Previous rolls:
    {/if}
    <ul>
        {#each [...rollHistory].reverse().slice(0, 69) as rolls}
            <li>{rolls.join(', ')}</li>
        {/each}
    </ul>
</section>
