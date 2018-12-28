<template>
  <div class="fe-input"
  :class="[
    {
      'is-disabled': disabled
    }
  ]">
    <input
    class="fe-input__inner"
    :type="iptType"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="model"
    />
    
    <span
    class="fe-input__suffix"
    ></span>
    
  </div>
</template>

<script>
export default {
  name: 'fe-input',
  props: {
    type: {
      default: 'text',
      type: String
    },
    value: [String, Number],
    maxlength: Number,
    minlength: Number,
    placeholder: String,
    clearable: Boolean,
    disabled: Boolean,
    size: String,
    rows: Number,
    autosize: [Boolean, Object],
    autocomplete: String,
    name: String,
    readonly: Boolean,
    resize: String,
    autofocus: Boolean,
    form: String,
    label: String,
    tabindex: String,
    validateEvent: Boolean
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    iptType() {
      if(this.type === 'textarea') {

      }
      return this.type
    }
  }
}
</script>

<style lang="scss">
.fe-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
}
.fe-input.is-disabled .fe-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
.fe-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
  &:focus {
    outline: none;
    border-color: #409eff;
  }
}
</style>
