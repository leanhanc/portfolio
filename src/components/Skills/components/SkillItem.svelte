<script lang="ts">
  // Components
  import Separator from "../../Separator.svelte";

  export let name = "";
  export let index = 0;

  export function buildImagePath(name: string) {
    if (name.split(" ").length > 0) {
      return `skills/${name.split(" ")[0].toLowerCase()}.svg`;
    } else {
      return `skills/${name.toLowerCase()}.svg`;
    }
  }
</script>

<li class="skill-item" data-aos="zoom-in" data-aos-delay={100 * index}>
  <figure>
    <img src={buildImagePath(name)} alt={name} title={name} />
    <figcaption>{name}</figcaption>
  </figure>
  <Separator />
</li>

<style lang="sass">
    .skill-item
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 2rem
        figure
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            figcaption
                margin-top: 1rem
                color: white
                font-weight: 500
            img
                width: 64px
                height: auto
                aspect-ratio: 1 / 1
</style>
