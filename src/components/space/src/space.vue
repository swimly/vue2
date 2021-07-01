<template>
  <div
    class="m-space"
    :style="marginStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-space',
  props: {
    direction: {
      type: String,
      default: 'top'
    },
    size: {
      type: String | Number,
      default: 12
    }
  },
  computed: {
    marginStyle () {
      const arr = this.direction.split(',') || this.direction.split(' ')
      let style = {}
      arr.forEach(item => {
        style[`margin-${item}`] = `${this.size}px`
      })
      return style
    }
  }
}
</script>

<style lang="css" scoped>
@import './space.css';
</style>