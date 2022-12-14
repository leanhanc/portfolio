<script>
  import { localeAtom } from "../../../store";

  // Locale Mesages
  import esMessages from "../../../locales/es.json";
  import enMessages from "../../../locales/en.json";

  const messages = {
    en: enMessages.about,
    es: esMessages.about,
  };
</script>

<p class="bio-paragraph">
  {messages[$localeAtom].bio}
</p>

<style lang="sass">
  @import "../../../styles/mixins.sass"
  
  .bio-paragraph
    text-shadow: var(--shadow-2)
    font-size: 1.1rem
    margin-top: 2rem
    letter-spacing: 0.5px
    line-height: 1.75

    @include min-md
        max-width: 75%
</style>
