<template>
    <div class="input-wrapper">
      <input
        :id="label"
        :type="type"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="$emit('update:modelValue', inputValue)"
      />
    </div>
  </template>

  <style scoped lang="scss">
.wrapper{
    input{
        width: 100%;
        font-size: 15px;
        padding: 8px 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
    }
    input:focus{
        border: none;
      outline:var(  --color-blue) 2px solid;
    }
}

</style>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
      return {
        inputValue: this.modelValue
      };
    },
    watch: {
      modelValue(newValue) {
        this.inputValue = newValue;
      }
    }
  };
  </script>