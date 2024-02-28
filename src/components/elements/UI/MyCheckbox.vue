<template>
    <div class="checkbox-wrapper" @click="toggleCheck">
      <div :class="{ 'checkbox': true, 'checked': isChecked }"></div>
      <label>{{ label }}</label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        required: true
      }
    },
    computed: {
      isChecked: {
        get() {
          return this.modelValue;
        },
        set(newValue) {
          this.$emit('update:modelValue', newValue);
        }
      }
    },
    methods: {
      toggleCheck() {
        this.isChecked = !this.isChecked;
      }
    }
  };
  </script>
  
  <style>
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 20px 0;
  }
  
  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #555;
    border-radius: 6px;
    margin-right: 10px;
    position: relative;
  }

  .checkbox.checked{
    border:var(--color-blue) 2px solid;
  }
  
  .checked::before {
    content: "";
  position: absolute;
  left: -10%;
  top: calc(50% - 13px);
  width: 25px;
  height: 25px;
  background: radial-gradient(
    circle,
    #2E9AFF 0%,
    #2E9AFF 40%,
    transparent 50%,
    transparent 100%
  );
  }
  </style>