<template>
  <div id="app">
    <fe-radio v-model="radio" label="123">备选项1</fe-radio>
    <fe-radio v-model="radio" label="456">备选项2</fe-radio>
    <fe-radio v-model="radio" label="789">备选项3</fe-radio>
    <fe-radio v-model="radio1" disabled label="选中且禁用">备选项4</fe-radio>
    <fe-radio v-model="radio2" label="000" border size="medium">备选项5</fe-radio>
    <fe-radio v-model="radio2" label="111" border size="small">备选项6</fe-radio>
    <fe-radio v-model="radio2" label="222" border size="mini">备选项7</fe-radio>
    <fe-radio-group v-model="radio2" @change="clickRadioGroup">
      <fe-radio :label="1">组合1</fe-radio>
      <fe-radio :label="2">组合2</fe-radio>
      <fe-radio :label="3">组合3</fe-radio>
    </fe-radio-group>
  </div>
</template>

<script>
import FeRadio from './components/Radio'
import FeRadioGroup from './components/RadioGroup'
export default {
  name: 'app',
  components: {
    FeRadio,
    FeRadioGroup
  },
  data: function () {
    return {
      radio: '123',
      radio1: '选中且禁用',
      radio2: 222
    }
  },
  methods: {
    clickRadioGroup(val) {
      console.log(val)
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
