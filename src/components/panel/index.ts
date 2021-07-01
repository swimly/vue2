import MPanel from './src/panel.vue'

MPanel.install = Vue => {
  Vue.components(MPanel.name, MPanel)
}
export default MPanel