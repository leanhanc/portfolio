<script lang="ts">
  import { localeAtom } from "../../../store";

  // Locale Mesages
  import esMessages from "../../../locales/es.json";
  import enMessages from "../../../locales/en.json";

  const messages = {
    en: enMessages.header,
    es: esMessages.header,
  };
</script>

<h1 class="headline title">Leandro Hanc</h1>
<p class="headline subtitle">{messages[$localeAtom].subtitle}</p>

<style lang="sass">
  @import "../../../styles/mixins.sass"

  .headline
    
      cursor: default
      position: relative
      text-align: center
      transform: translateY(-1rem)
      text-shadow: var(--shadow-1)
      position: relative

      /* TITLE */
      &.title
        color: var(--grey-500)
        font-size: 5rem
        font-family: 'Allison', cursive
        font-weight: normal
        text-align: center

        @include min-md
          line-height: 1
          font-size: 5.5rem

      /* SUBTITLE */
      &.subtitle
        color: var(--blue300)
        font-size: 1rem
        font-weight: 500
        letter-spacing: 8px
        max-width: 85%
        line-height: 1.7
        text-shadow: var(--shadow-1)
        text-transform: uppercase
        text-align: center

        @include min-md
          margin-top: 1.3rem
          font-size: 1.3rem

</style>
