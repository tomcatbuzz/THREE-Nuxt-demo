<template>
  <div data-color="rgb(57, 237, 57)">
    <canvas ref="canvas2" />
    <div class="wrapper">
      <h1>
        Preload
      </h1>
      <div class="button--container">
        <button class="about--btn">
          Dude
        </button>
        <span class="title">Dude Button</span>
      </div>
    </div>
    <div id="loading" class="loading-bar" />
  </div>
</template>

<script>
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
const header = document.getElementById('header')
const footer = document.getElementById('footer')

export default {
  name: 'Preload',
  // layout: 'default',
  // transition: custom,
  mounted () {
    gsap.set(header, {
      autoAlpha: 0
    })
    gsap.set(footer, {
      autoAlpha: 0
    })
    const loadingBarElement = document.getElementById('loading')
    // console.log(loadingBarElement)

    const loadingManager = new THREE.LoadingManager(

      // Loaded
      () => {
        gsap.delayedCall(1, () => {
          gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0 })
          loadingBarElement.classList.add('ended')
          loadingBarElement.style.transform = ''
        })
      },

      // Progress
      (itemUrl, itemsLoaded, itemsTotal) => {
        const progressRatio = itemsLoaded / itemsTotal
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
        // console.log(progressRatio)
      }
    )

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
    // new OrbitControls(camera, renderer.domElement)

    // const backlight = new THREE.DirectionalLight(0xFFFFFF, 1)
    // backlight.position.set(0, 1, -1)
    // scene.add(backlight)

    // const light = new THREE.DirectionalLight(0xFFFFFF, 1)
    // light.position.set(0, -1, 1)
    // scene.add(light)

    const overlayGeometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
    const overlayMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms:
    {
      uAlpha: { value: 2 }
    },
      vertexShader: `
        void main()
        {
            gl_Position = vec4(position, 1.0);
        }
    `,
      fragmentShader: `
    uniform float uAlpha;
        void main()
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
    `
    })
    const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
    scene.add(overlay)

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

    mesh.position.set(0, 0, 0)

    gsap.set(mesh.position, {
      x: 500
    })
    gsap.fromTo(mesh.position, {
      x: 500,
      duration: 1.5,
      ease: 'bounce.inOut'
    },
    {
      x: 0
    })

    const fontLoader = new FontLoader(loadingManager)
    fontLoader.load(
      '~/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
      (font) => {
        const textGeometry = new TextGeometry(
          'LOADING',
          {
            font,
            size: 2,
            height: 0.5,
            curveSegments: 3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.1,
            bevelOffset: -0.05,
            bevelSegments: 1
          }
        )
        // textGeometry.computeBoundingBox()
        // textGeometry.translate(
        //     - (textGeometry.boundingBox.max.x - 0.02) * 0.5,
        //     - (textGeometry.boundingBox.max.y - 0.02) * 0.5,
        //     - (textGeometry.boundingBox.max.z - 0.03) * 0.5
        // )
        textGeometry.center()

        textGeometry.computeBoundingBox()
        // console.log(textGeometry.boundingBox)
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
        // textMaterial.wireframe = true
        const text = new THREE.Mesh(textGeometry, material)
        scene.add(text)
        text.position.set(0, -1, 5)
        text.rotation.y = Math.PI
      })

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

    const mouse = {
      x: undefined,
      y: undefined
    }
    function animate () {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
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
  .loading-bar {
    color: #000000;
    position: absolute;
    top: 0%;
    width: 100%;
    height: 1px;
    background: rgb(169, 223, 98);
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.5s;
    will-change: transform;
    z-index: 100;
    margin-left: -20px;
}
.loading-bar.ended {
    opacity: 0;
    transform-origin: top right;
    transition: transform 1.5s ease-in-out;
}
</style>
