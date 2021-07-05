<template>
  <div 
    class="m-paragraph"
    :style="textStyle"
    ref="el"
  >
    <span class="m-paragraph-source" ref="source"><slot></slot></span>
    <span class="m-paragraph-content" ref="content"></span>
    <span class="m-paragraph-more" v-if="!loading" @click="toggle">{{show ? foldText : unfoldText}}</span>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: "m-paragraph",
  props: {
    rows: {
      type: Number,
      default: 2,
    },
    content: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 16
    },
    lineHeight: {
      type: Number,
      default: 1.6
    },
    visible: {
      type: Boolean,
      default: false
    },
    foldText: {
      type: String,
      default: '收起'
    },
    unfoldText: {
      type: String,
      default: '展开'
    }
  },
  computed: {
    textStyle () {
      return {
        fontSize: `${this.size}px`,
        lineHeight: `${this.lineHeight}`
      }
    },
    maxHeight () {
      return Math.floor(this.size * this.lineHeight * this.rows)
    }
  },
  data () {
    return {
      source: '',
      loading: true,
      show: this.visible
    }
  },
  mounted() {
    this.source = this.$refs.source.innerHTML
    const erd = elementResizeDetectorMaker({
      strategy: 'scroll',
      callOnAdd: true
    })
    erd.listenTo(this.$refs.el, (el) => {
      this.renderString()
    })
  },
  methods: {
    renderString () {
      for (let i = 0; i < this.source.length; i ++) {
        this.$refs.content.innerHTML = this.source.slice(0, i)
        const cheight = this.$refs.content.scrollHeight
        if (cheight > this.maxHeight && !this.show) {
          this.$refs.content.innerHTML = this.source.slice(0, i - 3)
          this.loading = false
          return false
        }
      }
    },
    toggle () {
      this.show = !this.show
      this.renderString()
    }
  },
};
</script>

<style lang="css" scoped>
@import "./paragraph.css";
</style>