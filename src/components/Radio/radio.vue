<template>
  <label>
    <span class="fe-radio__input">
      <input type="radio" 
      :name="name"
      :disabled="disabled"
      :class="[
        radioSize ? `fe-radio__${radioSize}` : ''
      ]"
      :value="label"
      v-model="model"
    />
    </span>
    <span class="fe-radio__span"
      :class="[disabled ? 'fe-radio__disabled' : '']">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'FeRadio',
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
      if(this.$parent) {
        this._radioGroup = this.$parent
        return true
      }
      return false
    },
    model: {
      get() {
        // 这里为什么不能是 this.label
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set(val) {
        if (this.isGroup) {
          
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

<style>
.fe-radio__disabled {
  color: #c0c4cc
}
</style>
