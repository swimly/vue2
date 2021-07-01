<template>
  <div class="m-pagination">
    <span
      @click="onPrev"
      class="m-pagination-button"
    >
      <m-icon name="arrow-left" size="14"></m-icon>
      <span v-if="prevText">{{prevText}}</span>
    </span>
    <span
      class="m-pagination-item"
      :active="current === item"
      v-for="(item, index) in pageArray"
      :key="index"
    >
      <span
        @click="onJump(item)"
        v-if="typeof item !== 'string'"
      >{{item}}</span>
      <span 
        @click="onChoice(item)" 
        v-else
      >
        <m-icon
          name="more"
          :size="16"
        ></m-icon>
        <m-icon
          :name="`arrow-${item}`"
          :size="12"
        ></m-icon>
      </span>
    </span>
    <span
      @click="onNext"
      class="m-pagination-button"
    >
      <span v-if="nextText">{{nextText}}</span>
      <m-icon name="arrow-right" size="14"></m-icon>
    </span>
    <span class="m-pagination-label">
      <span>共：{{total}}条</span>
    </span>
    <input v-model="current" type="text" @input="onJump" class="m-pagination-input">
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-pagination',
  components: {
    MIcon
  },
  computed: {
    pageCount () {
      return Math.ceil(this.total / this.pageSize)
    },
    pageArray () {
      const length = this.pageCount
      const first = this.itemCount / 2 + 1
      const last = length - (this.itemCount / 2)
      let newArray = []
      const array = Array.from(Array(length), (v,k) =>k + 1)
      if (this.current < first) {
        newArray = [...array.slice(0, this.itemCount - 1), 'next' , array[array.length - 1]]
      } else if (this.current > last) {
        newArray = [array[0], 'prev', ...array.slice(-(this.itemCount - 1))]
      } else {
        const index = array.indexOf(this.current)
        const hl = (this.itemCount - 3)/2
        const start = index - hl
        newArray = [array[0], 'prev', ...array.splice(start, this.itemCount - 2), 'next', array[array.length - 1]]
      }
      return newArray
    }
  },
  props: {
    total: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 0
    },
    prevText: {
      type: String,
      default: ''
    },
    nextText: {
      type: String,
      default: ''
    },
    itemCount: {
      type: Number,
      default: 7
    }
  },
  data () {
    return {
      current: this.currentPage
    }
  },
  methods: {
    onJump (value) {
      let v = typeof value === 'number' ? value : parseInt(value.target.value)
      v = v > this.pageCount ? this.pageCount : v < 1 ? 1 : v
      if (isNaN(v)) {
        v = 1
      }
      this.current = v
    },
    onChoice (item) {
      const v = this.itemCount - 2
      this.current = item === 'next' ? this.current + v : this.current - v
      this.current = this.current >= this.pageCount ? this.pageCount : this.current <= 1 ? 1 : this.current
    },
    onNext () {
      this.current = this.current < this.pageCount ? this.current + 1 : this.pageCount
    },
    onPrev () {
      this.current = this.current > 1 ? this.current - 1 : 1
    }
  }
}
</script>

<style lang="css" scoped>
@import './pagination.css';
</style>