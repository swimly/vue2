import MGridItem from './src/grid-item.vue'

MGridItem.install = Vue => {
  Vue.components(MGridItem.name, MGridItem)
}
export default MGridItem