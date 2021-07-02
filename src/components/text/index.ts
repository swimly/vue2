import MText from './src/text.vue'

MText.install = Vue => {
  Vue.components(MText.name, MText)
}
export default MText