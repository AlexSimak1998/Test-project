<template>
    <div class="radio-wrapper" @click="selectOption">
      <div class="radio-outer-circle">
        <div class="radio-inner-circle" v-if="isSelected"></div>
      </div>
      <label>{{ label }}</label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String,
      value: String,
      label: String
    },
    computed: {
      isSelected() {
        return this.modelValue === this.value;
      }
    },
    methods: {
      selectOption() {
        this.$emit('update:modelValue', this.value);
      }
    }
  };
  </script>
  
  <style scoped>
  .radio-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .radio-outer-circle {
    width: 15px;
    height: 15px;
    border-radius: 6px;
    border: 2px solid var(  --color-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: var(  --color-blue);
  }
  
  .radio-inner-circle {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color:var(  --color-blue);
  }
  
  label {
    user-select: none;
  }
  </style>