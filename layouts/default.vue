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
        <ul class="menu">
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
            <MaterialIconMenu id="menu" title="menu" />
          </li>
        </ul>
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
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  }

  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5em;
    width: 100%;
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
    text-transform: uppercase
  }

  #menu {
    color: blue;
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
    display: flex;
    height: 2.5em;
    width: 100%;
  }
</style>
