<template>
  <div class="m-grid" ref="grid" :style="`height:${height}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-grid',
  provide () {
    return {
      direction: this.direction,
      gutter: this.gutter,
      position: this.position
    }
  },
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    gutter: {
      type: String | Number,
      default: 0
    },
    height: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      position: {
        top: 12,
        left: 0,
        width: 0,
        height: 0,
        lasted: 0
      }
    }
  },
  mounted () {
    let c = 0
    const pos = this.$refs.grid.getBoundingClientRect()
    const {top,left,width,height} = pos
    this.position.top = top
    this.position.left = left
    this.position.width = width
    this.position.height = height
  },
  methods: {
    updateLasted (v) {
      this.position.lasted += v
    }
  }
}
</script>

<style lang="css" scoped>
@import './grid.css';
</style>