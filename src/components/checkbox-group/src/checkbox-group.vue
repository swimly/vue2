<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-checkbox-group',
  provide () {
    return {
      data: this.data
    }
  },
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      data: {
        value: this.value
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import './checkbox-group.css';
</style>