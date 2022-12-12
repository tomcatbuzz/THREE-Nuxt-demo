<template>
  <div data-color="rgb(57, 237, 57)">
    <canvas ref="canvas2" />
    <div class="wrapper">
      <h1>
        About
      </h1>
      <div class="button--container">
        <button id="button" class="about--btn">
          Dude
        </button>
        <span class="title">Dude Button</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import pX from '~/assets/px.png'
import pY from '~/assets/py.png'
import pZ from '~/assets/pz.png'
import nX from '~/assets/nx.png'
import nY from '~/assets/ny.png'
import nZ from '~/assets/nz.png'
// import t1 from '~/assets/circuit.jpg'
// import fragment from '~/shaders/aboutFragment.glsl'
// import vertex from '~/shaders/aboutVertex.glsl'
// import custom from '~/components/transitions'
export default {
  name: 'About',
  layout: 'default',
  // transition: custom,
  mounted () {
    // const raycaster = new THREE.Raycaster()
    const scene = new THREE.Scene()
    const scene2 = new THREE.Scene()
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

    // const backlight = new THREE.DirectionalLight(0xFFFFFF, 1)
    // backlight.position.set(0, 1, -1)
    // scene.add(backlight)

    // const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    // light.position.set(0, -1, 1)
    // scene.add(light)

    const loader = new THREE.TextureLoader()
    // const textureCube = loader.load([pX, pY, pZ, nX, nY, nZ])
    const textureCube = loader.load(pX)
    const textureChange = loader.load(pZ)
    const texturePy = loader.load(pY)
    const textureNx = loader.load(nX)
    const textureNy = loader.load(nY)
    const textureNz = loader.load(nZ)

    const boxGeometry = new THREE.BoxGeometry(30, 30, 30)
    // const material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, envMap: textureCube })
    // const material = new THREE.MeshBasicMaterial({ map: textureCube })
    const materials = [
      new THREE.MeshBasicMaterial({ map: textureCube }),
      new THREE.MeshBasicMaterial({ map: textureChange }),
      new THREE.MeshBasicMaterial({ map: texturePy }),
      new THREE.MeshBasicMaterial({ map: textureNx }),
      new THREE.MeshBasicMaterial({ map: textureNy }),
      new THREE.MeshBasicMaterial({ map: textureNz })
    ]
    // let materialToShow = 0
    const mesh = new THREE.Mesh(boxGeometry, materials)
    scene.add(mesh)

    // const material = new THREE.ShaderMaterial({
    //   uniforms: {
    //     t1: { value: new THREE.TextureLoader().load(t1) }
    //   },
    //   side: THREE.DoubleSide,
    //   vertexShader: vertex,
    //   fragmentShader: fragment
    // })
    // const geometry = new THREE.PlaneGeometry(100, 100, 100, 100)
    // const plane = new THREE.Mesh(geometry, material)
    // scene2.add(plane)

    // const ringGroup = new THREE.Group()
    const ringGeometry = new THREE.TorusBufferGeometry(5, 1, 8, 36)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x993366,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    scene2.add(ringMesh)
    ringMesh.position.set(10, 5, 10)

    const ring2Geometry = new THREE.TorusBufferGeometry(7, 1, 8, 36)
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x993366,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    const ring2Mesh = new THREE.Mesh(ring2Geometry, ring2Material)
    scene2.add(ring2Mesh)
    ring2Mesh.position.set(10, 5, 10)

    const ring3Geometry = new THREE.TorusBufferGeometry(9, 1, 8, 36)
    const ring3Material = new THREE.MeshBasicMaterial({
      color: 0x993366,
      transparent: true,
      wireframe: true,
      blending: THREE.AdditiveBlending
    })
    const ring3Mesh = new THREE.Mesh(ring3Geometry, ring3Material)
    scene2.add(ring3Mesh)
    ring3Mesh.position.set(10, 5, 10)

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: 'power2.inOut'
      }
    })
    tl.set(ringMesh.position, {
      y: 300
    })
      .set(ring2Mesh.position, {
        x: 300
      })
      .set(ring3Mesh.position, {
        x: -500
      })
      .to(ringMesh.position, {
        y: 5
      }, 2)
      .to(ring2Mesh.position, {
        x: 10
      }, 1)
      .to(ring3Mesh.position, {
        x: 10
      })

    const mouse = {
      x: undefined,
      y: undefined
    }

    document.querySelector('#button')
      .addEventListener('click', (e) => {
        e.preventDefault()
        gsap.to('.wrapper', {
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
            this.$router.push('/preload')
          }
        })
      })

    function animate () {
      requestAnimationFrame(animate)
      renderer.render(scene2, camera)
      ringMesh.rotation.x += 0.05
      ring2Mesh.rotation.y += 0.04
      // ring3Mesh.rotation.x += 0.03
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
      // plane.rotation.x += 0.005
      mesh.rotation.y += 0.01
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
    color: rgb(57, 237, 57);
    border-radius: 25px;
    border: 2px solid red;
  }
</style>
