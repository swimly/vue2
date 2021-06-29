<template>
  <div 
    class="m-scroller"
    :y="hasY"
    :x="hasX"
  >
    <div class="m-scroller-bar y" v-if="hasY">
      <div
        class="m-scroller-bar-handle"
        :style="handleStyle('barY')"
        ref="y"
        :value="bar.Y"
      ></div>
    </div>
    <div class="m-scroller-bar x" v-if="hasX">
      <div
        class="m-scroller-bar-handle"
        :style="handleStyle('barX')"
        ref="x"
        :value="bar.X"
      ></div>
    </div>
    <div
      class="m-scroller-content"
      :style="contentStyle"
      ref="content"
      @scroll="onScroll"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import utils from '../../../utils'
export default {
  name: 'm-scroller',
  props: {
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  },
  computed: {
    scrollBarWidth () {
      return utils.getScrollBarWidth()
    },
    contentStyle () {
      let style = {}
      const value = `${-this.scrollBarWidth}px`
      if (this.hasY) {
        style.marginRight = value
      }
      if (this.hasX) {
        style.marginBottom = value
      }
      return style
    }
  },
  data () {
    return {
      hasY: false,
      hasX: false,
      barY: null,
      barX: null,
      content: null,
      size: {},
      scroll: {
        y: this.scrollTop,
        x: this.scrollLeft
      },
      bar: {
        X: 0,
        Y: 0
      }
    }
  },
  mounted () {
    this.computedSize()
    this.$nextTick(() => {
      this.barY = this.$refs.y
      this.barX = this.$refs.x
      this.size = {
        h: this.content.parentNode.offsetHeight,
        sh: this.content.scrollHeight,
        w: this.content.parentNode.offsetWidth,
        sw: this.content.scrollWidth
      }
    })
  },
  created () {
  },
  methods: {
    onScroll () {
      this.scroll = {
        y: this.content.scrollTop,
        x: this.content.scrollLeft
      }
      this.$forceUpdate()
    },
    handleStyle (s) {
      const bar = this[s]
      let {w,sw,h,sh} = this.size
      if (!bar) return false;
      let scale = s === 'barY' ? h / sh : w / sw
      const size = s === 'barY' ? 'height' : 'width'
      const pos = s === 'barY' ? 'Y' : 'X'
      const value = s === 'barY' ? scale * h : scale * w
      const max = s === 'barY' ? sh - h : sw - w
      const maxB = s === 'barY' ? h - value : w - value
      const percent = s === 'barY' ? this.scroll.y / max : this.scroll.x / max
      this.bar[pos] = percent * maxB
      return {
        [size]: `${value}px`,
        transform: `translate${pos}(${percent * maxB}px)`
      }
    },
    computedSize () {
      const $content = this.$refs.content
      const sw = $content.scrollWidth
      const sh = $content.scrollHeight
      const w = $content.offsetWidth
      const h = $content.offsetHeight
      if (sh > h && sw < w) {
        this.hasY = true
      } else if (sw > w && sh < h) {
        this.hasX = true
      } else if (sw > w && sh > h) {
        this.hasY = true
        this.hasX = true
      }
      this.content = $content
    }
  }
}
</script>

<style lang="css" scoped>
@import './scroller.css';
</style>