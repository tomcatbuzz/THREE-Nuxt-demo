<template>
  <div class="wrapper">
    <h1>
      My Work
    </h1>
    <div class="imageWrap">
      <div v-for="n in 6" :key="n">
        <img src="~/assets/laptop.jpg" alt="laptop">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkPage'
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    width: 100vw;
    background-color: black;
  }

  h1 {
    font-size: 5em;
    padding: 20px;
    color: white;
    font-family: 'Montserrat';
    text-transform: uppercase;
  }

  .imageWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  img {
    object-fit: cover;
    height: 70vh;
  }
</style>
