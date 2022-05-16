<template>
  <div>
    <!-- <canvas ref="canvas2" /> -->
    <div class="wrapper">
      <h1>
        About
      </h1>
      <div class="button--container">
        <button class="about--btn">
          Dude
        </button>
        <span class="title">Dude Button</span>
      </div>
      <!-- <div class="card">
        <form class="form" @submit.prevent="sendMessage">
          <input v-model="contactName" class="input" type="text" placeholder="Name">
          <input v-model="contactEmail" class="input" type="email" placeholder="Email">
          <input v-model="contactSubject" class="input" type="text" placeholder="Subject">
          <textarea v-model="contactMessage" class="input" rows="5" placeholder="Message" />
          <button type="submit" class="send">
            Send
          </button>
        </form>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: grey;
  }
  h1 {
    color: white;
  }

  .button--container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    height: 200px;
  }

  button {
    color: white;
    background: blue;
    width: 130px;
    height: 20px;
  }

  button:hover {
    color: blue;
    background: white;
  }

  .title {
    width: 100px;
    position: absolute;
    top: 20px;
    color: green;
    border-radius: 25px;
    border: 2px solid red;
  }
</style>
