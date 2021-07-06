import MMessage from './src/message.vue'

MMessage.install = Vue => {
  Vue.components(MMessage.name, MMessage)
}
export default MMessage