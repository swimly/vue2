<template>
  <div
    class="m-row"
    :wrap="wrap"
    :type="type"
    :direction="direction"
    ref="row"
    :style="`
      margin: ${-gutter/2}px;
    `"
  >
    <slot v-bind:wrap="wrap"></slot>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: 'm-row',
  provide () {
    return {
      gutter: this.gutter,
      wrap: this.wrap,
      type: this.type
    }
  },
  props: {
    wrap: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    gutter: {
      type: Number | String,
      default: 0
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    async: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.asyncRender()
  },
  methods: {
    asyncRender () {
      if (!this.async || this.type) return false
      const erd = elementResizeDetectorMaker({
        strategy: 'scroll',
        callOnAdd: true
      })
      erd.listenTo(this.$refs.row, (el) => {
        const height = el.offsetHeight
        let other = 0
        let pavedDom = null
        const cols = el.childNodes
        cols.forEach((col) => {
          if (col.className && col.className.indexOf('m-col') >= 0) {
            const paved = col.getAttribute('paved')
            if (paved === null) {
              other += col.offsetHeight
            } else {
              pavedDom = col
            }
          }
        })
        pavedDom.style.height = `${height - other}px`
      })
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './row.css';
</style>