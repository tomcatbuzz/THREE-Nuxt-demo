<template id="page">
  <div>
    <header id="header">
      <h1 id="title">
        <MaterialIconApps />
        <NuxtLink to="/">
          Tomcatbuzz
        </NuxtLink>
      </h1>
      <nav class="roll">
        <ul>
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/work">
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              Contact
            </NuxtLink>
          </li>
          <li>
            <button id="menu">
              Menu
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <div>
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
                <a id="link" class="nav--link" @click="$router.push('/work')">
                  <!-- <span class="nav--link-text" data-text="projects">projects</span> -->
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
                <a id="aboutlink" class="nav--link" @click="$router.push('/about')">
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
                <a id="contactlink" class="nav--link" @click="$router.push('/contact')">
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
            <div class="nav--item">
              <div class="nav--item-link">
                <a id="homelink" class="nav--link" @click="$router.push('/')">
                  <span class="nav--link-text" data-text="home">home</span>
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
        <myTransition>
          <Nuxt />
        </myTransition>
      </div>
    </main>
    <footer id="footer">
      <span class="copy">&copy; {{ new Date().getFullYear() }}</span>
      <div class="logos">
        <a title="Twitter" href="https://twitter.com/tomcatbuzz" rel="noopener noreferrer" target="_blank"><MaterialIconTwitter class="twitter" /></a>
        <!-- <span class="tooltip">Twitter</span> -->
        <a title="Github" href="https://github.com/tomcatbuzz" rel="noopener noreferrer" target="_blank"><MaterialIconGithub class="github" /></a>
        <!-- <span class="tooltip">Github</span> -->
        <a title="LinkedIn" href="https://www.linkedin.com/in/anthony-buzzelli-8843ab21/" rel="noopener noreferrer" target="_blank"><MaterialIconLinkedin class="linkedin" /></a>
        <!-- <span class="tooltip">Linkedin</span> -->
        <a title="Codepen" href="https://codepen.io/tomcatbuzz/" rel="noopener noreferrer" target="_blank"><MaterialIconCodepen class="codepen" /></a>
        <!-- <span class="tooltip">Codepen</span> -->
      </div>
    </footer>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'
import myTransition from '~/components/myTransition.vue'
// import Tooltip from '~/components/Tooltip'
// import twitterImg from '~/assets/twitter.png'
// import githubImg from '~/assets/github.png'
// import linkedinImg from '~/assets/linkedin.png'
// import codepenImg from '~/assets/codepen.png'
export default {
  name: 'DefaultLayout',
  components: {
    myTransition
  },
  mounted () {
    document.querySelector('#menu').addEventListener('click', () => {
      show()
    })
    function show () {
      const tl = gsap.timeline()

      gsap.set('.nav__inner', {
        pointerEvents: 'none'
      })

      gsap.set('.nav', {
        autoAlpha: 1
      })

      tl.fromTo(
        '.nav--transition-slide',
        {
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
        },
        '-=1.65'
        )
        .fromTo('.close', {
          opacity: 0
        },
        {
          duration: 0.65,
          opacity: 1,
          ease: 'power1.in'
        })
    }

    document.querySelector('#link').addEventListener('click', () => {
      hide()
    })

    document.querySelector('#aboutlink').addEventListener('click', () => {
      hide()
    })

    document.querySelector('#contactlink').addEventListener('click', () => {
      hide()
    })

    document.querySelector('#homelink').addEventListener('click', () => {
      hide()
    })

    document.querySelector('.close').addEventListener('click', () => {
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
        }, 0
        )
        .to('.close', {
          opacity: 0,
          duration: 0.4,
          ease: 'power1.out'
        })
        .to('.nav--transition-slide', {
          duration: 0.5,
          transformOrigin: 'right center',
          scaleX: 0,
          ease: 'Expo.inOut'
        })
        .to('.nav', {
          autoAlpha: 0
        })
    }
  }
}
</script>
<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

header {
  position: absolute;
  // top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 2.5em;
  /* height: 3em; */
  width: 100%;
  // background-color: #119995;
  background-color: transparent;
  color: white;
  z-index: 2;
}

#title {
  margin-right: auto;
  font-size: 1.5em;
}

#title a {
  color: white;
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
  color: #fff;
  font-size: 1em;
  text-transform: uppercase;
  margin-right: 2em;
  transition: 0.5s
}

ul {
  margin-right: 3em;
}

button#menu {
  text-transform: uppercase;
  background-color: transparent;
  font-size: 1em;
  cursor: pointer;
  // padding: 0.2em;
  border: 0;
  // border-radius: 10px;
  color: white;
  transition: all 0.3s ease-in-out;
}

button#menu:hover {
  padding: 0.2em;
  border-radius: 5px;
  background-color: #88e614;
  color: black;
}

/* .nuxt-link-exact-active:not(#title a) {
    visibility: hidden;
  } */

.nuxt-link-exact-active:not(#title a) {
  font-weight: bold;
  font-size: 1.2em;
}

