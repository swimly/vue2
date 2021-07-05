import Vue from 'vue'
import Component from './src/mask.vue'

let Constructor = Vue.extend(Component)
let instance

const show = (options = {}) => {
  instance = new Constructor({
    data: options
  })
  document.body.appendChild(instance.$mount().$el)
  instance.open()
}

const hide = () => {
  instance.close()
}

export default {
  show,
  hide
}