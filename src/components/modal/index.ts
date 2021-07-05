import MModal from './src/modal.vue'

MModal.install = Vue => {
  Vue.components(MModal.name, MModal)
}
export default MModal