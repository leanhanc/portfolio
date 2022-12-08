<script>
  // Nanostores
  import { localeAtom, toggleLocale } from "../store";
</script>

<menu id="locale-switch" class="main-container">
  <li
    class={$localeAtom === "es" ? "locale-item-active" : "locale-item"}
    on:click={toggleLocale}
  >
    es
  </li>
  <span> | </span>
  <li
    class={$localeAtom === "en" ? "locale-item-active" : "locale-item"}
    on:click={toggleLocale}
  >
    en
  </li>
</menu>

<style lang="sass">
    @import "../styles/mixins"
  
    #locale-switch
        display: flex
        justify-content: flex-end
        font-size: 1.2rem
        transform: translateY(-4rem)
      
        
        span
          margin: auto 0.5rem

        .locale-item
            cursor: pointer
            &-active
                background: linear-gradient(to right, var(--blue500), var(--red500), var(--purple500))
                transition: 300ms all ease
                -webkit-text-fill-color: transparent
                background-clip: text
                -webkit-background-clip: text
                font-weight: 400
                pointer-events: none
</style>
