<template>
  <div class="m-radio"
    :fill="fill"
    :stoke="stoke"
  >
    <input @change="onChange" :checked="isCheck" type="radio" class="m-radio-core">
    <span class="m-radio-frame"
      :style="`width:${size}px;height:${size}px;`"
    >
      <m-icon :size="size*0.8" :name="icon"></m-icon>
    </span>
    <span class="m-radio-label">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-radio',
  components: {
    MIcon
  },
  inject: ['data'],
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'dot'
    },
    size: {
      type: Number,
      default: 18
    },
    fill: {
      type: Boolean,
      default: false
    },
    stoke: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    isCheck () {
      return this.data.value === this.value
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onChange () {
      this.$parent.rechange(this.value)
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
@import './radio.css';
</style>