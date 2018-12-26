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
export default {
  name: 'FeRadio',
  componentName: 'FeRadio',
  props: {
    value: {},
    label: [String, Number, Boolean],
    disabled: Boolean,
    border: Boolean,
    size: String,
    name: String
  },
  data: function () {
    return {
      radioGroup: null
    } 
  },
  computed: {
    isGroup: function () {
      let parent = this.$parent
      while(this.$parent) {
        if(parent.$options.componentName !== 'FeRadioGroup') {
          parent = parent.$parent
        } else {
          this.radioGroup = parent
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
          ? this.radioGroup.value 
          : this.value
      },
      set(val) {
        if (this.isGroup) {
          // this.radioGroup.$emit('input', val)
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
    change: function() {

    }
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
