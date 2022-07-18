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
const logo = document.querySelector('.transition__logo')
const frameBlack = document.querySelector('.page-transition__black')
const frameRed = document.querySelector('.page-transition__red')

export default {
  // mounted () {
  //   const logo = document.querySelector('.transition__log')
  //   const frameBlack = document.querySelector('.page-transition__black')
  //   const frameRed = document.querySelector('.page-transition__red')
  // },
  methods: {
    // frameRed = document.querySelector('.page-transition__red'),
    // frameBlack = document.querySelector('.page-transition__black'),
    // logo = document.querySelector('.transition__log'),
    beforeEnter (el) {
      gsap.set(el, {
        opacity: 0
      })
      // console.log(el)
    },
    enter (el, done) {
      // gsap.set(el, {
      //   opacity: 0
      // })
      const tl = gsap.timeline({
        // paused: true,
        onComplete: done
      })
      tl.fromTo(frameRed, {
        // duration: 3.2,
        scaleX: 0
      },
      {
        scaleX: 1,
        duration: 2.2,
        transformOrigin: 'left',
        ease: 'power4.inOut'
      })
      tl.fromTo(frameBlack, {
        // duration: 3.2,
        scaleX: 0
      },
      {
        scaleX: 1,
        duration: 2.2,
        transformOrigin: 'left',
        ease: 'power4.inOut'
      }, 0.2)
      tl.fromTo(logo, {
        // duration: 2.6,
        xPercent: -100,
        autoAlpha: 0
      },
      {
        xPercent: 0,
        duration: 1.6,
        autoAlpha: 1,
        ease: 'power4.inOut'
      }, 0.7)
      tl.set(frameRed, {
        scaleX: 0
      })
      tl.to(frameBlack, {
        duration: 2.2,
        scaleX: 0,
        transformOrigin: 'right',
        ease: 'power4.inOut'
      })
      tl.to(logo, {
        duration: 0.2,
        autoAlpha: 0
      }, '-=1.2')
      tl.to(el, {
        // delay: 3,
        duration: 1,
        opacity: 1,
        ease: 'power3.inOut'
        // onComplete: done
      }, '+=1')
      // tl.play()
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
