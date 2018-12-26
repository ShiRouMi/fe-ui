<template>
  <div role="radiogroup" class="fe-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeRadioGroup',
  componentName: 'FeRadioGroup',
  props: {
    value: {}, // 天哪，这行代码太重要了
    size: String,
    disabled: Boolean,
    textColor: {
      type: String,
      default: '#fff'
    },
    fill: {
      type: String,
      default: '#409EFF'
    }
  },
  created () {
    // 在created的时候监听
    this.$on('handleChange', val => {
      this.$emit('change', val)
    })
  }
}
</script>

<style>

</style>
