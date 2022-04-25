<template>
  <div class="wrapper">
    <h1>
      My Work
    </h1>
    <div class="imageWrap">
      <div v-for="n in 6" :key="n">
        <img src="~/assets/laptop.jpg" alt="laptop">
        <p>DUDE Project</p>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
export default {
  name: 'WorkPage',
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
    padding: 20px;
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
    opacity: 0;
    transform: translateY(30px);
  }

  img {
    object-fit: cover;
    height: 70vh;
    justify-content: space-evenly;
    margin: 1em;
  }

  p {
    color: white;
    text-transform: uppercase;
    margin-left: 1em;
  }
</style>
