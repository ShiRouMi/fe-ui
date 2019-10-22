import "./assets/style/color.scss"
import "./assets/style/icon.scss"

import Button from "./components/Button"
import Icon from "./components/Icon"
import Input from "./components/Input"
import Layout from "./components/Layout"
import Pagination from "./components/Pagination"
import Radio from "./components/Radio"
import RadioGroup from "./components/RadioGroup"
import Switch from "./components/Switch"
import Tree from "./components/Tree"
const components = {
  Button,
  Icon,
  Input,
  Layout,
  Pagination,
  Switch,
  Radio,
  RadioGroup,
  Tree
}

const install = function(Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default install
