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

<a class="cta" href="mailto:leandrohanc@outlook.com.ar">
  {messages[$localeAtom].cta}
</a>

<style lang="sass">
  @import "../../../styles/mixins.sass"
  
  /* CTA BUTTON */
  a.cta,
  a.cta:visited
    background-image: linear-gradient(to right, var(--blue500), var(--red500), var(--purple500))
    border-radius: 3rem
    border: none
    color: white
    cursor: pointer
    font-family: 'Open Sans'
    font-weight: 600
    letter-spacing: 4px
    margin-top: 2rem
    text-decoration: none
    text-shadow: none
    text-transform: uppercase
    transition: all 0.4s
    padding: 1rem
    position: relative

  a.cta:hover
    transform: translateY(-3px)

  a.cta:hover::after
     transform: scaleX(1.4) scaleY(1.6)
     opacity: 0

  a.cta:active,
  a.cta:focus
     outline: none
     transform: translateY(-1px)
     box-shadow: 0 0.5rem 1rem rgba(black, 0.2)

  a.cta::after
     content: ''
     display: block
     height: 100%
     width: 100%
     border-radius: 4rem
     z-index: -1
     position: absolute
     top: 0
     background-image: linear-gradient(to right, var(--blue500), var(--red500), var(--purple500))
     left: 0
     transition: all 0.4s

  @include min-md
      a.cta,
      a.cta:visited,
      a.cta:active
        margin-top: 4rem
        font-size: 1rem
        padding: 1rem 3rem
        width: fit-content
</style>
