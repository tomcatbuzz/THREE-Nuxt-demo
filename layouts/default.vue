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
