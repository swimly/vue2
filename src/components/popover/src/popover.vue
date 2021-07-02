<template>
  <div @click.stop="onShow" class="m-popover" ref="el" :placement="place">
    <slot></slot>
    <div
      class="m-popover-panel"
      :placement="place"
      ref="content"
      :style="panelStyle"
      :pos="string"
    >
      <span v-if="indicate" class="m-popover-indicate" :style="indicateStyle"></span>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: 'm-popover',
  props: {
    placement: {
      type: String,
      default: 'botton-right'
    },
    visible: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 12
    },
    indicate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    indicateStyle () {
      const {offset} = this
      const p = this.place.split('-')
      let style = {}
      if (p[1] === 'left') {
        style['left'] = offset/2 + 'px'
      } else if (p[1] === 'right') {
        style['right'] = offset/2 + 'px'
      }
      return style
    },
    wrap () {
      return {
        width: this.content.offsetWidth,
        height: this.content.offsetHeight
      }
    },
    string () {
      return JSON.stringify(this.origin)
    },
    panelStyle () {
      const {origin, offset} = this
      if (!origin) return
      let style = {}
      const p = this.place.split('-')
      switch (p[0]) {
        case 'bottom' :
          style['top'] = origin.top + origin.height + offset + 'px'
          break
        case 'top':
          style['bottom'] = origin.bottom + origin.height + offset + 'px'
          style['top'] = 'auto'
          break
        case 'left':
          style['right'] = origin.right + origin.width + offset + 'px'
          style['left'] = 'auto'
          break
        case 'right':
          style['left'] = origin.left + origin.width + offset + 'px'
      }
      const isHorizontal = p[0] === 'top' || p[0] === 'bottom'
      switch (p[1]) {
        case 'left':
          style['left'] = origin.left + 'px'
          break
        case 'right':
          style['left'] = 'auto'
          style['right'] = origin.right + 'px'
          break
        case 'top':
          style['top'] = origin.top + 'px'
          break
        case 'bottom':
          style['top'] = 'auto'
          style['bottom'] = origin.bottom + 'px'
          break
        case undefined :
          isHorizontal ? style['left'] = origin.left + origin.width / 2 + 'px' : style['top'] = origin.top + origin.height / 2 + 'px'
          style['transform'] = isHorizontal ? `translateX(-50%)` : `translateY(-50%)`
      }
      return style
    }
  },
  data () {
    return {
      el: null,
      content: null,
      origin: null,
      place: this.placement,
      show: this.visible
    }
  },
  mounted () {
    this.el = this.$refs.el
    this.content = this.$refs.content
    document.body.appendChild(this.content)
    const erd = elementResizeDetectorMaker({
      strategy: 'scroll',
      callOnAdd: true
    })
    erd.listenTo(document.body, (el) => {
      this.init(el)
    })
  },
  methods: {
    init (el) {
      const p = this.el.getBoundingClientRect()
      const width = el.offsetWidth
      const height = el.offsetHeight
      this.origin = {
        left: p.left,
        top: p.top,
        right: width - p.left - p.width,
        bottom: height - p.top - p.height,
        width: p.width,
        height: p.height
      }
      document.body.addEventListener('click', (e) => {
        this.show = false
      })
    },
    onShow () {
      this.show = true
    },
    onVisibleChange (v) {
      if (v) {
        this.content.style.display = 'block'
        this.content.style.transition = '0.3s'
        setTimeout(() => {
          this.content.setAttribute('visible', '')
        }, 20)
      } else {
        this.content.removeAttribute('visible')
        setTimeout(() => {
          this.content.style.display = 'none'
          this.content.style.transition = '0s'
        }, 300)
      }
    }
  },
  created () {
  },
  watch: {
    'show': "onVisibleChange"
  }
}
</script>

<style lang="css" scoped>
@import './popover.css';
</style>