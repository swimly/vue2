<template>
  <div class="m-checkbox">
    <input
      :checked="isCheck"
      type="checkbox"
      class="m-checkbox-core"
      @change="onChange"
    >
    <span
      class="m-checkbox-frame"
      :style="`width:${size}px;height:${size}px;`"
    >
      <span>
        <m-icon name="check" size="14"></m-icon>
      </span>
    </span>
    <span class="m-checkbox-label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-checkbox',
  inject: ['data'],
  components: {
    MIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    isCheck () {
      return this.data.value.indexOf(this.value) >= 0
    },
    size () {
      return this.data.size
    }
  },
  methods: {
    onChange (e) {
      this.$parent.onChange(this.value, e.currentTarget.checked)
    }
  }
}
</script>

<style lang="css" scoped>
@import './checkbox.css';
</style>