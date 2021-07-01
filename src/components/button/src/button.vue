<template>
  <div class="m-button">
    <span class="m-button-icon">
      <slot name="icon">
        <m-icon v-if="icon" size="14" :name="icon"></m-icon>
      </slot>
    </span>
    <span class="m-button-label">
      <span>
        <slot>{{label}}</slot>
      </span>
    </span>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'mc-button',
  components: {
    MIcon
  },
  props: {
    label: {
      type: String,
      default: '按钮1'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './button.css';
</style>