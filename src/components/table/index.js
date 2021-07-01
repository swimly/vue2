import MTable from './src/table.vue'

MTable.install = Vue => {
  Vue.components(MTable.name, MTable)
}
export default MTable