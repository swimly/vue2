import Vue from 'vue'
import Component from './src/message.vue'

let Constructor = Vue.extend(Component)
let instance

const wrapdom = () => {
  let wrap = document.querySelector('.m-message-group')
  if (!wrap) {
    wrap = document.createElement('div')
    wrap.className = 'm-message-group'
    document.body.appendChild(wrap)
  }
  return wrap
}

const show = (options = {}) => {
  instance = new Constructor({
    data: options
  })
  wrapdom().appendChild(instance.$mount().$el)
  instance.open()
}

const hide = () => {
  instance.close()
}

export default {
  show,
  hide
}