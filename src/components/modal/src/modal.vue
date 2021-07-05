<template>
  <div 
    class="m-modal"
    :style="modalStyle"
    ref="el"
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
        <span>
          <m-icon @vclick="close" name="close" size="14" cursor="pointer"></m-icon>
        </span>
      </div>
    </div>
    <div class="m-modal-body" ref="body">
      <slot></slot>
    </div>
    <div class="m-modal-footer" ref="footer"></div>
  </div>
</template>

<script>
import Mask from '../../mask/global'
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-modal',
  components: {
    MIcon
  },
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
    close () {
      this.show = false
    },
    open () {
      this.show = true
    },
    onVisibleChange (v) {
      this.show = v
    },
    onShowChange (v) {
      if (v) {
        this.el.style.display = 'block'
        setTimeout(() => {
          Mask.show()
          this.el.setAttribute('visible', 'true')
        }, 30)
      } else {
        this.el.removeAttribute('visible')
        Mask.hide()
        setTimeout(() => {
          this.el.style.display = 'none'
        }, 300)
      }
      this.$emit('update:visible', v)
    }
  },
  watch: {
    'visible': 'onVisibleChange',
    'show': 'onShowChange'
  }
}
</script>

<style lang="css" scoped>
@import './modal.css';
</style>