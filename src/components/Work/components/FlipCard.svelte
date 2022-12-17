<script lang="ts">
  import { localeAtom } from "../../../store";

  // Components
  import FlipCardButton from "./FlipCardButton.svelte";

  export let projectName = { es: "", en: "" };
  export let projectDescription = { es: "", en: "" };
  export let projectImage: ImageMetadata["src"];
  export let projectTechnologies: string[] = [];
  export let projectYear = 0;
  export let projectType = "";
  export let projectLink = "";
  export let projectRepoUrl = "";

  // Locale Mesages
  import esMessages from "../../../locales/es.json";
  import enMessages from "../../../locales/en.json";

  const messages = {
    en: enMessages.work,
    es: esMessages.work,
  };
</script>

<article class="flip-card">
  <section class="flip-card-front">
    <div
      class="flip-card-front-image-container"
      style="background-image: linear-gradient(to right bottom, rgb(41, 152, 255), rgb(86, 67, 250), rgb(219, 84, 97)), url({projectImage});"
    />
    <header class="flip-card-front-title">
      <h3 class="flip-card-front-title-text">{projectName[$localeAtom]}</h3>
    </header>
    <ul>
      {#each projectTechnologies as tech}
        <li>
          {tech}
        </li>
      {/each}
    </ul>
    <footer class="flip-card-front-footer">
      <small> {messages[$localeAtom].seeMore}</small>
      <img src={"chevron-right.svg"} alt={messages[$localeAtom].seeMoreAlt} />
    </footer>
  </section>
  <section class="flip-card-back">
    <dl>
      <dt class="flip-card-back-subtitle">
        {messages[$localeAtom].projectType}
      </dt>
      <dd class="flip-card-back-title">{projectType}</dd>
      <dt class="flip-card-back-subtitle">
        {messages[$localeAtom].lastUpdate}
      </dt>
      <dd class="flip-card-back-title">{projectYear}</dd>
    </dl>
    <p class="flip-card-back-description">
      {projectDescription[$localeAtom]}
    </p>
    <FlipCardButton
      text={{
        es: esMessages.work.openProject,
        en: enMessages.work.openProject,
      }}
      link={projectLink}
      variant="fill"
    />
    <FlipCardButton
      text={{ es: esMessages.work.openRepo, en: enMessages.work.openRepo }}
      link={projectRepoUrl}
      variant="outline"
    />
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
        margin-left: auto
        margin-right: auto


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
            text-align: center

            > *
              max-width: 90%


            &-title
              color: var(--grey-500)
              font-size: 2rem
              text-transform: uppercase
              text-align: center
              letter-spacing: 1.1px
              font-weight: bold
            &-subtitle
              color: var(--grey-600)
              font-size: 1rem
              letter-spacing: 1px
              margin-top: 1rem
              text-transform: uppercase
              &:first-of-type
                padding-top: 1rem
            &-description
              color: var(--grey-500)
              font-size: 14px
              margin-top: 2rem

</style>
