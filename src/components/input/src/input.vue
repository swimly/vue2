<template>
  <div
    class="m-input"
    :conner="conner"
    :rounder="rounder"
    :style="`height: ${size}px;`"
  >
    <div
      class="m-input-prefix"
      v-if="prefixLabel || prefixIcon"
    >
      <span
        :style="`font-size: ${prefixSize}px;color: ${prefixColor};`"
      >
        <span v-if="prefixLabel">{{prefixLabel}}</span>
        <m-icon :size="prefixSize" :color="prefixColor" v-if="prefixIcon" :name="prefixIcon"></m-icon>
      </span>
    </div>
    <div class="m-input-content">
      <input
        v-model="data"
        :placeholder="placeholder"
        :type="type"
        class="m-input-core"
      >
    </div>
    <div 
      class="m-input-suffix"
    >
      <span
        :style="`font-size: ${suffixSize}px;color: ${suffixColor};`"
      >
        <span class="m-input-length" v-if="maxLength">{{data.length}}/{{maxLength}}</span>
        <span class="m-input-clear"></span>
        <span v-if="suffixLabel">{{suffixLabel}}</span>
        <m-icon v-if="suffixIcon" :color="suffixColor" :size="suffixSize" :name="suffixIcon"></m-icon>
      </span>
    </div>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-input',
  components: {
    MIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    conner: {
      type: Boolean,
      default: true
    },
    rounder: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'text'
    },
    prefixLabel: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixLabel: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    suffixColor: {
      type: String,
      default: ''
    },
    suffixSize: {
      type: String | Number,
      default: 14
    },
    prefixColor: {
      type: String,
      default: ''
    },
    prefixSize: {
      type: String | Number,
      default: 14
    },
    size: {
      type: String | Number,
      default: ''
    }
  },
  data () {
    return {
      data: this.value
    }
  },
  methods: {
    onDataChange (v) {
      this.data = this.maxLength ? v.subString(0, this.maxLength) : v
      this.$emit('input', this.data)
    }
  },
  watch: {
    'data': 'onDataChange'
  }
}
</script>

<style lang="css" scoped>
@import './input.css';
</style>