<template>
  <label class="fe-radio"
    :class="[
    radioSize ? `fe-radio__${radioSize}` : '',
    {
      'is-border': border
    }]">
    <span class="fe-radio__input">
      <input type="radio" 
      :name="name"
      :disabled="isDisabled"
      :value="label"
      v-model="model"
    />
    </span>
    <span class="fe-radio__span"
      :class="[isDisabled ? 'fe-radio__disabled' : '']">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import emitter from '../../mixins/emitter.js'
export default {
  name: 'FeRadio',
  componentName: 'FeRadio',
  mixins: [emitter],
  props: {
    value: {},
    label: [String, Number, Boolean],
    disabled: Boolean,
    border: Boolean,
    size: String,
    name: String
  },
  computed: {
    isGroup: function () {
      let parent = this.$parent
      while(parent) {
        if(parent.$options.componentName !== 'FeRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    isDisabled: function () {
      return this.isGroup 
        ? this.$parent.disabled || this.disabled
        : this.disabled
    },
    model: {
      get() {
        // 这里为什么不能是 this.label
        return this.isGroup 
          ? this._radioGroup.value 
          : this.value
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('FeRadioGroup', 'input', val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    radioSize: function () {
      return this.size
    }
  },
  methods: {
    // handleChange: function() {
    //   this.$nextTick(() => {
    //     this.$emit('change', this.model)
    //     this.isGroup && this.dispatch('FeRadioGroup', 'handleChange', this.model)
    //   })
    // }
  }
}
</script>

<style lang="scss">
.fe-radio__disabled {
  color: #c0c4cc
}
.is-border {
  border: 1px solid #ccc;
}
.fe-radio {
  &__mini {
    padding: 6px 15px 0 10px;
    height: 28px;
  }
  &__small {
    padding: 8px 15px 0 10px;
    height: 32px;
  }
  &__medium {
    padding: 10px 20px 0 10px;
    height: 36px;
  }
}
</style>
