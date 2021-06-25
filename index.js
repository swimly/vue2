import MButton from './src/components/button'
import MRow from './src/components/row'
import MCol from './src/components/col'
import MIcon from './src/components/icon'

const components = [
  MButton,
  MRow,
  MCol,
  MIcon
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