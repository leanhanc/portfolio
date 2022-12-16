<script lang="ts">
  // Assets
  export let projectName = "";
  export let projectImage: ImageMetadata["src"];
  export let projectTechnologies: string[] = [];
  export let projectYear = 0;
  export let projectType = "";
  export let projectLink = "";
</script>

<article class="flip-card">
  <section class="flip-card-front">
    <div
      class="flip-card-front-image-container"
      style="background-image: linear-gradient(to right bottom, rgb(41, 152, 255), rgb(86, 67, 250), rgb(219, 84, 97)), url({projectImage});"
    />
    <header class="flip-card-front-title">
      <h3 class="flip-card-front-title-text">{projectName}</h3>
    </header>
    <ul>
      {#each projectTechnologies as tech}
        <li>
          {tech}
        </li>
      {/each}
    </ul>
    <footer class="flip-card-front-footer">
      <small>VER MÁS </small>
      <img src={"chevron-right.svg"} alt="Ver más sobre este proyecto" />
    </footer>
  </section>
  <section class="flip-card-back">
    <h3 class="flip-card-back-title">{projectYear}</h3>
    <p class="flip-card-back-subtitle">{projectType}</p>
    <p class="flip-card-back-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repudiandae
      illum tempore alias suscipit reprehenderit soluta fugiat ab tenetur odio.
    </p>
    <a
      href={projectLink}
      rel="noopoener noreferer"
      target="_blank"
      class="flip-card-back-cta"
    >
      OPEN
    </a>
  </section>
</article>

<style lang="sass">
    @import "../../../styles/mixins.sass"

    .flip-card
        width: 300px
        height: 500px
        @include min-md
            width: 350px
            height: 520px
        border-radius: 4px
        perspective: 150rem
        position: relative
        margin: auto



        &:hover
            .flip-card-front
                transform: rotateY(-180deg)
            .flip-card-back
                transform: rotateY(0)

        &-front, &-back
          width: 300px
          height: 500px
          @include min-md
            width: 350px
            height: 520px
            backface-visibility: hidden
            -webkit-backface-visibility: hidden
            background: #fff
            border-radius: 4px
            box-shadow: var(--shadow-3)
            overflow: hidden
            position: absolute
            transition: all 0.5s ease-in-out

        &-front
            opacity: 0.75
            &-image-container
                height: 230px
                background-blend-mode: screen
                background-position: center
                background-size: cover
                position: relative
                clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)
            &-title
                font-size: 24px
                font-weight: 300
                text-transform: uppercase
                color: #fff
                position: absolute
                top: 125px
                right: 20px
                text-align: right
                width: 76%
                z-index: 20

                &-text
                    display: inline
                    font-weight: 300
                    font-family: 'Lato'
                    font-size: 24px
                    line-height: 2
                    padding: 12px 17px
                    box-decoration-break: clone
                    -webkit-box-decoration-break: clone
                    background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85))

            &-footer
                display: flex
                align-items: center
                position: absolute
                left: 50%
                bottom: 16px
                transform: translateX(-50%)
                small
                   flex: 1
                   color: var(--purple-500)
                img
                  width: 16px
                  height: 16px
                  margin-left: 4px
                @include min-md
                  display: none

        ul
            height: 280px
            padding: 16px
            display: flex
            align-items: center
            justify-content: center
            flex-direction: column
            list-style: none
            text-align: center
            li 
                text-align: center
                font-size: 14px
                padding: 18px

                &:not(:last-child)
                    border-bottom: 1px solid var(--grey-500)
                    width: 50%

        &-back
            display: flex
            align-items: center
            flex-direction: column
            background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85))
            transform: rotateY(-180deg)
            position: relative

            > *
              max-width: 80%
              margin: auto

            &-title
              color: var(--grey-500)
              font-size: 3rem
              text-transform: uppercase
              text-align: center
              letter-spacing: 1.1px
              font-weight: bold
            &-subtitle
              color: var(--grey-500)
              font-size: 1.5rem
              text-transform: uppercase
              margin-top: 1rem
            &-description
              color: #fff
              margin-top: 2rem
            &-cta
              background-color: var(--grey-500)
              box-shadow: none
              color: #fff
              margin: 3rem auto
              text-align: center

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
                padding: 16px 32px
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
                  content: ''
                  display: block
                  height: 100%
                  width: 100%
                  border-radius: 32px
                  position: absolute
                  top: 0
                  border: 2px solid var(--grey-500)

                  left: 0
                  z-index: -1
                  transition: all 0.4s

</style>
