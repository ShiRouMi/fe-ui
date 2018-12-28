<template>
  <i :class="`${name}`"></i>
</template>

<script>
export default {
  name: 'FeIcon',
  props: {
    name: String
  }
}
</script>

<style>
@import '../Style/icon.scss';
.fe-icon-info:before { content: "\e61a"; }
</style>
