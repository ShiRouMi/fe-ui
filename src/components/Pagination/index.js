import FePagination from './pagination.vue'

FePagination.install = function(Vue) {
  Vue.component(FePagination.name, FePagination)
}
export default FePagination