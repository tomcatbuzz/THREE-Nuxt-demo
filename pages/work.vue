<template>
  <div class="wrapper">
    <h1>
      My Work
    </h1>
    <div class="imageWrap">
      <div v-for="project in projects" :key="project">
        <img :src="project.image.url" alt="laptop">
        <p>{{ project.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import laptopImg from '~/assets/laptop.jpg'
import circuitImg from '~/assets/circuit.jpg'
import codeImg from '~/assets/code.jpg'
// import lightsImg from '~/assets/lights.jpeg'
export default {
  name: 'WorkPage',
  data () {
    return {
      projects: [
        {
          image: {
            url: laptopImg
          },
          title: 'DUDE Project'
        },
        {
          image: {
            url: circuitImg
          },
          title: 'Circuit Project'
        },
        {
          image: {
            url: codeImg
          },
          title: 'Code Project'
        }
        // {
        //   image: {
        //     url: lightsImg
        //   },
        //   title: 'Light Project'
        // }
      ]
    }
  },
  mounted () {
    gsap.to('.wrapper', {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.in'
    })
    gsap.to('h1', {
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      y: 0,
      ease: 'power2.in'
    })
    gsap.to('.imageWrap', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'power2.in'
    })
  }
}
</script>

<style scoped>
  .wrapper {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0;
  }

  h1 {
    position: relative;
    font-size: 5em;
    margin-left: 0.6em;
    color: white;
    font-family: 'Montserrat';
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(30px);
  }

  .imageWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    opacity: 0;
    transform: translateY(30px);
    /* height: 70vh; */
  }

  img {
    object-fit: cover;
    /* justify-content: space-evenly; */
    margin: 1em;
    /* margin-left: 0; */
    height: 70vh;
    width: 100%;
  }

  p {
    color: white;
    text-transform: uppercase;
    margin-left: 1em;
  }
</style>
