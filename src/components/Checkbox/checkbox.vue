<template>
  <label>
    <span 
      class="checkbox__input"
      :class="{
        'is-checked': isChecked,
        'is-disabled': isDisabled,
        'is-focus': focus
      }">
      <span class="checkbox__inner"></span>
      <input
        class="checkbox__original"
        type="checkbox"
        :disabled="disabled"
        v-model="model"
        @change="change"
        @focus="focus = true"
        @blur="focus = false" />

    </span>
    <span class="checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'fCheckbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data: function() {
    return {
      selfModel: false,
      focus: false
    }
  },
  computed: {
    model: {
      get() {
        return this.value !== undefined 
          ? this.value 
          : this.selfModel
      },
      set(val) {
        this.$emit('input', val)
        this.selfModel = val
      }
    },
    isChecked() {
      return this.model
    },
    isDisabled() {
      return this.disabled
    }
  },
  methods: {
    change(event) {
      if(this.disabled) return false

      let checked = event.target.checked
  
      this.$emit('on-change', checked)
    }
  }
}
</script>
<style scoped lang="scss">
.checkbox__input {
  cursor: pointer;
  vertical-align: middle;
  line-height: 1
}
.checkbox__input.is-focus .checkbox__inner {
  border-color: #409eff;
}
.checkbox__input.is-checked .checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;

  &:after {
    transform: rotate(45deg) scaleY(1);
  }
}
.checkbox__inner {
  position: relative;
  display: inline-block;
  border: 1px solid #DCDFE6;
  border-radius: 2px;
  width: 14px;
  height: 14px;
  background: #fff;

  &:after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }
}
.checkbox__original {
  opacity: 0;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
}
.checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 14px;
}
</style>