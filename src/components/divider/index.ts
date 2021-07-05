import MDivider from './src/divider.vue'

MDivider.install = Vue => {
  Vue.components(MDivider.name, MDivider)
}
export default MDivider