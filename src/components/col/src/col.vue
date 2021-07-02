<template>
  <div
    class="m-col"
    :style="colStyle"
  >
    <span
    ><slot/></span>
  </div>
</template>

<script>
export default {
  name: 'm-col',
  inject: ['paved'],
  computed: {
    colStyle () {
      const {span} = this
      let style = {}
      if (this.paved) {
        if (this.span === 'auto') {
          style['width'] = '100%'
        } else {
          style['width'] = 'auto'
          style['white-space'] = 'nowrap'
        }
      } else {
        style['width'] = `${100/24*span}%`
      }
      return style
    }
  },
  props: {
    span: {
      type: Number | String,
      default: ''
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './col.css';
</style>