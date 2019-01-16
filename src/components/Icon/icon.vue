<template>
  <i :class="`fe-icon-${name}`"></i>
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
@import '../../assets/style/icon.scss';
.fe-icon-info:before { content: "\e61a"; }
</style>
