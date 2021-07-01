import MImage from './src/image.vue'

MImage.install = Vue => {
  Vue.components(MImage.name, MImage)
}
export default MImage