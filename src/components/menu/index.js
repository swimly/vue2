import MMenu from './src/menu.vue'

MMenu.install = Vue => {
  Vue.components(MMenu.name, MMenu)
}
export default MMenu