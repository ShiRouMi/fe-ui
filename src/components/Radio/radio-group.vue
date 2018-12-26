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
  create () {
    // this.$on('handleChange', value => {
    //   this.$emit('change', value)
    // })
  }
}
</script>

<style>

</style>
