<template>
    <div class="textarea-component">
        <div class="textarea-component-label">
            <label v-if="label">{{ label }}</label>
            <p>Символов: {{ countValue }}</p>
        </div>
        <textarea v-model="inputValue" :placeholder="placeholder" @input="$emit('update:modelValue', inputValue)">
      </textarea>
    </div>
</template>
  
<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputValue: this.modelValue,
            countValue: '0'
        };
    },
    watch: {
        modelValue(newValue) {
            this.inputValue = newValue;
            this.countValue = this.inputValue.length
        }
    }
}
</script>
  
<style scoped>
.textarea-component-label {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.textarea-component textarea {
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: vertical;
    box-sizing: border-box;
}
.textarea-component textarea:focus {
  border: none;
  outline:var(  --color-blue) 2px solid;
}

.textarea-component label {
    display: block;
    margin-bottom: 5px;
}
</style>