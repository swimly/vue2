<template>
  <div>
    <slot :row="1"></slot>
  </div>
</template>

<script>
export default {
  name: 'm-table-column',
  props: {
    width: {
      type: String,
      default: '120'
    },
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    fixed: {
      type: 'prefix' | 'suffix',
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  created () {
    const {label, prop, width, fixed, align} = this
    const item = {
      label,
      prop,
      width,
      fixed,
      align
    }
    this.$parent.updateColumn(item)
    this.$parent.updateAlign(align)
    this.$parent.updateWidth(parseInt(width))
    if (fixed === 'prefix') {
      this.$parent.updatePrefix(item)
    }
    if (fixed === 'suffix') {
      this.$parent.updateSuffix(item)
    }
  }
}
</script>

<style lang="css" scoped>
@import './table-column.css';
</style>