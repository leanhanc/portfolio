<script>
  import { localeAtom } from "../../../store";

  // Components
  import Separator from "../../Separator.svelte";
  import BackgroundText from "../../SectionTitleInBackground.svelte";

  // Locale Mesages
  import esMessages from "../../../locales/es.json";
  import enMessages from "../../../locales/en.json";

  const messages = {
    en: enMessages.about,
    es: esMessages.about,
  };
</script>

<div id="bio-header">
  <Separator />
  <p class="title">{messages[$localeAtom].title}</p>
  <p class="bio-subtitle">
    {messages[$localeAtom].subtitle}
  </p>
</div>

<style lang="sass">
    @import "../../../styles/mixins.sass"

    #bio-header
        background-color: var(--grey-500)
        .title
            font-size: 2rem
            font-weight: 700
            margin-top: 2rem
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
            max-width: 80%
            @include min-md
                font-size: 1.2rem

</style>
