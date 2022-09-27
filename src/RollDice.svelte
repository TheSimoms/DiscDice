<script lang="ts">
    import { _ } from 'svelte-i18n';
    import Button, { Label } from '@smui/button';
    import List from '@smui/list';

    import { Dice } from './Dice';
    import type { Roll } from './Roll';

    import RollResult from './RollResult.svelte';

    let latestRoll: Roll | undefined = undefined;
    let rollHistory: Roll[] = [];

    function rollDice(): void {
        if (latestRoll) {
            rollHistory = [...rollHistory, latestRoll];
        }

        latestRoll = Dice.roll();
    }
</script>

<section>
    <Button on:click={rollDice} variant="raised">
        <Label>{$_('die.roll.roll_dice')}</Label>
    </Button>

    {#if latestRoll}
        <List twoLine>
            <RollResult roll={latestRoll} />
        </List>
    {/if}

    {#if rollHistory.length}
        <h3>{$_('die.roll.previous_rolls')}:</h3>

        <List twoLine>
            {#each [...rollHistory].reverse().slice(0, 69) as roll}
                <RollResult {roll} />
            {/each}
        </List>
    {/if}
</section>
