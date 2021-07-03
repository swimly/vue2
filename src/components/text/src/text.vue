<template>
  <div 
    class="m-text"
    :type="type"
  >
    <span class="m-text-value"><slot></slot></span>
    <m-icon v-if="edit" name="more" cursor="pointer"></m-icon>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-text',
  components: {
    MIcon
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    edit: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css" scoped>
@import './text.css';
</style>