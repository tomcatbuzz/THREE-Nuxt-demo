<template>
  <transition
    :css="false"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<!-- name="myTransition"
mode="out-in" -->

<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
export default {
  methods: {
    beforeEnter (el) {
      gsap.set(el, {
        opacity: 0
      })
    },
    enter (el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        ease: 'power3.inOut',
        onComplete: done
      })
    },
    leave (el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 0,
        ease: 'power3.inOut',
        onComplete: done
      })
    }
  }
}
</script>
