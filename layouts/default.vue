<template id="page">
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
          <li>
            <button id="menu">
              Bitch Button
            </button>
          </li>
        </ul>
      </nav>
      <!-- <FullNav /> -->
    </header>
    <!-- <div class="overlay">
      <div class="close">
        <button class="close">
          Close
        </button>
      </div>
      <div class="menu-content">
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div> -->
    <div class="full-nav">
      <!-- <button class="menu-btn">
        <div class="content">
          <span class="text">show</span>
          <span class="text">hide</span>
        </div>
      </button> -->
      <nav class="nav">
        <div class="nav__inner">
          <div class="nav--transition-slide" />
          <div class="closeBtn">
            <button class="close">
              Close
            </button>
          </div>
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
    </div>
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
// import FullNav from '@/components/FullNav'
export default {
  name: 'DefaultLayout',
  // components: {
  //   FullNav
  // },
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
    // document.querySelector('#menu')
    //   .addEventListener('click', () => {
    //     // e.preventDefault()
    //     gsap.fromTo('.overlay', {
    //       scaleX: 0,
    //       transformOrigin: 'left center'
    //     },
    //     {
    //       duration: 0.6,
    //       scaleX: 1,
    //       // ease: 'power1.inOut'
    //       ease: 'none'
    //     })
    //   })

    // document.querySelector('.close')
    //   .addEventListener('click', () => {
    //     // e.preventDefault()
    //     gsap.to('.overlay', {
    //       scaleX: 1,
    //       transformOrigin: 'right center'
    //       duration: 0.6,
    //       // ease: 'power1.inOut'
    //       ease: 'none'
    //     }

    // try this here
    document.querySelector('#menu')
      .addEventListener('click', () => {
        show()
      })
    function show () {
      const tl = gsap.timeline()

      gsap.set('.nav__inner', {
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
        .set('.nav__inner', {
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

    document.querySelector('.close')
      .addEventListener('click', () => {
        hide()
      })

    function hide () {
      const tl = gsap.timeline()

      gsap.set('.nav__inner', {
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

header li full-nav {
  display: inline-block;
  justify-content: space-between;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 2.5em;
  /* height: 3em; */
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
  background-color: red;
  font-weight: bold;
  font-size: 1.2em;
}

/* li a:hover {
  color: green;
  font-size: 1.2em;
} */

a {
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  /* display: inline-block; */
  padding: 5px 0;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

a:before {
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

a:hover {
  background-position: 0;
}

a:hover::before {
  width: 100%;
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

.page-enter-active,
.page-leave-active {
  transition: opacity 400ms, transform 400ms;
}

.page-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
}

.page-enter-to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.page-leave {
    opacity: 1;
}

.page-leave-to {
  opacity: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transform: scaleX(0);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-content ul li {
  display: flex;
  flex-direction: column;
  color: white
}

.close {
  position: fixed;
  top: 2em;
  right: 2em;
  padding: 0.5em;
  font-family: 'Montserrat';
  text-transform: uppercase;
  background-color: transparent;
  color: rgb(157, 151, 151);
  font-size: 1em;
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  li:not(:nth-child(4)) {
    display: none;
  }
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
  /* font-family: "Kanit"; */
  font-family: "Montserrat";
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
</style>
