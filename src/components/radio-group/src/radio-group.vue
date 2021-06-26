<template>
  <div class="m-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-radio-group',
  provide () {
    return {
      data: this.data
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      data: {
        value: this.value
      }
    }
  },
  methods: {
    rechange (data) {
      this.data.value = data
      this.$emit('input', data)
    }
  }
}
</script>

<style lang="css" scoped>
@import './radio-group.css';
</style>