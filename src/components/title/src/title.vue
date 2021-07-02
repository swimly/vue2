<template>
  <div class="m-title"
    :level="level"
  >
    <div class="m-title-prefix">
      <h2 class="m-title-label">
        <slot></slot>
      </h2>
    </div>
    <div class="m-title-content"></div>
    <div class="m-title-suffix"></div>
  </div>
</template>

<script>
export default {
  name: 'm-title',
  props: {
    level: {
      type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
      default: 'h1'
    }
  }
}
</script>

<style lang="css" scoped>
@import './title.css';
</style>