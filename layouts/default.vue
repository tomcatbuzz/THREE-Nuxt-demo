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
        <button
          class="js-menu menu button-clear menu-white menu-spinkit"
          aria-label="Site navigation"
        >
          <span class="menu-icon-line-1 menu-icon-line" />
          <span class="menu-icon-line-2 menu-icon-line" />
          <span class="menu-icon-line-3 menu-icon-line" />
        </button>
      </nav>
    </header>
    <div class="site-nav-overlay js-nav">
      <div class="nav-content">
        <div class="js-nav-header nav-header">
          <span class="nav-header-text">Tobias Ahlin</span>
          <div class="nav-header-line js-nav-header-line" />
        </div>

        <ul class="nav-categories">
          <li class="nav-category js-nav-animate">
            <a href="/" class="nav-link">Overview</a>
          </li>
          <li class="nav-category js-nav-animate">
            <a href="/blog/" class="nav-link">Blog</a>
          </li>
          <li class="nav-category js-nav-animate">
            <a href="/blog/tutorials/" class="nav-link">Tutorials</a>
          </li>
          <li class="nav-category js-nav-animate">
            <a href="/speaking/" class="nav-link">Speaking</a>
          </li>
        </ul>

        <div class="nav-sublinks js-nav-animate">
          <div class="js-nav-animate">
            <a class="nav-link nav-sublink" href="/moving-letters/">Moving Letters</a>
            <a class="nav-link nav-sublink" href="/typesource/">TypeSource</a>
            <a class="nav-link nav-sublink" href="/spinkit/">SpinKit</a>
          </div>
        </div>
      </div>
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
    const select = selector => document.querySelector(selector)
    select('.js-menu').addEventListener('click', (e) => {
      e.preventDefault()
      gsap.to('.site-nav-overlay', {
        opacity: 1,
        ease: 'power1.Out'
      })
    })
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

.button-clear {
  border: none;
  background-color: transparent;
}

.button-clear:focus {
  outline: 0;
}

.menu {
  transform: translateZ(100px);
  top: 10px;
  right: 10px;
}

.nav {
  transform: translateZ(100px);
}

.menu-spinkit .menu-icon-line {
  background-color: rgba(255, 255, 255, 0.7);
}

.menu-spinkit:hover > .menu-icon-line,
.menu-spinkit.menu-active > .menu-icon-line {
  background-color: #fff;
}

.menu {
  position: absolute;
  top: 0.5vmin;
  right: 1.7vmin;
  margin-left: 1em;
  z-index: 2004;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  width: 43px;
  padding: 10px;
  cursor: pointer;
}

.menu-hidden {
  visibility: hidden;
  pointer-events: none;
}

.menu-icon-line {
  display: block;
  height: 2px;
  width: 100%;
  background-color: #a5acbc;
  margin-bottom: 4px;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.2s ease-out;
  transform: translateZ(0);
}

.menu:hover > .menu-icon-line {
  background-color: #8591ac;
  transform: scaleX(1.2);
}

.menu-active > .menu-icon-line-1,
.menu-active:hover > .menu-icon-line-1 {
  transform: translateY(6px) rotateZ(-135deg);
  background-color: #fff;
}

.menu-active > .menu-icon-line-2,
.menu-active:hover > .menu-icon-line-2 {
  opacity: 0;
  background-color: #fff;
}

.menu-active > .menu-icon-line-3,
.menu-active:hover > .menu-icon-line-3 {
  transform: translateY(-6px) rotateZ(135deg);
  background-color: #fff;
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
  transform: scaleZ(2)
}

.site-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2003;
    text-align: center;
    font-size: 40px;
    font-family: Inter, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
    font-weight: bold;
    opacity: 0;
    color: #fff;
    pointer-events: none;
    overflow: hidden
}
.site-nav-overlay-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2002;
    text-align: left;
    font-family: Inter, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
    font-weight: bold;
    opacity: 0;
    color: #fff;
    pointer-events: none;
    overflow: scroll
}
.site-nav-active {
    pointer-events: initial
}
.nav-content {
    width: 620px;
    max-width: 100%;
    margin: 40px auto;
    margin-top: 18vh;
    padding: 0 60px;
    box-sizing: border-box
}
@media all and (max-width: 600px) {
    .nav-content {
        padding-right: 30px;
        padding-left: 30px;
        font-size: 32px
    }
}
@media all and (max-height: 720px) {
    .nav-content {
        margin-top: 15vh;
        font-size: 32px
    }
}
@media all and (max-height: 600px) {
    .nav-content {
        margin-top: 10vh
    }
}
@media all and (max-height: 500px) {
    .nav-content {
        margin-top: 6vh
    }
}
.nav-header {
    width: 100%;
    margin: 0 auto;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    font-weight: bold;
    position: relative;
    transform: translateZ(0)
}
.nav-header-line {
    display: block;
    height: 2px;
    width: 100%;
    z-index: -1;
    background-color: #fff;
    position: absolute;
    top: 12px;
    transform: scaleX(.3)
}
.nav-header-text {
    padding: 0 10px;
    z-index: 1;
    position: relative;
    background-color: #1f4954
}
.nav-categories {
    padding: 20px 0 30px;
    list-style-type: none;
    overflow: hidden;
    margin: 0 auto;
    transform: translateZ(0)
}
.nav-category {
    padding: 0;
    position: relative;
    display: block
}
.nav-link {
    display: inline-block;
    color: inherit;
    padding: 27px 20px 30px;
    letter-spacing: 1px;
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    transform: translateZ(0)
}
.nav-link:hover {
    color: #566871
}
.nav-link:hover::after {
    transform: scaleY(1)
}
.nav-link::after {
    content: "";
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: 0 100%;
    transition: all 0.25s ease-in-out;
    z-index: -1
}
@media all and (max-height: 720px) {
    .nav-link {
        padding-top: 20px;
        padding-bottom: 20px
    }
}
@media all and (max-height: 550px) {
    .nav-link {
        padding-top: 15px;
        padding-bottom: 15px
    }
}
@media all and (max-height: 450px) {
    .nav-link {
        padding-top: 10px;
        padding-bottom: 10px
    }
}
.nav-sublinks {
    font-size: 0.4em;
    color: #80bece;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 2px solid #3e6c78;
    border-bottom: 2px solid #3e6c78;
    width: 100%;
    text-align: center
}
@media all and (max-height: 550px) {
    .nav-sublinks {
        padding-top: 20px;
        padding-bottom: 20px
    }
}
@media all and (max-height: 450px) {
    .nav-sublinks {
        padding-top: 10px;
        padding-bottom: 10px
    }
}
.nav-sublink {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    padding: 10px 0;
    width: 32%;
    vertical-align: middle
}
.nav-sublink:hover {
    color: #3e6c78
}
.nav-sublink::after {
    background-color: #80bece
}
.no-scroll {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%
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
