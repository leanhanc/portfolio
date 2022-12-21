<script>
  import { localeAtom } from "../../../store";

  // Locale Mesages
  import esMessages from "../../../locales/es.json";
  import enMessages from "../../../locales/en.json";

  const messages = {
    en: enMessages.work,
    es: esMessages.work,
  };
</script>

<aside>
  <small> {messages[$localeAtom].pressCardToFlip}</small>
</aside>

<style lang="sass">
    @import "../../../styles/mixins.sass"
    aside
        width: 300px
        font-size: 1rem
        font-weight: 500
        margin-left: auto
        margin-right: auto
        margin-bottom: 2rem
        @include min-md
            display: none
</style>
