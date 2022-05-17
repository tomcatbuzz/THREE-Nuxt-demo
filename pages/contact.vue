<template>
  <div>
    <canvas ref="canvas2" />
    <div class="wrapper">
      <h1>
        Reach Out
      </h1>
      <div class="card">
        <form class="form" @submit.prevent="sendMessage">
          <input v-model="contactName" class="input" type="text" placeholder="Name">
          <input v-model="contactEmail" class="input" type="email" placeholder="Email">
          <input v-model="contactSubject" class="input" type="text" placeholder="Subject">
          <textarea v-model="contactMessage" class="input" rows="5" placeholder="Message" />
          <button type="submit" class="send">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line import/no-named-as-default
// import gsap from 'gsap'
import { addDoc } from 'firebase/firestore'
import messageColRef from '~/plugins/firebase'
export default {
  name: 'ContactPage',
  data () {
    return {
      contactName: null,
      contactEmail: null,
      contactSubject: null,
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

    // gsap.to('#name', {
    //   opacity: 1,
    //   duration: 1.5,
    //   y: 0,
    //   ease: 'power2.out'
    // })
    // gsap.to('#headline', {
    //   opacity: 1,
    //   duration: 1.5,
    //   delay: 0.3,
    //   y: 0,
    //   ease: 'power2.out'
    // })
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
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  }

  h1 {
    color: white;
    text-transform: uppercase;
  }

  .card {
    width: 40vw;
    height: 70vh;
    border-radius: 10px;
    /* border: 1px solid white; */
    /* border: 4mm ridge rgba(211, 220, 50, .6); */
    border: 4mm ridge rgba(17, 153, 149, 0.6);
    /* background-color: blue; */
    /* filter: blur(5px); */
    /* opacity: 0.2; */
    background-blend-mode: difference;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    font-size: 1.8rem;
    width: 80%;
    height: 2.2rem;
    background: white;
    margin: 1rem;
  }

  textarea {
    font-size: 1.8rem;
    width: 80%;
    height: 3rem;
    margin: 1rem;
  }

  .input {
    color: black;
    opacity: 0.5;
    cursor: pointer;
  }

  .send {
    text-transform: uppercase;
    width: 6em;
    height: 3em;
    opacity: 0.5;
    border-radius: 0.5em;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) and (orientation: portrait) {
    .card {
      width: 80vw;
    }
    input textarea {
      width: 100%;
    }
  }
</style>
