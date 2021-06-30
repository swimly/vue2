<template>
  <div 
    class="m-scroller"
    :y="hasY"
    :x="hasX"
  >
    <div class="m-scroller-bar y" v-if="hasY" :style="{width: `${barWidth}px`}">
      <div
        class="m-scroller-bar-handle"
        :style="`background-color:${barColor};width:100%;`"
        ref="barY"
      ></div>
    </div>
    <div class="m-scroller-bar x" v-if="hasX" :style="{height: `${barWidth}px`}">
      <div
        class="m-scroller-bar-handle"
        :style="`background-color:${barColor};height:100%;`"
        ref="barX"
      ></div>
    </div>
    <div
      class="m-scroller-content"
      ref="content"
      :style="contentStyle"
      @scroll="onScroll"
    >
      <div class="m-scroller-wrap">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../../../utils'
import elementResizeDetectorMaker from 'element-resize-detector'
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
    },
    barWidth: {
      type: Number | String,
      default: 4
    },
    barColor: {
      type: String,
      default: 'rgba(0,0,0,0.3)'
    }
  },
  computed: {
    scrollBarWidth () {
      return utils.getScrollBarWidth()
    },
    contentStyle () {
      const barwidth = this.scrollBarWidth
      let style = {}
      style.marginRight = `${-barwidth}px`
      style.marginBottom = `${-barwidth}px`
      return style
    }
  },
  data () {
    return {
      hasY: false,
      hasX: false,
      barX: null,
      barY: null,
      scale: {
        y: 0,
        x: 0
      },
      maxS: {
        y: 0,
        x: 0
      },
      maxB: {
        y: 0,
        x: 0
      }
    }
  },
  mounted () {
    const erd = elementResizeDetectorMaker({
      strategy: 'scroll',
      callOnAdd: true
    })
    erd.listenTo(this.$refs.content.childNodes[0], (el) => {
      const width = el.parentNode.offsetWidth
      const height = el.parentNode.offsetHeight
      const swidth = el.offsetWidth
      const sheight = el.offsetHeight
      this.computedSize({w:width,h:height,sw:swidth,sh:sheight})
      this.$nextTick(() => {
        this.barY = this.$refs.barY
        this.barX = this.$refs.barX
        if (this.barY) {
          this.barY.style.height = `${height * this.scale.y}px`
          this.maxB.y = this.barY.parentNode.offsetHeight - this.barY.offsetHeight
        }
        if (this.barX) {
          this.barX.style.width = `${width * this.scale.x}px`
          this.maxB.x = this.barX.parentNode.offsetWidth - this.barX.offsetWidth
        }
      })
    })
  },
  created () {
  },
  methods: {
    onScroll () {
      const scrolltop = this.content.scrollTop
      const scrollleft = this.content.scrollLeft
      const ms = {
        y: scrolltop / this.maxS.y,
        x: scrollleft / this.maxS.x
      }
      if (this.barY) {
        this.barY.style.top = `${this.maxB.y * ms.y}px`
      }
      if (this.barX) {
        this.barX.style.left = `${this.maxB.x * ms.x}px`
      }
    },
    computedSize (obj) {
      const $c = this.$refs.content
      const {w,h,sw,sh} = obj
      if (sh > h && this.scrollBarWidth) {
        this.maxS.y = sh - h
        this.scale.y = h / sh
        this.hasY = true
      } else {
        this.hasY = false
      }
      if (sw > w && this.scrollBarWidth) {
        this.maxS.x = sw - w
        this.scale.x = w / sw
        this.hasX = true
      } else {
        this.hasX = false
      }
      this.content = $c
      this.$nextTick(() => {
        this.content.scrollTop = this.scrollTop
        this.content.scrollLeft = this.scrollLeft
      })
    },
    onScrollLeft (v) {
      let value = v >= this.maxS.x ? this.maxS.x : v
      this.content.scrollLeft = value
    },
    onScrollTop (v) {
      let value = v >= this.maxS.y ? this.maxS.y : v
      this.content.scrollTop = value
    }
  },
  watch: {
    'scrollLeft': 'onScrollLeft',
    'scrollTop': 'onScrollTop'
  }
}
</script>

<style lang="css" scoped>
@import './scroller.css';
</style>