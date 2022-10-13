<template>
  <transition
    :css="false"
    appear
    @enter="enter"
    @leave="leave"
  >
    <!-- <div class="overlay" /> -->
    <slot />
  </transition>
</template>

<script>
// these go in TEMPLATE if needed in METHODS @before-enter="beforeEnter" @after-enter="afterEnter"
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
// const overlay = document.getElementsByClassName('overlay')

export default {
  methods: {
    enter (el, done) {
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        duration: 1.5,
        ease: 'power1.inOut',
        onComplete: done
      })
    },
    leave (el, done) {
      gsap.fromTo(el, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power1.out',
        onComplete: done
      })
    }
  }
}
</script>

<style>
.overlay {
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
