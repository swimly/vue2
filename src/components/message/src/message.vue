<template>
  <div class="m-message-row">
    <div class="m-message" ref="el">
      <m-icon name="clear" type="primary"></m-icon>
      <span class="m-message-label">
        <slot>{{message}}</slot>
      </span>
    </div>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-message',
  components: {
    MIcon
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    durationTime: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      el: null,
      show: this.visible,
      message: this.content,
      duration: this.durationTime
    }
  },
  mounted () {
    this.el = this.$refs.el
  },
  methods: {
    onShowChange (v) {
      if (v) {
        this.el.style.display = 'inline-block'
        setTimeout(() => {
          this.el.setAttribute('visible', 'true')
        }, 30)
      } else {
        this.el.removeAttribute('visible')
        setTimeout(() => {
          this.el.style.display = 'none'
          this.el.parentNode.parentNode.removeChild(this.el.parentNode)
        }, 300)
      }
    },
    onVisibleChange (v) {
      this.show = v
    },
    open () {
      this.show = true
      if (this.duration) {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    close () {
      this.show = false
    }
  },
  watch: {
    'visible': 'onVisibleChange',
    'show': 'onShowChange'
  }
}
</script>

<style lang="css" scoped>
@import './message.css';
</style>