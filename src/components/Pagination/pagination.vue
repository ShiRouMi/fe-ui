<template>
  
</template>

<script>
export default {
  name: 'FePagination',
  props: {
    small: Boolean,
    background: Boolean,
    pageSize: {
      type: Number,
      default: 10
    },
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      default: 7
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: String,
    pageSizes: {
      type: Array,
      default: function() {
        return [10, 20, 30, 40, 50, 100]
      }
    },
    popperClass: String,
    prevText: String,
    nextText: String,
    disabled: Boolean
  }
}
</script>

<style>

</style>