ul li {
  transition: 0.5s;
  padding: 5px;
}

ul:hover li a {
  transform: scale(1.5);
  opacity: 0.2;
  filter: blur(5px);
}

ul li a:hover {
  transform: scale(2);
  opacity: 1;
  filter: blur(0);
  text-decoration: none;
  color:#fff;
}

ul li a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff497c;
  transition: 0.5s;
  transform-origin: right;
  transform: scaleX(0);
  z-index: -1;
}

ul li a:hover:before {
  transition: transform 0.5s;
  transform-origin: left;
  transform: scaleX(1);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow-y: hidden;
}

footer {
  position: fixed;
  bottom: 0;
  display: flex;
  // background-color: #119995;
  background-color: transparent;
  height: 3em;
  width: 100%;
}

footer .copy {
  font-size: 1.5rem;
  margin: 0.5em;
  color: white;
}

.logos {
  position: absolute;
  right: 0;
}

.logos a {
  text-decoration: none;
  padding: 0;
  margin: 0.4em;
  // position: relative;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}

.logos .material-design-icon__svg {
  // display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 2em;
}

.twitter {
  padding: 0.15em;
  background: white;
  border-radius: 50%;
  color: #1DA1F2;
  // color: #657786;
}

.github {
  padding: 0.15em;
  background: white;
  border-radius: 50%;
  color: #000000;
}

.codepen {
  padding: 0.15em;
  background: white;
  border-radius: 50%;
  // color: #CCCCCC;
  color: #000000;
}

.linkedin {
  padding: 0.15em;
  background: white;
  border-radius: 50%;
  color: #0e76A8;
}

// .page-enter-active {
//   transition: opacity 0.25s ease-out;
// }

// .page-leave-active {
//   transition: opacity 0.25s ease-in;
// }

// .page-enter,
// .page-leave-active {
//   opacity: 0;
//   // transform: translate3d(0, 20px, 0);
//   // transform: scale(0);
// }

// .page-enter-from {
//   opacity: 1;
//   // transform: translate3d(0, 0, 0);
// }

// .page-leave {
//   opacity: 1;
// }

// .page-leave-to {
//   opacity: 0;
// }

.close {
  position: fixed;
  top: 2em;
  right: 2em;
  padding: 0.5em;
  font-family: "Montserrat";
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 0.25em;
  border-color: rgb(157, 151, 151);
  color: rgb(157, 151, 151);
  font-size: 1em;
  cursor: pointer;
}

.close:hover {
  background-color: white;
  color: rgb(157, 151, 151);
}

@media screen and (max-width: 768px) and (orientation: portrait) {
  li:not(:nth-child(5)) {
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
  visibility: hidden;
  .nav__inner {
    width: 100%;
    height: 100%;
    pointer-events: none;
    .nav--items {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .nav--item {
        position: relative;
        width: 50%;
        height: 120px;
        margin-bottom: 2rem;
        overflow: hidden;
        &-link {
          .nav--link {
            cursor: pointer;
            display: block;
            text-decoration: none;
            display: flex;
            align-items: center;
            transform: translateY(100%);
            &-text {
              height: 100%;
              position: relative;
              font-family: "Kanit", sans-serif;
              font-weight: 800;
              font-size: 85px;
              text-transform: uppercase;
              letter-spacing: 6px;
              color: transparent;
              -webkit-text-stroke: 2px rgb(235, 235, 235);
              &::after {
                content: attr(data-text);
                position: absolute;
                left: 0;
                top: 0;
                color: rgb(235, 235, 235);
                clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
                transition: clip-path 400ms ease;
              }
            }
            &-icon {
              transform: translateX(-35%);
              opacity: 0;
              transition: transform 250ms ease, opacity 100ms linear;
              margin-left: 25px;
              svg {
                width: 100px;
                height: 100px;
                fill: rgb(235, 235, 235);
              }
            }
            &:hover {
              .nav--link-text::after {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
              }
              .nav--link-icon {
                transform: translateX(0%);
                opacity: 1;
              }
            }
          }
        }
        &-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: rgb(235, 235, 235);
          transform: scaleX(0);
        }
      }
    }
    .nav--transition-slide {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgb(19, 19, 19);
      transform: scaleX(0);
    }
  }
}

@media screen and (max-width: 1150px) {
    .nav .nav__inner .nav--items .nav--item-link .nav--link-text {
      font-size: 40px;
    }
}

@media screen and (max-width: 750px) {
    .nav .nav__inner .nav--items .nav--item-link .nav--link-text {
      font-size: 25px;
      -webkit-text-stroke: 1px rgb(235, 235, 235);
    }
    .nav .nav__inner .nav--items .nav--item {
      width: 80%;
    }
}

@media screen and (max-width: 320px) {
    .nav .nav__inner .nav--items .nav--item-link .nav--link-text {
      font-size: 20px;
      -webkit-text-stroke: 0.5px rgb(235, 235, 235);
    }
    .nav .nav__inner .nav--items .nav--item {
      width: 80%;
    }
}
</style>
