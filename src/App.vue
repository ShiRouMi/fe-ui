<template>
  <div id="app">
    <fe-button type="primary" size="medium">中</fe-button>
    <fe-button type="primary" size="small">小</fe-button>
    <fe-button type="primary" size="mini" round>超小</fe-button>
  </div>
</template>

<script>
import FeButton from './components/Button'
export default {
  name: 'app',
  components: {
    FeButton
  },
  data: function () {
    return {
      value2: true,
      value4: false
    }
  },
  methods: {
    switchChange() {
    }
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
