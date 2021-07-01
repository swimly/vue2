import MBookmark from './src/bookmark.vue'

MBookmark.install = Vue => {
  Vue.components(MBookmark.name, MBookmark)
}
export default MBookmark