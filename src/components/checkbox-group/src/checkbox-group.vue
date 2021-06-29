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
    },
    size: {
      type: String | Number,
      default: 18
    }
  },
  data () {
    return {
      data: {
        value: this.value,
        size: this.size
      }
    }
  },
  methods: {
    onChange (value, status) {
      let values = this.value
      if (status) {
        values.push(value)
      } else {
        const index = values.indexOf(value)
        values.splice(index, 1)
      }
      this.$emit('input', values)
    }
  }
}
</script>

<style lang="css" scoped>
@import './checkbox-group.css';
</style>