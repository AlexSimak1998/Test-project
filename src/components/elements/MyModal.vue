<template>
   <div v-if="formData.name !='' && formData.email !='' ">
    <div v-if="isVisible" class="modal">
      <p><strong>Имя:</strong> {{ formData.name }}</p>
      <p><strong>Email:</strong> {{ formData.email }}</p>
      <p><strong>Пол:</strong> {{ formData.selectedOption === 'option1' ? 'мужской' : 'женский' }}</p>
      <p><strong>Сообщение:</strong> {{ formData.message }}</p>
    </div>
   </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: Boolean,
    },
    computed: {
    formData() {
      return this.$store.getters.getFormData;
  }
}
  }
  </script>

<style scoped lang="scss">

.modal{
   width: 500px;
   height: 500px;
   background: var(--color-bg);
   padding: 30px;
   height: 600px;
}
</style>




