<template>
  <div>

    <!-- <h2 v-show="display">显示与隐藏</h2>

    <h3 v-if="switchPanel">组件切换</h3>

    <button @click="toggleBtn">切换按钮</button> -->

    <div class="el el-if" v-if="bln"><span v-show="false">hidden content</span></div>
    <div class="el el-else" v-else><span @click="toggle">visible  content</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      switchPanel: false,
      bln: false
    }
  },
  methods: {
    toggleBtn() {
      this.display = !this.display
      this.switchPanel = !this.switchPanel
    },
    toggle() {

    }
  }
}
</script>

<style>

</style>
