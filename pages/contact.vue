<template>
  <div data-color="#2196f3">
    <section id="section">
      <form ref="form" class="wrapper" autocomplete="off" @submit.prevent="sendMessage">
        <h2>
          Contact Us
        </h2>
        <div class="row100">
          <div class="col">
            <label for="first name">First Name</label>
            <div class="inputBox">
              <input v-model="contactFirstName" type="text" required>
              <span class="line" />
            </div>
          </div>
          <div class="col">
            <label for="last name">Last Name</label>
            <div class="inputBox">
              <input v-model="contactLastName" type="text" required>
              <span class="line" />
            </div>
          </div>
        </div>
        <div class="row100">
          <div class="col">
            <label for="email">Email</label>
            <div class="inputBox">
              <input v-model="contactEmail" type="email" required>
              <span class="line" />
            </div>
          </div>
          <div class="col">
            <label for="phone number">Phone Number</label>
            <div class="inputBox">
              <input v-model="contactPhone" type="number" name="" required>
              <span class="line" />
            </div>
          </div>
        </div>
        <div class="row100">
          <div class="col">
            <label for="message">Type your message here...</label>
            <div class="inputBox textarea">
              <textarea v-model="contactMessage" required />
              <span class="line" />
            </div>
          </div>
        </div>
        <div class="row100">
          <div class="col">
            <input class="sendBtn" type="submit" value="send">
          </div>
        </div>
      </form>
      <Toast id="toast" key="toast" />
      <!-- <button id="test">
        TEST
      </button> -->
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import { addDoc } from 'firebase/firestore'
import Toast from '~/components/Toast.vue'
import messageColRef from '~/plugins/firebase'
export default {
  name: 'ContactPage',
  components: {
    Toast
  },
  layout: 'default',
  data () {
    return {
      contactFirstName: null,
      contactLastName: null,
      contactEmail: null,
      contactPhone: null,
      contactMessage: null
    }
  },
  mounted () {
    const vw = window.innerWidth
    gsap.set('#toast', {
      autoAlpha: 0,
      translateX: vw * 1
    })
    // CURRENT comment for TEST blur
    gsap.to('section', {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.in'
    })
    gsap.to('.wrapper h2', {
      opacity: 1,
      duration: 1.6,
      delay: 1,
      y: 0,
      ease: 'circ.in'
    })
    gsap.to('.wrapper .row100 .col label', {
      opacity: 1,
      duration: 1.6,
      delay: 1.2,
      y: 0,
      ease: 'circ.in'
    })

    gsap.to('.sendBtn', {
      opacity: 1,
      duration: 1.6,
      delay: 1.3,
      ease: 'circ.in'
    })

    // Test function for Toast enter
    // document.getElementById('test')
    //   .addEventListener('click', () => {
    //     const tl = gsap.timeline({
    //       paused: true
    //     })
    //     tl.to('#toast', {
    //       autoAlpha: 1,
    //       translateX: vw / '50%',
    //       ease: 'power1.in',
    //       duration: 2
    //     })
    //     tl.to('#toast', {
    //       autoAlpha: 0,
    //       translateX: vw * 1,
    //       ease: 'power1.out',
    //       delay: 3,
    //       duration: 2
    //     })
    //     tl.play()
    //   })
  },
  methods: {
    generateToast () {
      const vw = window.innerWidth
      const tl = gsap.timeline({
        paused: true
      })
      tl.to('#toast', {
        autoAlpha: 1,
        translateX: vw / '50%',
        ease: 'power1.in',
        duration: 2
      })
      tl.to('#toast', {
        autoAlpha: 0,
        translateX: vw * 1,
        ease: 'power1.out',
        delay: 3,
        duration: 2
      })
      tl.play()
    },

    goHome () {
      this.$router.push('/')
    },

    async sendMessage () {
      await addDoc(messageColRef, this.$data)
      await this.$refs.form.reset()
      await this.generateToast()
      await setTimeout(() => {
        this.goHome()
      }, 5300)
    }
  }
}
</script>

