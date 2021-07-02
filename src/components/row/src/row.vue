<template>
  <div
    class="m-row"
  >
    <slot></slot>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: 'm-row',
  provide () {
    return {
      paved: this.paved
    }
  },
  props: {
    paved: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './row.css';
</style>