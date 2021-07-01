<template>
  <m-row class="m-form" :gutter="gutter">
    <slot></slot>
  </m-row>
</template>

<script>
import MRow from '../../row/src/row.vue'
export default {
  name: 'm-form',
  provide () {
    return {
      labelPosition: this.labelPosition,
      labelWidth: this.labelWidth,
      inline: this.inline
    }
  },
  components: {
    MRow
  },
  props: {
    labelPosition: {
      type: String,
      default: 'top'
    },
    labelWidth: {
      type: String | Number,
      default: ''
    },
    inline: {
      type: Boolean,
      default: true
    },
    gutter: {
      type: String | Number,
      default: 16
    }
  }
}
</script>

<style lang="css" scoped>
@import './form.css';
</style>