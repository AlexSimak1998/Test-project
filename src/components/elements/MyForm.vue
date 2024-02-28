<template>
    <form @submit.prevent="submitForm" class="form">
        <div class="form__header">
            <MyInput v-model="formData.name" label="Имя" placeholder="Введите ваше имя" />
            <MyInput v-model="formData.email" label="Email" placeholder="Введите ваш email" type="email" />
        </div>
        <div class="form__body">
            <strong>пол</strong>
            <div class="radio-block">
                <MyRadio v-model="selectedOption" value="option1" label="Мужской" />
                <MyRadio v-model="selectedOption" value="option2" label="Женскйий" />
            </div>
            <MyTextarea v-model="message" placeholder="Введите ваше сообщение" label="Сообщение"></MyTextarea>
            <MyCheckbox v-model="isChecked" label="Согласен с условиями" />
        </div>
        <div class="form__futer">
            <Btn @click="submitForm">
                <span class="my-custom-btn">Отправить</span>
            </Btn>
        </div>
    </form>
</template>
<script>
import MyInput from './UI/MyInput.vue';
import MyRadio from './UI/MyRadio.vue';
import MyTextarea from './UI/MyTextarea.vue';
import MyCheckbox from './UI/MyCheckbox.vue';
import Btn from './UI/Btn.vue';
export default {
    components: {
        MyInput,
        MyRadio,
        MyTextarea,
        MyCheckbox,
        Btn
    },
    data() {
        return {
        formData: {
            name: '',
            email: '',
        },
        selectedOption: 'option1',
        message: '',
        isChecked: false,
        showModal: false,
        alertShown: false,
    };
    },
    methods: {
        submitForm() {

            if ((this.formData.name.trim() === '' || this.formData.email.trim() === '') && !this.alertShown) {
      alert('Заполните поля');
      this.alertShown = true;
  } else {
    const formDataCopy = { ...this.formData, selectedOption: this.selectedOption, message: this.message };
    this.$store.dispatch('submitFormData', formDataCopy);
    this.$emit('openModal');
    this.deleteForm();
    this.alertShown = false;
  }
    },
    deleteForm() {
        console.log('очистка формы');
        // this.formData.name = '';
        // this.formData.email = '';
        // this.message = '';
        // this.selectedOption = 'option1';
        // this.isChecked = false;
    }
}}
</script>

<style lang="scss" scoped>
form {
    background: var(--color-bg);
    padding: 30px;
    height: 600px;

    .radio-block {
        margin-bottom: 20px;
        display: flex;
        width: 50%;
        justify-content: space-between;
    }

    .my-custom-btn {
        cursor: pointer;
        border: 1px solid var(--color-blue);
        padding: 10px;
        color: var(--color-blue);
    }

    .form__futer {
        display: flex;
        justify-content: end;
    }
}
</style>