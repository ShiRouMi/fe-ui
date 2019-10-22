<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<script>
import deepCopy from '@/utils/deepCopy.js'
import TreeNode from './node'
export default {
  name: 'tree',
  data: function() {
    return {
      cloneData: []
    }
  },
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.rebuildData()
  },
  watch: {
    data() {
      this.rebuildData()
    }
  },
  methods: {
    rebuildData() {
      this.cloneData = deepCopy(this.data)
    }
  }
}
</script>