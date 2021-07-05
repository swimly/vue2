<template>
  <div class="m-divider">
    <h2 class="m-divider-label">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'm-divider',
  props: {
  }
}
</script>

<style lang="css" scoped>
@import './divider.css';
</style>