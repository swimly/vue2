<template>
  <div class="m-checkbox">
    {{isCheck}}
  </div>
</template>

<script>
export default {
  name: 'm-checkbox',
  inject: ['data'],
  props: {
  },
  computed: {
    isCheck () {
      return this.data.value.indexOf(this.value) >= 0
    }
  },
  created () {
    console.log(this.data)
  }
}
</script>

<style lang="css" scoped>
@import './checkbox.css';
</style>