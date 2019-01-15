<template>
  <div id="app">
    <fe-switch
      v-model="value2"
      width="100"
      active-text="按月付费"
      inactive-text="按年付费" 
      @change="switchChange">
    </fe-switch>
    <fe-switch
      style="display: block"
      v-model="value4"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费">
    </fe-switch>
  </div>
</template>

<script>
import FeIcon from './components/Icon'
import FeButton from './components/Button'
import TogglePanel from './arrange/show&if'
import FeSwitch from './components/Switch'
export default {
  name: 'app',
  components: {
    FeSwitch
  },
  data: function () {
    return {
      value2: true,
      value4: false
    }
  },
  methods: {
    switchChange(val) {
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
