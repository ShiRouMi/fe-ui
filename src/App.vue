<template>
  <div id="app">
    <fe-radio v-model="radio" label="123">备选项1</fe-radio>
    <fe-radio v-model="radio" label="456">备选项2</fe-radio>
    <fe-radio v-model="radio" label="789">备选项3</fe-radio>
    <fe-radio v-model="radio1" disabled label="选中且禁用">备选项4</fe-radio>
    <fe-radio v-model="radio" label="000" size="mini">备选项5</fe-radio>
    <!-- <fe-radio-group v-model="radio2">
      <fe-radio :label="1">组合1</fe-radio>
      <fe-radio :label="2">组合2</fe-radio>
      <fe-radio :label="3">组合3</fe-radio>
    </fe-radio-group> -->
  </div>
</template>

<script>
// import {FeRadio, FeRadioGroup} from './components/Radio'
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
      radio2: 3
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
