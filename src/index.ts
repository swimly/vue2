import Vue from 'vue'
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
import MPage from './components/page'
import MMenu from './components/menu'
import MImage from './components/image'
import MScroller from './components/scroller'
import MBookmark from './components/bookmark'
import MPanel from './components/panel'
import MPaginaton from './components/pagination'
import MTable from './components/table'
import MTableColumn from './components/table-column'
import MSpace from './components/space'
import MPopover from './components/popover'
import MGrid from './components/grid'
import MGridItem from './components/grid-item'
import MTitle from './components/title'
import MText from './components/text'
import MParagraph from './components/paragraph'
import MDivider from './components/divider'
import MModal from './components/modal'
import MMask from './components/mask'

// 全局函数组件
import Mask from './components/mask/global'
Vue.prototype.$mask = Mask

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
  MCheckboxGroup,
  MPage,
  MMenu,
  MImage,
  MScroller,
  MBookmark,
  MPanel,
  MPaginaton,
  MTable,
  MTableColumn,
  MSpace,
  MPopover,
  MGrid,
  MGridItem,
  MTitle,
  MText,
  MParagraph,
  MDivider,
  MModal,
  MMask
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