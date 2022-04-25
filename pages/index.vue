<template>
  <div>
    <canvas ref="canvas" />
    <div id="app">
      <div class="headline">
        <h1 id="name">
          Anthony Buzzelli
        </h1>
        <p id="headline">
          Awesome Developer that Rocks
        </p>
        <button id="button">
          View Work
          <!-- <NuxtLink to="/work">
            View Work
          </NuxtLink> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import image from '~/assets/disc.png'
// import * as dat from 'dat.gui'
export default {
  name: 'IndexPage',
  layout: 'default',
  // transition: 'home',
  mounted () {
    // const gui = new dat.GUI()
    const world = {
      plane: {
        width: 500,
        height: 500,
        widthSegments: 100,
        heightSegments: 100
      }
    }
    // gui.add(world.plane, 'width', 1, 20).onChange(generatePlane)

    // gui.add(world.plane, 'height', 1, 20).onChange(generatePlane)

    // gui.add(world.plane, 'heightSegments', 1, 20).onChange(generatePlane)

    // gui.add(world.plane, 'widthSegments', 1, 20).onChange(generatePlane)

    function generatePlane () {
      planeMesh.geometry.dispose()
      planeMesh.geometry = new THREE.PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
      )
      // vertice position randomization
      const { array } = planeMesh.geometry.attributes.position
      const randomValues = []
      for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
          const x = array[i]
          const y = array[i + 1]
          const z = array[i + 2]

          array[i] = x + (Math.random() - 0.5) * 3
          array[i + 1] = y + (Math.random() - 0.5) * 3
          array[i + 2] = z + (Math.random() - 0.5) * 7
        }

        // eslint-disable-next-line no-unused-expressions
        randomValues.push(Math.random()) * (Math.PI * 2)

        planeMesh.geometry.attributes.position.randomValues = randomValues

        planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array
      }

      // color attribute addition
      const colors = []
      for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
        colors.push(0, 0.19, 0.4)
      }

      planeMesh.geometry.setAttribute('color',
        new THREE.BufferAttribute(
          new Float32Array(colors), 3)
      )
    }

    const raycaster = new THREE.Raycaster()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      innerWidth / innerHeight,
      0.1,
      1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: this.$refs.canvas,
      antialias: true
    })

    camera.position.z = 50

    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // document.body.appendChild(renderer.domElement)

    // eslint-disable-next-line no-new
    new OrbitControls(camera, renderer.domElement)

    const plane = new THREE.PlaneGeometry(400, 400, 75, 75)
    const planeMaterial = new THREE.MeshPhongMaterial({
      // color: 0xFF0000,
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading,
      vertexColors: true
    })
    const planeMesh = new THREE.Mesh(plane, planeMaterial)
    scene.add(planeMesh)
    generatePlane()

    const backlight = new THREE.DirectionalLight(0xFFFFFF, 1)
    backlight.position.set(0, 1, -1)
    scene.add(backlight)

    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    light.position.set(0, -1, 1)
    scene.add(light)

    const starGeometry = new THREE.BufferGeometry()

    const sprite = new THREE.TextureLoader().load(image)
    const starMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      map: sprite,
      size: 1.5,
      // alphaTest: 0.5,
      transparent: true,
      sizeAttenuation: true
    })

    const starVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVertices.push(x, y, z)
    }

    starGeometry.setAttribute('position',
      new THREE.Float32BufferAttribute(starVertices, 3))

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({color: 0x00FF00})
    // const mesh = new THREE.Mesh(boxGeometry, material)
    // scene.add(mesh)

    const mouse = {
      x: undefined,
      y: undefined
    }

    let frame = 0
    function animate () {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      frame += 0.01
      // animate vertice position
      const { array, originalPosition, randomValues } = planeMesh.geometry.attributes.position
      for (let i = 0; i < array.length; i += 3) {
        // x
        array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01
        // y
        array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.01
      }
      planeMesh.geometry.attributes.position.needsUpdate = true

      planeMesh.rotateX(-0.0005)

      // raycaster for point hover
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(planeMesh)
      if (intersects.length > 0) {
        const { color } = intersects[0].object.geometry.attributes

        // vertice 1
        color.setX(intersects[0].face.a, 0.1)
        color.setY(intersects[0].face.a, 0.5)
        color.setZ(intersects[0].face.a, 1)

        // vertice 2
        color.setX(intersects[0].face.b, 0.1)
        color.setY(intersects[0].face.b, 0.5)
        color.setZ(intersects[0].face.b, 1)

        // vertice 3
        color.setX(intersects[0].face.c, 0.1)
        color.setY(intersects[0].face.c, 0.5)
        color.setZ(intersects[0].face.c, 1)

        intersects[0].object.geometry.attributes.color.needsUpdate = true

        const initialColor = {
          r: 0,
          g: 0.19,
          b: 0.4
        }

        const hoverColor = {
          r: 0.1,
          g: 0.5,
          b: 1
        }

        gsap.to(hoverColor, {
          r: initialColor.r,
          g: initialColor.g,
          b: initialColor.b,
          duration: 1,
          onUpdate: () => {
            // vertice 1
            color.setX(intersects[0].face.a, hoverColor.r)
            color.setY(intersects[0].face.a, hoverColor.g)
            color.setZ(intersects[0].face.a, hoverColor.b)

            // vertice 2
            color.setX(intersects[0].face.b, hoverColor.r)
            color.setY(intersects[0].face.b, hoverColor.g)
            color.setZ(intersects[0].face.b, hoverColor.b)

            // vertice 3
            color.setX(intersects[0].face.c, hoverColor.r)
            color.setY(intersects[0].face.c, hoverColor.g)
            color.setZ(intersects[0].face.c, hoverColor.b)
          }
        })
      }
      stars.rotateX(0.0005)
    }

    animate()

    addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / innerWidth) * 2 - 1
      mouse.y = -(e.clientY / innerHeight) * 2 + 1
      // console.log(mouse)
    })

    gsap.to('#name', {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'power2.out'
    })
    gsap.to('#headline', {
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      y: 0,
      ease: 'power2.out'
    })
    gsap.to('#button', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'power2.out'
    })

    document.querySelector('#button')
      .addEventListener('click', (e) => {
        e.preventDefault()
        gsap.to('#app', {
          opacity: 0
        })
        gsap.to(camera.position, {
          z: 25,
          ease: 'power1.inOut',
          duration: 2
        })
        gsap.to(camera.rotation, {
          x: 1.57,
          ease: 'power1.inOut',
          duration: 2
        })
        gsap.to(camera.position, {
          y: 1000,
          ease: 'power1.in',
          duration: 1,
          delay: 1.5,
          onComplete: () => {
            this.$router.push('/work')
          }
        })
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

.headline {
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
  opacity: 0;
  transform: translateY(30px);
}

p {
  font-size: 5em;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  opacity: 0;
  transform: translateY(30px);
}

button {
  margin-top: 1.5em;
  font-family: 'Montserrat';
  text-transform: uppercase;
  background-color: transparent;
  color: rgb(157, 151, 151);
  font-size: 2em;
  padding: 0.5em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-color: rgb(157, 151, 151);
  border-radius: 0.25em;
  opacity: 0;
  transform: translateY(30px);
  cursor: pointer;
}

button:hover {
  background-color: white;
  color: rgb(157, 151, 151);
}

/* .home-enter-active, .home-leave-active {
  transition: opacity 1s;
}

.home-enter, .home-leave-active {
  opacity: 0;
} */

@media screen and (max-width: 480px) and (orientation: portrait) {
  p {
    font-size: 4em;
  }
}
</style>
