<template>
  <div
    class="m-col"
    :wrap="wrap"
    :type="type"
    :style="`
      width:${100/24*span}%;
      ${paved ? type==='flex' ? 'flex:1;' : 'width:100%;' : 'white-space:wrap;'}
    `"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'm-col',
  props: {
    span: {
      type: Number,
      default: 24
    },
    paved: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrap () {
      return this.$parent.wrap
    },
    type () {
      return this.$parent.type
    },
    gutter () {
      return this.$parent.gutter
    }
  },
  created () {
    console.log(this.wrap)
  }
}
</script>

<style lang="css" scoped>
@import './col.css';
</style>