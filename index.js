import MButton from './src/components/button'
import MRow from './src/components/row'
import MCol from './src/components/col'
import MIcon from './src/components/icon'
import MInput from './src/components/input'
import MForm from './src/components/form'
import MFormItem from './src/components/form-item'

const components = [
  MButton,
  MRow,
  MCol,
  MIcon,
  MInput,
  MForm,
  MFormItem
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