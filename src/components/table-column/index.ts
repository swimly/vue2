import MTableColumn from './src/table-column.vue'

MTableColumn.install = Vue => {
  Vue.components(MTableColumn.name, MTableColumn)
}
export default MTableColumn