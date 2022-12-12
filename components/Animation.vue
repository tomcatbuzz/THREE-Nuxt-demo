<template>
  <div class="animation">
    {{ page }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as THREE from 'three'
// import gsap from 'gsap'
import Afragment from '~/shaders/animationFragment.glsl'
import Avertex from '~/shaders/animationVertex.glsl'

export default {
  data () {
    return {
      state: [],
      material: {},
      geometry: {}
    }
  },
  computed: mapState(['page']),
  watch: {
    page: function (newValue, oldValue) {
      // let vm = this
    }
  },
  mounted () {
    // let vm = this
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

    const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
    const overlayMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uAlpha: { value: 1 }
      },
      vertexShader: Avertex,
      fragmentShader: Afragment
    })
    const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
    scene.add(overlay)
  }

}
</script>

<style>
  .animation {
    position: fixed;
  }
</style>
