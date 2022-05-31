<template>
  <div>
    <canvas ref="canvas2" />
    <section>
      <form ref="form" class="wrapper" @submit.prevent="sendMessage">
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
            <input type="submit" value="send">
          </div>
        </div>
      </form>
    </section>
    <div class="toast">
      <div class="toast-content">
        <div class="message">
          <span class="text text-1">Success</span>
          <span class="text text-2">Your Message Was Sent!</span>
        </div>
        <div class="icon">
          <MaterialIconThumbUp class="thumbs" />
        </div>
      </div>
      <div class="progress" />
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import { addDoc } from 'firebase/firestore'
import messageColRef from '~/plugins/firebase'
export default {
  name: 'ContactPage',
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
    // const raycaster = new THREE.Raycaster()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      innerWidth / innerHeight,
      0.1,
      1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: this.$refs.canvas2,
      antialias: true
    })

    camera.position.z = 50

    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // document.body.appendChild(renderer.domElement)

    // eslint-disable-next-line no-new
    new OrbitControls(camera, renderer.domElement)

    const backlight = new THREE.DirectionalLight(0xFFFFFF, 1)
    backlight.position.set(0, 1, -1)
    scene.add(backlight)

    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    light.position.set(0, -1, 1)
    scene.add(light)

    const boxGeometry = new THREE.BoxGeometry(10, 10, 10)
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
    const mesh = new THREE.Mesh(boxGeometry, material)
    scene.add(mesh)

    const mouse = {
      x: undefined,
      y: undefined
    }

    // let frame = 0
    function animate () {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      // frame += 0.01
      // raycaster for point hover
      // raycaster.setFromCamera(mouse, camera)
      // const intersects = raycaster.intersectObject(mesh)
      // if (intersects.length > 0) {
      //   const { color } = intersects[0].object.geometry.attributes

      //   intersects[0].object.geometry.attributes.color.needsUpdate = true

      //   const initialColor = {
      //     r: 0,
      //     g: 0.19,
      //     b: 0.4
      //   }

      //   const hoverColor = {
      //     r: 0.1,
      //     g: 0.5,
      //     b: 1
      //   }

      //   gsap.to(hoverColor, {
      //     r: initialColor.r,
      //     g: initialColor.g,
      //     b: initialColor.b,
      //     duration: 1,
      //     onUpdate: () => {
      //       // vertice 1
      //       color.setX(intersects[0].face.a, hoverColor.r)
      //       color.setY(intersects[0].face.a, hoverColor.g)
      //       color.setZ(intersects[0].face.a, hoverColor.b)

      //       // vertice 2
      //       color.setX(intersects[0].face.b, hoverColor.r)
      //       color.setY(intersects[0].face.b, hoverColor.g)
      //       color.setZ(intersects[0].face.b, hoverColor.b)

      //       // vertice 3
      //       color.setX(intersects[0].face.c, hoverColor.r)
      //       color.setY(intersects[0].face.c, hoverColor.g)
      //       color.setZ(intersects[0].face.c, hoverColor.b)
      //     }
      //   })
      // }
      mesh.rotateX(0.005)
    }

    animate()

    addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / innerWidth) * 2 - 1
      mouse.y = -(e.clientY / innerHeight) * 2 + 1
      // console.log(mouse)
    })

    // CURRENT comment for TEST blur
    // gsap.to('section', {
    //   opacity: 1,
    //   duration: 1.5,
    //   ease: 'power2.out'
    // })
    gsap.to('.wrapper h2', {
      opacity: 1,
      duration: 1.5,
      delay: 1,
      y: 0,
      ease: 'power2.out'
    })
    gsap.to('.wrapper .row100 .col label', {
      opacity: 1,
      duration: 1.5,
      delay: 1.2,
      y: 0,
      ease: 'power2.out'
    })

    // gsap.to('#button', {
    //   opacity: 1,
    //   duration: 1.5,
    //   delay: 0.6,
    //   y: 0,
    //   ease: 'power2.out'
    // })

    // document.querySelector('#button')
    //   .addEventListener('click', (e) => {
    //     e.preventDefault()
    //     gsap.to('#app', {
    //       opacity: 0
    //     })
    //     gsap.to(camera.position, {
    //       z: 25,
    //       ease: 'power1.inOut',
    //       duration: 2
    //     })
    //     gsap.to(camera.rotation, {
    //       x: 1.57,
    //       ease: 'power1.inOut',
    //       duration: 2
    //     })
    //     gsap.to(camera.position, {
    //       y: 1000,
    //       ease: 'power1.in',
    //       duration: 1,
    //       delay: 1.5,
    //       onComplete: () => {
    //         this.$router.push('/work')
    //       }
    //     })
    //   })

    addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    })
  },
  methods: {
    async sendMessage () {
      await addDoc(messageColRef, this.$data)
      await this.$refs.form.reset()
      await this.initToast()
      // this.$router.push('/')
    },
    initToast () {
      alert('Dude')
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
  /* opacity: 0; */
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
  }

  .wrapper .row100 .col input[type="submit"]:hover {
    color: #fff;
    background: #88e614;
    transform:  translateX(3px);
  }

  @media screen and (min-width: 320px) and (max-width: 468px) {
    section {
      margin-top: 50px;
      overflow-y: scroll !important;
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

  .toast {
    position:absolute;
    top:25px;
    right:30px;
    border-radius:5px;
    background: #fff;
    padding:20px 35px 20px 25px;
    box-shadow:0 5px 10px rgba(0,0,0,0.1);
    border-right:6px solid #6af440;
    overflow:hidden;
    transform:translateX(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68,-0.55,0.265,1.35);
  }
  .toast.active {
    transform:translateX(0%);
  }
  .toast .toast-content {
    display:flex;
    align-items: center;
  }
  .toast-content .check{
    display:flex;
    align-items: center;
    justify-content: center;
    height:40px;
    width:40px;
    background-color: #6af440;
    color:#fff;
    font-size:20px;
    border-radius:10%;
  }
  .toast-content .message{
    display:flex;
    flex-direction: column;
    margin:0 20px;
  }
  .message .text{
    font-size:20px;
    font-weight:400;
    color:#666;
  }
  .message .text.text-1{
    font-weight:600;
    color:#333;
  }
  .toast .progress{
    position:absolute;
    bottom:0;
    right:0;
    height:4px;
    width:100%;
    background: #ddd;
  }
  .toast .progress:before{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    height:100%;
    width:100%;
    background: #6af440;
  }
  .progress.active:before{
    animation:progress 5s linear forwards;
  }
  @keyframes progress{
    100%{
        left:100%;
    }
  }
</style>
