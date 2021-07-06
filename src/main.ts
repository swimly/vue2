import MButton from './components/button/button.jsx'

const components = [
  MButton
]

const install = function (Vue) {
  components.forEach(com => {
    Vue.component(com.name, com)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}