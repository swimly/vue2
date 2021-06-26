<template>
  <span
    class="m-icon"
    :spin="spin"
    :style="`width:${size}px;height:${size}px;color:${color};`"
  >
    <svg class="icon" aria-hidden="true" fill="currentColor">
      <use ref="use"></use>
    </svg>
  </span>
</template>

<script>
import '../assets/iconfont'
export default {
  name: 'm-icon',
  props: {
    size: {
      type: Number | String,
      default: 18
    },
    color: {
      type: String,
      default: ''
    },
    spin: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${this.name}`)
  }
}
</script>

<style lang="css" scoped>
@import './icon.css';
</style>