<template>
  <div class="m-grid-item" :last="last" :direction="direction" ref="item" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-grid-item',
  inject: ['direction', 'gutter', 'position'],
  props: {
    span: {
      type:  Number,
      default: 0
    },
    paved: {
      type: Boolean,
      default: false
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemStyle () {
      let style = {}
      const {span, direction, gutter, position, pos} = this
      const p = direction === 'horizontal' ? 'width' : 'height'
      style[p] = span ? `${100/24*span}%` : 'auto'
      const value = `${gutter/2}px`
      style['padding-left'] = pos.left <= position.left ? '0px' : value
      style['padding-top'] = pos.top > position.top ? value : '0px'
      const sh = this.paved ? position.lasted : pos.height
      style['padding-bottom'] = (position.top + position.height) - (pos.top + sh) < 1 ? '0px' : value
      style['padding-right'] = (position.left + position.width) - (pos.left + pos.width) < 1 ? '0px' : value
      if (this.paved) {
        style['height'] = position.height - position.lasted + 'px'
      }
      return style
    }
  },
  data () {
    return {
      pos: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      }
    }
  },
  mounted () {
    const pos = this.$refs.item.getBoundingClientRect()
    this.pos.top = pos.top
    this.pos.left = pos.left
    this.pos.width = pos.width
    this.pos.height = pos.height
    if (!this.paved && this.$parent.updateLasted) {
      this.$parent.updateLasted(pos.height)
    }
  }
}
</script>

<style lang="css" scoped>
@import './grid-item.css';
</style>