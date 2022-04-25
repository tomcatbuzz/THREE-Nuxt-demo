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
            <button>
              Bitch Button
            </button>
          </li>
        </ul>
      </nav>
      <!-- <FullNav /> -->
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
// eslint-disable-next-line import/no-named-as-default
// import gsap from 'gsap'
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
  mounted () {}
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
  color: red;
  font-weight: bold;
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
</style>
