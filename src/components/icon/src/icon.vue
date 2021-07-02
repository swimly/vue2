<template>
  <span
    class="m-icon"
    :spin="spin"
    :type="type"
    :style="`width:${size}px;height:${size}px;color:${color};cursor:${cursor}`"
    @click="onClick"
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
    },
    type: {
      type: String,
      default: ''
    },
    cursor: {
      type: String,
      default: 'default'
    },
    hoverColor: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${this.name}`)
  },
  methods: {
    onClick (e) {
      this.$emit('vclick', e)
    }
  }
}
</script>

<style lang="css" scoped>
@import './icon.css';
</style>