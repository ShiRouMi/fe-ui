<template>
  <div class="fe-row"
    :class="[
      gutter ? `fe-row--${gutter}` : '',
      {
        'fe-row--flex': type === 'flex'
      },
      justify !== 'start' ? `fe-row--${justify}` : '',
      align !== 'top' ? `fe-row--${align}` : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style>

</style>
