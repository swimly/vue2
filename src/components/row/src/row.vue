<template>
  <div
    class="m-row"
    :wrap="wrap"
    :type="type"
    :style="`
      margin: ${-gutter/2}px;
    `"
  >
    <slot v-bind:wrap="wrap"></slot>
  </div>
</template>

<script>
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
      default: 16
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './row.css';
</style>