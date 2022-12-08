<script>
  // Nanostores
  import { localeAtom, toggleLocale } from "../store";
</script>

<menu id="locale-switch">
  <li
    class={$localeAtom === "es" ? "locale-item-active" : "locale-item"}
    on:click={toggleLocale}
  >
    es
  </li>
  |
  <li
    class={$localeAtom === "en" ? "locale-item-active" : "locale-item"}
    on:click={toggleLocale}
  >
    en
  </li>
</menu>

<style lang="sass">
    #locale-switch
        display: flex
        font-size: 1.2rem
        gap: 0.5rem
        position: absolute
        bottom: 2rem
        right: 2rem

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
