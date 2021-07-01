<template>
  <div
    class="m-col"
    :wrap="wrap"
    :type="type"
    :paved="paved"
    :align="align"
    :style="`
      width:${100/24*span}%;padding:${gutter/2}px;
    `"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'm-col',
  inject: ['gutter', 'wrap', 'type'],
  props: {
    span: {
      type: Number,
      default: 24
    },
    paved: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './col.css';
</style>