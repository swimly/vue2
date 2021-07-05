import Vue from 'vue'
import Mask from './src/mask.vue'

const constructor = Vue.extend(Mask)

const instance = new constructor()
document.body.appendChild(instance.$mount().$el)

export default instance