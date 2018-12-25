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
  methods: {
    change: function() {

    }
  }
}
</script>

<style>

</style>
