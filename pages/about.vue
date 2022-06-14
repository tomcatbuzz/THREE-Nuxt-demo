<template>
  <div>
    <canvas ref="canvas2" />
    <div class="wrapper">
      <h1>
        About
      </h1>
      <!-- <div class="button--container">
        <button class="about--btn">
          Dude
        </button>
        <span class="title">Dude Button</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import pX from '~/assets/px.png'
import pY from '~/assets/py.png'
import pZ from '~/assets/pz.png'
import nX from '~/assets/nx.png'
import nY from '~/assets/ny.png'
import nZ from '~/assets/nz.png'
export default {
  name: 'About',
  layout: 'default',
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

    const loader = new THREE.CubeTextureLoader()
    const textureCube = loader.load([pX, pY, pZ, nX, nY, nZ])

    const boxGeometry = new THREE.BoxGeometry(30, 30, 30)
    const material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, envMap: textureCube })
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

    addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    })
  }
}
</script>

<style scoped>
  canvas {
    display: block;
    outline: none;
    cursor: pointer;
  }
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 1.5em;
    font-family: 'Montserrat';
    text-transform: uppercase;
    color: rgb(157, 151, 151);
    /* opacity: 0; */
    will-change: transform;
    /* transform: translateY(30px); */
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
