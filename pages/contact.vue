<template>
  <div>
    <canvas ref="canvas2" />
    <div class="wrapper">
      <h1>
        contact
      </h1>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
export default {
  name: 'ContactPage',
  mounted () {
    const raycaster = new THREE.Raycaster()
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

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
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
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(mesh)
      if (intersects.length > 0) {
        const { color } = intersects[0].object.geometry.attributes

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
  }
}
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>
