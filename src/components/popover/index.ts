import MPopover from './src/popover.vue'

MPopover.install = Vue => {
  Vue.components(MPopover.name, MPopover)
}
export default MPopover