<script lang="ts">
  import { localeAtom } from "../../../store";

  export let text = { es: "", en: "" };
  export let link = "";
  export let variant: "fill" | "outline" = "outline";
</script>

<a
  href={link}
  rel="noopoener noreferer"
  target="_blank"
  class={`flip-card-button ${variant === "outline" && "outline"}`}
>
  {text[$localeAtom]}
</a>

<style lang="sass">
    .flip-card-button
        background-color: var(--grey-500)
        box-shadow: none
        color: #fff
        text-align: center
        margin-top: 1rem
        &:first-of-type
            margin-top: 4rem

        &,
        &:link,
        &:visited 
            width: 50%
            border-radius: 32px
            border: none
            color: var(--purple-500)
            cursor: pointer
            display: block
            font-weight: 500
            letter-spacing: 4px
            padding: 16px 24px
            position: relative
            text-decoration: none
            text-shadow: none
            text-transform: uppercase
            transition: all 0.2s

            &:hover 
                transform: translateY(-3px)

                &::after 
                    transform: scaleX(1.4) scaleY(1.6)
                    opacity: 0

                &:active,
                &:focus 
                  outline: none
                  transform: translateY(-1px)


            &::after 
                height: 100%
                width: 100%
                border-radius: 32px
                border: 2px solid var(--grey-500)
                content: ''
                transition: all 0.4s
                display: block
                position: absolute
                top: 0
                left: 0
                z-index: -1

    .outline
        background-color: transparent
        color: var(--grey-500) !important
        &:hover
            &::after 
                transform: scaleX(1.4) scaleY(1.6)
                opacity: 0

                &:active,
                &:focus 
                    outline: none

            &:link,
            &:visited
                border: 2px solid var(--grey-500) !important

</style>
