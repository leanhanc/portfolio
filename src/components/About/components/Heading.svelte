<script>
  import { localeAtom } from "../../../store";

  // Components
  import Separator from "../../Separator.svelte";

  // Locale Mesages
  import esMessages from "../../../locales/es.json";
  import enMessages from "../../../locales/en.json";

  const messages = {
    en: enMessages.about,
    es: esMessages.about,
  };
</script>

<header id="bio-header">
  <Separator />
  <h2 class="title">{messages[$localeAtom].title}</h2>
  <p class="bio-subtitle">
    {messages[$localeAtom].subtitle}
  </p>
</header>

<style lang="sass">
    @import "../../../styles/mixins.sass"

    #bio-header
        background-color: var(--grey-500)
        .title
            font-size: 2rem
            font-weight: 700
            margin-top: 1rem
            letter-spacing: 2px
            text-shadow: var(--shadow-2)
            @include min-md
                font-size: 2.5rem
        .bio-subtitle
            color: var(--grey-700)
            font-size: 1rem
            letter-spacing: 1.2px
            margin-top: 0.5rem
            font-weight: 500
            text-shadow: var(--shadow-2)
            @include min-md
                font-size: 1.2rem

</style>
