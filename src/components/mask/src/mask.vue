<template>
  <div
    class="m-mask"
    ref="el"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-mask',
  props: {
  },
  data () {
    return {
      el: null,
      visible: false
    }
  },
  mounted () {
    this.el = this.$refs.el
  },
  methods: {
    onvalueChange (v) {
      if (v) {
        this.el.style.display = 'block'
        setTimeout(() => {
          this.el.setAttribute('visible', 'true')
        }, 30)
      } else {
        this.el.removeAttribute('visible')
        setTimeout(() => {
          document.body.removeChild(this.el)
        }, 300)
      }
    },
    open () {
      this.visible = true
    },
    close () {
      this.visible = false
    },
    onClick (e) {
      this.$emit('click', e)
    }
  },
  watch: {
    'visible': 'onvalueChange'
  }
}
</script>

<style lang="css" scoped>
@import './mask.css';
</style>