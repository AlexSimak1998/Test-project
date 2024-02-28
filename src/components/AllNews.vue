<script>
import PostList from './elements/PostList.vue'
export default {

  components: {
    PostList
  },
  methods: {
   
  },

}
</script>

<template>
  <header>
    <h1>Все новости</h1>
  </header>
  <main >
    <PostList />
  </main>
</template>

<style scoped>
main{
  padding: 0 20px;
 
}

</style>