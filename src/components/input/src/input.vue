<template>
  <div
    class="m-input"
    :conner="conner"
    :rounder="rounder"
  >
    <div class="m-input-prefix"></div>
    <div class="m-input-content">
      <input v-model="data" @input="onInputChange" :placeholder="placeholder" :type="type" class="m-input-core">
    </div>
    <div class="m-input-suffix">
      <span class="m-input-length" v-if="maxLength">{{data.length}}/{{maxLength}}</span>
      <span class="m-input-clear"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-input',
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
      default: 20
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      data: this.value
    }
  },
  methods: {
    onInputChange () {
      this.data = this.data.substring(0, this.maxLength)
      this.$emit('input', this.data)
      this.$emit('vchange', this.data)
    }
  }
}
</script>

<style lang="css" scoped>
@import './input.css';
</style>