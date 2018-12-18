<template>
  <div class="fe-col"
  :class="[
    span !== 24 ? `fe-col--${span}` : '',
    offset !== 0 ? `fe-col--offset` : ''
  ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    tag: {
      type: String,
      default: 'div'
    }
  }

}
</script>

<style>

</style>
