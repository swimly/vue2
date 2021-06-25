<template>
  <div class="m-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-form',
  props: {
    labelPosition: {
      type: String,
      default: 'top'
    }
  }
}
</script>

<style lang="css" scoped>
@import './form.css';
</style>