
<template>
  <div class="about">
    <header>
      <h1>
        Добавить запись
      </h1>
    </header>
    <main class="main">
      <MyForm @openModal="handleFormSubmit"/>
      <MyModal :isVisible="showModal" :formData="modalFormData" />
    </main>
  </div>
</template>


<script>
import MyForm from './elements/MyForm.vue';
import MyModal from './elements/MyModal.vue';

export default {
  components: {
    MyForm,
    MyModal
  },
 data() {
    return {
      showModal: false,
    };
  },
  methods: {
  
    handleFormSubmit() {
      this.showModal = true; 
    }
  }
}
</script>



<style lang="scss" scoped>
.about {
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

}
</style>