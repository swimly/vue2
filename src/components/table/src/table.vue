<template>
  <div
    class="m-table"
    ref="table"
    :style="`padding-top:${headHeight}px`"
  >
    <div
      class="m-table-head"
      ref="head"
      :style="`margin-top:${-headHeight}px`"
    >
      <table
        class="m-table-core"
        :style="`width:${fullwidth}px;margin-left:${-scroll.scrollleft}px`"
      >
        <colgroup>
          <col v-for="(item, index) in columns" :key="index" :width="`${item.width}px`"/>
        </colgroup>
        <thead>
          <tr>
            <th v-for="(item, index) in columns" :key="index" :align="item.align">
              <span>{{item.label}}</span>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="m-table-content" ref="content">
      <m-scroller
        ref="scroll"
        @vscroll="onScroll"
        @vchange="onScrollChange"
        bar-color="rgba(0,0,0,0)"
      >
        <table
          class="m-table-core"
          :style="`width:${fullwidth}px`"
        >
          <colgroup>
            <col v-for="(item, index) in columns" :key="index" :width="`${item.width}px`"/>
          </colgroup>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td v-for="(h, idx) in columns" :key="idx" :align="align[idx]">
                <span v-if="!h.fixed">{{item[h.prop]}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </m-scroller>
    </div>
    <!-- prefix -->
    <div class="m-table-prefix" ref="prefix" :focus="!scroll.isleft">
      <div class="m-table" :style="`padding-top:${headHeight}px;width:${prefixwidth}px`">
        <div class="m-table-head" :style="`margin-top:${-headHeight}px`">
          <table
            class="m-table-core"
          >
            <colgroup>
              <col v-for="(item, index) in prefix" :key="index" :width="`${item.width}px`"/>
            </colgroup>
            <thead>
              <tr>
                <th v-for="(item, index) in prefix" :key="index" :align="item.align">
                  <span>{{item.label}}</span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="m-table-content">
          <table
            class="m-table-core"
            :style="`width:${prefixwidth}px;margin-top:${-scroll.scrolltop}px`"
          >
            <colgroup>
              <col v-for="(item, index) in prefix" :key="index" :width="`${item.width}px`"/>
            </colgroup>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <td v-for="(h, idx) in prefix" :key="idx" :align="align[idx]">
                  <span>{{item[h.prop]}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- suffix -->
    <div class="m-table-suffix" ref="suffix" :focus="!scroll.isright">
      <div class="m-table" :style="`padding-top:${headHeight}px;width:${suffixwidth}px`">
        <div class="m-table-head" :style="`margin-top:${-headHeight}px`">
          <table
            class="m-table-core"
          >
            <colgroup>
              <col v-for="(item, index) in suffix" :key="index" :width="`${item.width}px`"/>
            </colgroup>
            <thead>
              <tr>
                <th v-for="(item, index) in suffix" :key="index" :align="item.align">
                  <span>{{item.label}}</span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="m-table-content">
          <table
            class="m-table-core"
            :style="`width:${suffixwidth}px;margin-top:${-scroll.scrolltop}px`"
          >
            <colgroup>
              <col v-for="(item, index) in columns" :key="index" :width="`${item.width}px`"/>
            </colgroup>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <td v-for="(h, idx) in suffix" :key="idx" :align="align[idx]">
                  <span>{{item[h.prop]}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="m-table-bar y"
      v-if="bar"
      :style="`margin-top:${headHeight}px;height:${bar.height * bar.scaleY}px;top:${scroll.bartop}px`"
    ></div>
    <div
      class="m-table-bar x"
      v-if="bar"
      :style="`width:${bar.width * bar.scaleX}px;left:${scroll.barleft}px`"
    ></div>
    <div style="display:none;"><slot/></div>
  </div>
</template>

<script>
import MScroller from '../../scroller/src/scroller.vue'
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  name: 'm-table',
  components: {
    MScroller
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    fullwidth () {
      let wid = 0
      this.widths.forEach(item => {
        wid += item
      })
      return wid
    },
    prefixwidth () {
      let wid = 0
      this.prefix.forEach(item => {
        wid += parseInt(item.width)
      })
      return wid
    },
    suffixwidth () {
      let wid = 0
      this.suffix.forEach(item => {
        wid += parseInt(item.width)
      })
      return wid
    }
  },
  data () {
    return {
      columns: [],
      prefix: [],
      suffix: [],
      align: [],
      widths: [],
      content: null,
      head: null,
      table: null,
      headHeight: 0,
      scroll: {
        left: 0,
        top: 0
      },
      bar: null
    }
  },
  mounted () {
    const erd = elementResizeDetectorMaker({
      strategy: 'scroll',
      callOnAdd: true
    })
    erd.listenTo(this.$refs.content, (el) => {
      this.$refs.scroll.refresh()
    })
    this.table = this.$refs.table
    this.head = this.$refs.head
    this.content = this.$refs.content
    this.$nextTick(() => {
      this.headHeight = this.head.offsetHeight
    })
  },
  methods: {
    updateColumn (obj) {
      this.columns.push(obj)
    },
    updatePrefix (str) {
      this.prefix.push(str)
    },
    updateSuffix (str) {
      this.suffix.push(str)
    },
    updateAlign (str) {
      this.align.push(str)
    },
    updateWidth (v) {
      this.widths.push(v)
    },
    onScroll (item) {
      this.scroll = item
    },
    onScrollChange (item) {
      this.bar = item
    }
  }
}
</script>

<style lang="css" scoped>
@import './table.css';
</style>