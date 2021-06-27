import MButton from './components/button'
import MRow from './components/row'
import MCol from './components/col'
import MIcon from './components/icon'
import MInput from './components/input'
import MForm from './components/form'
import MFormItem from './components/form-item'
import MRadio from './components/radio'
import MRadioGroup from './components/radio-group'
import MCheckbox from './components/checkbox'
import MCheckboxGroup from './components/checkbox-group'

const components = [
  MButton,
  MRow,
  MCol,
  MIcon,
  MInput,
  MForm,
  MFormItem,
  MRadio,
  MRadioGroup,
  MCheckbox,
  MCheckboxGroup
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