/* eslint-disable no-tabs */
import { MyWorkComponent } from '../../AngularWebV2/src/app/my-work/my-work.component';
<template>
  <div>
    <header>
      <h1 id="title">
        <MaterialIconApps />
        <NuxtLink to="/">
          Tomcatbuzz
        </NuxtLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/work">
              Work
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              Contact
            </NuxtLink>
          </li>
          <!-- <li>
            <MaterialIconMenu id="menu" title="menu" />
          </li> -->
        </ul>
        <button class="menu-btn">
          <div class="content">
            <span class="text">show</span>
            <span class="text">hide</span>
          </div>
        </button>
      </nav>
    </header>
    <nav class="nav">
      <div class="nav__inner">
        <div class="nav--transition-slide" />
        <div class="nav--items">
          <div class="nav--item">
            <div class="nav--item-link">
              <a href="#" class="nav--link">
                <span class="nav--link-text" data-text="projects">projects</span>
                <div class="nav--link-icon">
                  <svg class="icon">
                    <use xlink:href="#arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="nav--item-line" />
          </div>
          <div class="nav--item">
            <div class="nav--item-link">
              <a href="#" class="nav--link">
                <span class="nav--link-text" data-text="about">about</span>
                <div class="nav--link-icon">
                  <svg class="icon">
                    <use xlink:href="#arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="nav--item-line" />
          </div>
          <div class="nav--item">
            <div class="nav--item-link">
              <a href="#" class="nav--link">
                <span class="nav--link-text" data-text="contact">contact</span>
                <div class="nav--link-icon">
                  <svg class="icon">
                    <use xlink:href="#arrow-right" />
                  </svg>
                </div>
              </a>
            </div>
            <div class="nav--item-line" />
          </div>
        </div>
      </div>
    </nav>
    <svg style="display: none">
      <symbol id="arrow-right" viewBox="0 0 492.004 492.004">
        <path
          d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
        />
      </symbol>
    </svg>
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
    <footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          // icon: MaterialIconApps,
          title: 'Home',
          to: '/'
        },
        {
          // icon: MaterialIconApps,
          title: 'Work',
          to: '/work'
        }
      ],
      title: 'Tomcatbuzz'
    }
  },
  mounted () {
    const btn = document.querySelector('.menu-btn')

    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
        hide()
      } else {
        btn.classList.add('active')
        show()
      }
    })

    function show () {
      const tl = gsap.timeline()

      gsap.set('.nav__inner, .menu-btn', {
        pointerEvents: 'none'
      })

      tl.fromTo('.nav--transition-slide', {
        scaleX: 0,
        transformOrigin: 'left center'
      },
      {
        duration: 0.5,
        scaleX: 1,
        ease: 'Expo.inOut'
      }
      )
        .set('.nav__inner, .menu-btn', {
          pointerEvents: 'all'
        })
        .fromTo('.nav--item-line', {
          scaleX: 0,
          transformOrigin: 'left center'
        },
        {
          duration: 0.65,
          scaleX: 1,
          ease: 'Expo.inOut',
          stagger: 0.15
        }
        )
        .fromTo('.nav--link', {
          translateY: '100%'
        },
        {
          duration: 2.25,
          translateY: 0,
          ease: 'elastic.inOut',
          stagger: 0.15
        }, '-=1.65')
    }

    function hide () {
      const tl = gsap.timeline()

      gsap.set('.nav__inner, .menu-btn', {
        pointerEvents: 'none'
      })

      tl.to('.nav--item-line', {
        duration: 0.6,
        scaleX: 0,
        transformOrigin: 'right center',
        ease: 'Expo.inOut',
        stagger: -0.15
      })
        .to('.nav--link', {
          duration: 0.35,
          translateY: '100%',
          ease: 'Expo.inOut',
          stagger: -0.15
        }, 0)
        .to('.nav--transition-slide', {
          duration: 0.5,
          transformOrigin: 'right center',
          scaleX: 0,
          ease: 'Expo.inOut'
        })
        .set('.menu-btn', {
          pointerEvents: 'all'
        })
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* height: 2.5em; */
  height: 3em;
  width: 100%;
  background-color: orange;
}

#title {
  margin-right: auto;
  font-size: 1.5em;
}

#title a {
  color: black;
  text-decoration: none;
  list-style: none;
}

header li {
  display: inline-block;
  justify-content: space-between;
}

li a {
  list-style: none;
  text-decoration: none;
  color: black;
  font-size: 1em;
  text-transform: uppercase;
  margin-right: 2em;
}

ul {
  margin-right: 3em;
}

/* .nuxt-link-exact-active:not(#title a) {
    visibility: hidden;
  } */

.nuxt-link-exact-active:not(#title a) {
  color: red;
  font-weight: bold;
}

.nuxt-link-exact-active:not(#title a) {
  transition: font-weight 1.5s, color 1s;
}

a:hover {
  color: green;
  transform: scaleZ(2);
}

.menu-btn {
  border: none;
  background: none;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 50px;
  height: 20px;
  z-index: 10;
  cursor: pointer;
  overflow: hidden;
}
.menu-btn .content {
  position: relative;
  width: 100%;
  height: 100%;
}
.menu-btn .content .text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateY(var(--translate-y));
  transition: transform 150ms ease;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.675rem;
  font-weight: bold;
  font-family: "Montserrat";
}
.menu-btn .content .text:nth-child(1) {
  --translate-y: 0;
  color: rgb(19, 19, 19);
}
.menu-btn .content .text:nth-child(2) {
  --translate-y: 150%;
  color: rgb(235, 235, 235);
}
.menu-btn.active .content.text:nth-child(1) {
  --translate-y: -150%;
}
.menu-btn.active .content.text:nth-child(2) {
  --translate-y: 0;
}
.menu-btn:focus {
  outline: none;
}

.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
}
.nav .nav__inner {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.nav .nav__inner .nav--items {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav .nav__inner .nav--items .nav--item {
  position: relative;
  width: 50%;
  height: 120px;
  margin-bottom: 2rem;
  overflow: hidden;
}
.nav .nav__inner .nav--items .nav--item-link .nav--link {
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transform: translateY(100%);
}
.nav .nav__inner .nav--items .nav--item-link .nav--link-text {
  height: 100%;
  position: relative;
  font-family: "Kanit";
  font-weight: 800;
  font-size: 85px;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: transparent;
  -webkit-text-stroke: 2px rgb(235, 235, 235);
}
.nav .nav__inner .nav--items .nav--item-link .nav--link-text::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  color: rgb(235, 235, 235);
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  transition: clip-path 400ms ease;
}
.nav .nav__inner .nav--items .nav--item-link .nav--link-icon {
  transform: translateX(-35%);
  opacity: 0;
  transition: transform 250ms ease, opacity 100ms linear;
  margin-left: 25px;
}
.nav .nav__inner .nav--items .nav--item-link .nav--link-icon svg {
  width: 100px;
  height: 100px;
  fill: rgb(235, 235, 235);
}
.nav
  .nav__inner
  .nav--items
  .nav--item-link
  .nav--link:hover
  .nav--link-text::after {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.nav .nav__inner .nav--items .nav--item-link .nav--link:hover .nav--link-icon {
  transform: translateX(0%);
  opacity: 1;
}

.nav .nav__inner .nav--items .nav--item-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: rgb(235, 235, 235);
  transform: scaleX(0);
}
.nav .nav__inner .nav--transition-slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(19, 19, 19);
  transform: scaleX(0);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

footer {
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: white;
  height: 2.5em;
  width: 100%;
}
</style>
