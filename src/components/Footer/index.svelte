<script>
  // Nanostores
  import { localeAtom } from "../../store";

  // Locale Mesages
  import esMessages from "../../locales/es.json";
  import enMessages from "../../locales/en.json";

  const messages = {
    en: enMessages.footer,
    es: esMessages.footer,
  };
</script>

<footer id="footer">
  <a
    href="https://github.com/leo10099/portfolio"
    target="_blank"
    rel="noopener noreferer">Porfolio</a
  >
  {messages[$localeAtom].builtWith}
  <a href="https://astro.build" target="_blank" rel="noopener noreferer"
    >Astro</a
  > ❤️. Leandro Hanc, 2022.
</footer>

<style lang="sass">
  #footer
    background-color: var(--grey-900)
    color: var(--grey-500)
    text-align: center
    padding: 2rem

    a
      color: var(--blue-300)
      &:hover
        color: var(--blue-500)
</style>
