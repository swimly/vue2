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
      type: Number,
      default: 12
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './row.css';
</style>