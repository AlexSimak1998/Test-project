
<template>
  <div class="wrapper">
    <nav>
      <header>
        <User />
      </header>

      <RouterLink to="/">
        <FontAwesomeIcon icon="house" />
      
        Все новоcти
      </RouterLink>

      <RouterLink to="/Create">
        <FontAwesomeIcon icon="pencil" />
        Добавить запись
      </RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import User from './components/elements/User.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencil, faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faPencil, faHouse)
export default {
  components: {
    User,
    FontAwesomeIcon
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 25% 75%;
  nav {
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0 5px var(--color-solid);
    position: sticky;
    height: 100vh;
    top: 0;
    a {
      border-top: 1px solid var(--color-solid);
      text-decoration: none;
      padding: 20px;
      font-weight: bold;
      color: var(--color-text);
      font-size: 20px;
    }
  }
  nav a.router-link-exact-active {
    color: var(  --color-blue);

  }
  main{
    background: rgb(212, 230, 255);
    padding: 30px;
  }

  p {
      letter-spacing: 1.5px;
      font-size: 20px;  
      color:var(--color-solid)
  }
}
</style>


