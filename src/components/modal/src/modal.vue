<template>
  <div 
    class="m-modal"
    :style="modalStyle"
    ref="el"
    :visible="show"
  >
    <div
      class="m-modal-head"
      ref="head"
      :style="`margin-top:${-height.head}px`"
    >
      <div class="m-modal-title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="m-modal-append">

      </div>
    </div>
    <div class="m-modal-body" ref="body">
      <slot></slot>
    </div>
    <div class="m-modal-footer" ref="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'm-modal',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalStyle () {
      let style = {}
      style['padding-top'] = `${this.height.head}px`
      style['padding-bottom'] = `${this.height.footer}px`
      return style
    }
  },
  data () {
    return {
      el: null,
      show: this.visible,
      height: {
        head: 0,
        footer: 0
      }
    }
  },
  mounted () {
    const head = this.$refs.head
    const footer = this.$refs.footer
    this.el = this.$refs.el
    this.$nextTick(() => {
      this.height.head = head.offsetHeight
      this.height.footer = footer.offsetHeight
    })
  },
  created () {
  },
  methods: {
    onVisibleChange (v) {
      if (v) {
        this.el.style.display = 'block'
        setTimeout(() => {
          this.show = v
        }, 10)
      } else {
        this.show = v
        setTimeout(() => {
          this.el.style.display = 'none'
        }, 300)
      }
    }
  },
  watch: {
    'visible': 'onVisibleChange'
  }
}
</script>

<style lang="css" scoped>
@import './modal.css';
</style>