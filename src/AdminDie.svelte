<script lang="ts">
    import { _ } from 'svelte-i18n';

    import Fa from 'svelte-fa'
    import { faTimes } from '@fortawesome/free-solid-svg-icons'
	import { dice, dieUpdated } from './store'
    import type { Die } from './Die'

    export let die: Die;

	function addSide() {
		die.addSide();

		dieUpdated();
	}

    function removeSide(index: number) {
        die.removeSide(index);

        dieUpdated();
    }

    function removeDie() {
        dice.update(dice => dice.filter(item => item !== die));
    }
</script>

<style>
    #die {
        margin-bottom: 1em;
    }

    #sides input[type="text"] {
        float: left;
        width: 85%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    #sides button {
        float: left;
        width: 2em;
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    #sides::after {
        content: '';
        clear: both;
        display: table;
    }

    #buttons button {
        width: 7em;
    }
</style>

<div id="die">
    <div id="sides">
        {#each die.sides as side, index}
            <input type="text" bind:value={side} on:change={dieUpdated}>
            <button on:click={() => removeSide(index)}>
                <Fa icon={faTimes} />
            </button>
        {/each}
    </div>

    <div id="buttons">
        <button on:click={addSide}>{$_('die.admin.add_side')}</button>
        <button on:click={removeDie}>{$_('die.admin.remove_die')}</button>
    </div>
</div>
