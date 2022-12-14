<script lang="ts">
  export let text = "";
</script>

<header class="section-header">
  <h2 class="background-text">{text}</h2>
</header>

<style lang="sass">
    .section-header
        width: 100%
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 0
        opacity: 0.1
        text-align: center
        pointer-events: none
        .background-text
            color: var(--grey-800)
            font-family: Lato
            font-size: 35vw
            font-weight: 700
            opacity: 1
</style>
