<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <input type="checkbox" 
        v-if="showCheckbox" 
        :value="data.checked"
        @input="handleCheck" />
      <span>{{data.title}}</span>

      <template 
        v-if="data.expand">
        <tree-node
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        ></tree-node>
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'TreeNode',
  props: {
    data: {
      default() {
        return {}
      },
      type: Object
    },
    showCheckbox: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleExpand() {

    },
    handleCheck() {

    }
  }
}
</script>
<style>
  .tree-ul, .tree-li{
    list-style: none;
    padding-left: 10px;
  }
  .tree-expand{
    cursor: pointer;
  }
</style>