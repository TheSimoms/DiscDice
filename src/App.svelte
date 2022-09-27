<script lang="ts">
    import { init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

    import en from '../public/lang/en.json';
    import no from '../public/lang/no.json';

    addMessages('en-UK', en);
    addMessages('nb', no);
    addMessages('nn', no);
    addMessages('no', no);
    addMessages('nb-NO', no);
    addMessages('nn-NO', no);

    init({
        fallbackLocale: 'en-UK',
        initialLocale: getLocaleFromNavigator(),
    });

    import Navbar from './Navbar.svelte'
    import RollDice from './RollDice.svelte'
</script>

<Navbar />
<RollDice />
