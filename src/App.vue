<template>
  <div id="app">
    <fe-input placeholder="请输入" v-model="iptValue" disabled></fe-input>
  </div>
</template>

<script>
import FeInput from './components/Input'
export default {
  name: 'app',
  components: {
    FeInput
  },
  data: function () {
    return {
      iptValue: 'test'
    }
  },
  methods: {
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
