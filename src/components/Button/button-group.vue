<template>
  <div class="fe-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FeButtonGroup'
}
</script>

<style lang="scss">
.fe-button-group {
  display: inline-block;
  vertical-align: middle;

  &::before, &::after {
    display: table;
    content: "";
  }

  &::after {
    clear: both;
  }
}
</style>
