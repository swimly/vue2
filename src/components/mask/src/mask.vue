<template>
  <div
    class="m-mask"
    ref="el"
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
      v ? this.open() : this.close()
    },
    open () {
      this.el.style.display = 'block'
      setTimeout(() => {
        this.el.setAttribute('visible', 'true')
      }, 10)
    },
    close () {
      this.el.removeAttribute('visible')
      setTimeout(() => {
        document.body.removeChild(this.$el)
      }, 300)
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