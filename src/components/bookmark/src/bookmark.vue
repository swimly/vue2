<template>
  <div
    class="m-bookmark"
    :style="wrapStyle"
    ref="bookmark"
  >
    <div
      class="m-bookmark-prefix"
      ref="prefix"
      :style="`left:${space}px`"
    ></div>
    <div class="m-bookmark-content" ref="content">
      <m-scroller bar-color="rgba(0,0,0,0)" :bar-width="2" :scroll-left="scroll">
        <ul
          class="m-bookmark-list"
          ref="list"
        >
          <li
            :class="{
              'm-bookmark-item': true
            }"
            :style="`height:${height}px`"
            :active="index === currentIndex"
            v-for="(item, index) in list"
            :key="index"
            @click="onItemClick(index)"
            draggable="true"
          >
            <h2 class="m-bookmark-label">{{item.label}}</h2>
            <m-icon @vclick.stop="onClose(index)" name="close" size="10"></m-icon>
          </li>
        </ul>
      </m-scroller>
    </div>
    <div
      class="m-bookmark-suffix"
      ref="suffix"
      :style="`right:${space}px`"
    >
      <span @click="onPrev"><m-icon name="arrow-left" size="16"></m-icon></span>
      <span @click="onNext"><m-icon name="arrow-right" size="16"></m-icon></span>
      <span><m-icon name="clear" size="16"></m-icon></span>
    </div>
  </div>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
import MScroller from '../../scroller/src/scroller.vue'
export default {
  name: 'm-bookmark',
  computed: {
    wrapStyle () {
      const {prefix, suffix} = this.width
      return {
        paddingLeft: `${prefix + this.space}px`,
        paddingRight: `${suffix + this.space}px`
      }
    }
  },
  components: {
    MIcon,
    MScroller
  },
  props: {
    space: {
      type: Number,
      default: 16
    },
    value: {
      type: Array,
      default: () => []
    },
    current: {
      type: Number,
      default: 0
    },
    scrollX: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      height: 0,
      list: this.value,
      currentIndex: this.current,
      width: {
        prefix: 0,
        suffix: 0,
        content: 0
      },
      scroll: this.scrollX,
      $list: null,
      $content: null
    }
  },
  mounted () {
    this.width.suffix = this.$refs.suffix.offsetWidth
    this.width.prefix = this.$refs.prefix.offsetWidth
    this.$list = this.$refs.list
    this.$content = this.$refs.content
    this.height = this.$refs.bookmark.offsetHeight
  },
  methods: {
    onNext () {
      this.scroll += 80
      const max = this.$list.offsetWidth - this.$content.offsetWidth
      this.scroll = this.scroll >= max ? max : this.scroll
    },
    onPrev () {
      this.scroll -= 80
      this.scroll = this.scroll <= 0 ? 0 : this.scroll
    },
    onItemClick (index) {
      this.currentIndex = index
    },
    onClose (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="css" scoped>
@import './bookmark.css';
</style>