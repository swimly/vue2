<template>
  <div
    class="m-form-item"
    :label-position="labelPosition"
  >
    <div class="m-form-prefix">
      <span
        :style="`line-height:${height}px;`"
      >
        <slot name="label">{{label}}</slot>
      </span>
    </div>
    <div class="m-form-content">
      <slot></slot>
    </div>
    <div class="m-form-suffix"></div>
  </div>
</template>

<script>
export default {
  name: 'm-form-item',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelPosition () {
      return this.$parent.labelPosition
    }
  },
  data () {
    return {
      height: 0
    }
  },
  mounted () {
    this.height = this.$slots.default[0].elm.offsetHeight
  }
}
</script>

<style lang="css" scoped>
@import './form-item.css';
</style>