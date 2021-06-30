<template>
  <div
    class="m-page"
    :shape="shape"
  >
    <div class="m-page-header">
      <div class="m-page-header-container">
        <div class="m-page-header-prefix">
          <slot name="header-prefix">
            <m-image :src="data.logo"></m-image>
          </slot>
        </div>
        <div class="m-page-header-content">
          <slot name="header-content"/>
        </div>
        <div class="m-page-header-suffix">
          <slot name="header-suffix"/>
        </div>
      </div>
    </div>
    <div class="m-page-menu">
      <div class="m-page-menu-prefix"></div>
      <div class="m-page-menu-content">
        <m-scroller>
          <slot name="menu-content">
            <m-menu v-model="data.menu"></m-menu>
          </slot>
        </m-scroller>
      </div>
      <div class="m-page-menu-suffix"></div>
    </div>
    <div class="m-page-content">
      <div class="m-page-bookmark">
        <slot name="bookmark">
          <m-bookmark v-model="data.bookmark"></m-bookmark>
        </slot>
      </div>
      <div class="m-page-scroll">
        <slot></slot>
      </div>
    </div>
    <div class="m-page-footer"></div>
  </div>
</template>

<script>
import MScroller from '../../scroller/src/scroller.vue'
import MBookmark from '../../bookmark/src/bookmark.vue'
export default {
  name: 'm-page',
  components: {
    MScroller,
    MBookmark
  },
  props: {
    shape: {
      type: 'origin' | 'modern' | 'website',
      default: 'origin'
    },
    data: {
      type: Object,
      default: {
        menu: () => [],
        bookmark: () => [],
        logo: ''
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import './page.css';
</style>