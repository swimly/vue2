<template>
  <m-grid-item :span="span">
    <div
      class="m-form-item"
      :label-position="labelPosition"
      :inline="inline"
      :align="align"
    >
      <div class="m-form-prefix" v-if="label">
        <span
          :style="`line-height:${height}px;width:${labelWidth}px`"
        >
          <slot name="label">{{label}}</slot>
        </span>
      </div>
      <div class="m-form-content">
        <slot></slot>
      </div>
      <div class="m-form-suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
  </m-grid-item>
</template>

<script>
import MCol from '../../col/src/col.vue'
export default {
  name: 'm-form-item',
  inject: ['labelPosition', 'labelWidth', 'inline'],
  components: {
    MCol
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    span: {
      type: Number,
      default: 24
    },
    align: {
      type: String,
      default: 'left'
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