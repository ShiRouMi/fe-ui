import FeRow from './row.vue'
import FeCol from './col.vue'

const Layout = {}
Layout.install = function(Vue) {
  Vue.component(FeRow.name, FeRow)
  Vue.component(FeCol.name, FeCol)
} 

export default Layout