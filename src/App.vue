<template>
  <div id="app">
    <fe-button size="medium">测试</fe-button>
  </div>
</template>

<script>
import FeButton from './components/Button'
export default {
  name: 'app',
  components: {
    FeButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
