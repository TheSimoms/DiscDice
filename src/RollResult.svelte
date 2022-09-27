<script lang="ts">
    import { _ } from 'svelte-i18n';

    import {Item, Text, PrimaryText, SecondaryText} from '@smui/list';

    import type { Roll } from './Roll'

    export let roll: Roll;
</script>

<Item>
    <Text>
        <PrimaryText>{$_('die.result.technique')}: {roll.technique}</PrimaryText>
        <SecondaryText>{$_('die.result.disc')}: {roll.disc}</SecondaryText>
    </Text>
</Item>