<style scoped>
  section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 20px;
  width: 100%;
  /* background: #001923; */
  opacity: 0;
  }

  section:before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#ffeb3b, #e91e63);
    border-radius: 50%;
    transform: translate(-420px, -180px);
  }

  section:after {
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    background: linear-gradient(#2196f3, #83d8ff);
    border-radius: 50%;
    transform: translate(400px, 180px);
  }

  .wrapper {
    position: relative;
    z-index: 1000;
    width: 100%;
    max-width: 1000px;
    padding: 50px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(25px);
    height: 100%;
    /* opacity: 0;
    transform: translateY(30px); */
  }

  .wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    pointer-events: none;
    transform: skewX(-15deg);
  }

  .wrapper h2 {
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    font-size: 3em;
    text-align: center;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(30px);
    will-change: transform;
  }

  .wrapper .row100 {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .wrapper .row100 .col {
    position: relative;
    width: 100%;
    padding: 0 10px;
    margin: 30px 0 20px;
  }

  .wrapper .row100 .col label {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5em;
    letter-spacing: .1em;
    color: #fff;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(30px);
    will-change: transform;
  }

  .wrapper .row100 .col .inputBox {
    position: relative;
    width: 100%;
    height: 40px;
    color: #fff;
  }

  .wrapper .row100 .col .inputBox input,
  .wrapper .row100 .col .inputBox textarea {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    font-size: 1.5em;
    padding: 0 10px;
    z-index: 1;
    color: #000;
  }

  .wrapper .row100 .col .inputBox .line {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: 0.5s;
    border-radius: 2px;
    pointer-events: none;
  }

  .wrapper .row100 .col .inputBox input:focus ~ .line,
  .wrapper .row100 .col .inputBox input:valid ~ .line {
    height: 100%;
  }

  .wrapper .row100 .col .inputBox textarea {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px 0;
  }

  .wrapper .row100 .col .inputBox textarea:focus ~ .line,
  .wrapper .row100 .col .inputBox textarea:valid ~ .line {
    height: 100%;
  }

  .wrapper .row100 .col input[type="submit"] {
    border: none;
    padding: 10px 40px;
    cursor: pointer;
    outline: none;
    background: #fff;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.6em;
    text-transform: uppercase;
    border-radius: 24px;
    letter-spacing: .1em;
    transition:  all .3s ease;
    opacity: 0;
    /* transform: translateY(30px);
    will-change: transform; */
  }

  .wrapper .row100 .col input[type="submit"]:hover {
    color: #fff;
    background: #88e614;
    transform:  translateX(5px);
    will-change: transform;
  }
  /* .sendBtn:hover {
    color: #fff;
    background: #88e614;
    transform:  translateX(3px);
  }
  .sendBtn {
    opacity: 0;
    transform: translateY(30px);
  } */

  @media screen and (min-width: 320px) and (max-width: 468px) and (orientation: portrait) {
    section {
      margin-top: 50px;
      /* overflow-y: hidden !important; */
      overflow-x: hidden !important;
      overflow-y: scroll;
    }
    section::before {
      transform: translate(-200px, -180px);
    }
    section::after {
      transform: translate(220px, 180px);
    }
    .wrapper {
      padding: 20px;
      backdrop-filter: blur(15px);
    }
    .wrapper h2 {
      font-size: 1.95em;
    }
    .wrapper .row100 .col {
      margin: 15px 0 10px;
    }
    .wrapper .row100 .col label {
      font-size: 1em;
    }
  }

  @media screen and (min-width: 469px) and (max-width: 668px) {
    /* section {
      margin-top: 50px;
    } */
    .wrapper {
      padding: 20px;
      backdrop-filter: blur(15px);
    }
    .wrapper h2 {
      font-size: 1.95em;
    }
    .wrapper .row100 .col label {
      font-size: 1em;
    }
    section::before {
      transform: translate(-300px, -180px);
    }
    section::after {
      transform: translate(320px, 180px);
    }
  }

  @media screen and (max-height: 500px) and (max-width: 950px) and (orientation: landscape) {
    section {
      height: 100vh;
      margin-top: 40px;
      overflow-y: scroll !important;
    }
    .wrapper {
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 800px;
      height: 100vh;
      overflow: visible !important;
      padding: 20px;
      backdrop-filter: blur(15px);
    }
    .wrapper h2 {
      font-size: 1.95em;
    }
    .wrapper .row100 .col {
      margin: 15px 0 10px;
    }
    .wrapper .row100 .col label {
      font-size: 1em;
    }
  }
</style>
