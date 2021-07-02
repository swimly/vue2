import MGrid from './src/grid.vue'

MGrid.install = Vue => {
  Vue.components(MGrid.name, MGrid)
}
export default MGrid