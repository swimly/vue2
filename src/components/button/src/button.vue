<template>
  <div
    class="m-button"
    :type="type"
    :outline="outline"
    :plain="plain"
    :conner="conner"
    :rounder="rounder"
    :text="text"
    @click="onClick"
  >
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
  name: 'm-button',
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
    },
    type: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: false
    },
    rounder: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    conner: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './button.css';
</style>