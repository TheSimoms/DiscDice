<script lang="ts">
    import type { Die } from "./Die"
	import { dice, dieUpdated } from "./store"
    import Fa from 'svelte-fa'
    import { faTimes } from '@fortawesome/free-solid-svg-icons'

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

<div>
    {#each die.sides as side, index}
        <input bind:value={side} on:change={dieUpdated}>
        <button on:click={() => removeSide(index)}>
            <Fa icon={faTimes} />
        </button>
    {/each}
</div>

<button on:click={addSide}>Add side</button>
<button on:click={removeDie}>Remove die</button>
