<template>
  <transition
    :css="false"
    appear
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
// const logo = document.querySelector('.transition__logo')
// const frameBlack = document.querySelector('.page-transition__black')
// const frameRed = document.querySelector('.page-transition__red')
// const footer = document.querySelector('#footer')
// const header = document.querySelector('#header')

export default {
  // mounted () {
  //   this.logo = document.querySelector('.transition__logo')
  //   this.frameBlack = document.querySelector('.page-transition__black')
  //   this.frameRed = document.querySelector('.page-transition__red')
  //   this.footer = document.querySelector('#footer')
  //   this.header = document.querySelector('#header')
  // },
  // mounted () {
  //   const logo = document.querySelector('.transition__log')
  //   const frameBlack = document.querySelector('.page-transition__black')
  //   const frameRed = document.querySelector('.page-transition__red')
  // },
  methods: {
    enter (el, done) {
      gsap.fromTo(el, {
        duration: 1,
        autoAlpha: 0,
        // scale: 1.5
        translateY: '100%'
      }, {
        autoAlpha: 1,
        translateY: 0,
        // scale: 1,
        // transformOrigin: '50% 50%',
        ease: 'power4.out',
        onComplete: done
      })
    },
    leave (el, done) {
      gsap.fromTo(el, {
        duration: 1,
        autoAlpha: 1,
        translateY: 0
        // scale: 1
      }, {
        autoAlpha: 0,
        translateY: '-100%',
        // scale: 0.8,
        ease: 'power4.out',
        onComplete: done
      })
    }
    // frameRed = document.querySelector('.page-transition__red'),
    // frameBlack = document.querySelector('.page-transition__black'),
    // logo = document.querySelector('.transition__log'),
    // beforeEnter (el) {
    //   gsap.set(el, {
    //     opacity: 0
    //   })
    //   gsap.set(this.footer, {
    //     opacity: 0
    //   })
    //   gsap.set(this.header, {
    //     opacity: 0
    //   })
    //   console.log(el)
    // const tl = gsap.timeline({
    //   paused: true,
    //   onComplete: done
    // })
    // tl.fromTo(frameRed, {
    //   // duration: 3.2,
    //   scaleX: 0
    // },
    // {
    //   scaleX: 1,
    //   duration: 2.2,
    //   transformOrigin: 'left',
    //   ease: 'power4.inOut'
    // })
    // tl.fromTo(frameBlack, {
    //   // duration: 3.2,
    //   scaleX: 0
    // },
    // {
    //   scaleX: 1,
    //   duration: 2.2,
    //   transformOrigin: 'left',
    //   ease: 'power4.inOut'
    // }, 0.2)
    // tl.fromTo(logo, {
    //   // duration: 2.6,
    //   xPercent: -100,
    //   autoAlpha: 0
    // },
    // {
    //   xPercent: 0,
    //   duration: 1.6,
    //   autoAlpha: 1,
    //   ease: 'power4.inOut'
    // }, 0.7)
    // tl.set(frameRed, {
    //   scaleX: 0
    // })
    // tl.to(frameBlack, {
    //   duration: 2.2,
    //   scaleX: 0,
    //   transformOrigin: 'right',
    //   ease: 'power4.inOut'
    // })
    // tl.to(logo, {
    //   duration: 0.2,
    //   transformOrigin: 'right',
    //   autoAlpha: 0
    // }, '-=1.2')
    // tl.play()
    // },
    // enter (done) {
    //   // gsap.set(el, {
    //   //   opacity: 0
    //   // })
    //   // gsap.set(footer, {
    //   //   opacity: 0
    //   // })
    //   // gsap.set(header, {
    //   //   opacity: 0
    //   // })
    //   const tl = gsap.timeline({
    //     paused: true,
    //     onComplete: done
    //   })
    //   tl.fromTo(this.frameRed, {
    //     // duration: 3.2,
    //     scaleX: 0
    //   },
    //   {
    //     scaleX: 1,
    //     duration: 2.2,
    //     transformOrigin: 'left',
    //     ease: 'power4.inOut'
    //   })
    //   tl.fromTo(this.frameBlack, {
    //     // duration: 3.2,
    //     scaleX: 0
    //   },
    //   {
    //     scaleX: 1,
    //     duration: 2.2,
    //     transformOrigin: 'left',
    //     ease: 'power4.inOut'
    //   }, 0.2)
    //   tl.fromTo(this.logo, {
    //     // duration: 2.6,
    //     xPercent: -100,
    //     autoAlpha: 0
    //   },
    //   {
    //     xPercent: 0,
    //     duration: 1.6,
    //     autoAlpha: 1,
    //     ease: 'power4.inOut'
    //   }, 0.7)
    //   tl.set(this.frameRed, {
    //     scaleX: 0
    //   })
    //   tl.to(this.frameBlack, {
    //     duration: 2.2,
    //     scaleX: 0,
    //     transformOrigin: 'right',
    //     ease: 'power4.inOut'
    //   })
    //   tl.to(this.logo, {
    //     duration: 0.2,
    //     transformOrigin: 'right',
    //     autoAlpha: 0
    //   }, '-=1.2')
    //   // gsap.to(el, {
    //   //   // delay: 3,
    //   //   duration: 1,
    //   //   opacity: 1,
    //   //   ease: 'power3.inOut',
    //   //   onComplete: done
    //   // }, '+=1')
    //   // gsap.to(footer, {
    //   //   delay: 1.2,
    //   //   opacity: 1,
    //   //   ease: 'power3.inOut'
    //   // })
    //   // gsap.to(header, {
    //   //   delay: 1.2,
    //   //   opacity: 1,
    //   //   ease: 'power3.inOut'
    //   // })
    //   tl.play()
    // },
    // afterEnter (el, done) {
    //   gsap.to(el, {
    //     delay: 3,
    //     duration: 1,
    //     opacity: 1,
    //     ease: 'power3.inOut'
    //     // onComplete: done
    //   }, '+=1')
    //   gsap.to(this.footer, {
    //     delay: 1.2,
    //     opacity: 1,
    //     ease: 'power3.inOut'
    //   })
    //   gsap.to(this.header, {
    //     delay: 1.2,
    //     opacity: 1,
    //     ease: 'power3.inOut'
    //   })
    //   done()
    // },
    // leave (el, done) {
    //   gsap.to(el, {
    //     duration: 1.2,
    //     opacity: 0,
    //     ease: 'power3.inOut'
    //     // onComplete: done
    //   })
    //   done()
    // }
  }
}
</script>
