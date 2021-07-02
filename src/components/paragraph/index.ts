import MParagraph from './src/paragraph.vue'

MParagraph.install = Vue => {
  Vue.components(MParagraph.name, MParagraph)
}
export default MParagraph