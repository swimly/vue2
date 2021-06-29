<template>
  <div
    class="m-page"
    :shape="shape"
  >
    <div class="m-page-header">
      <div class="m-page-header-container">
        <div class="m-page-header-prefix">
          <slot name="header-prefix"/>
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
          <slot name="menu-content"/>
        </m-scroller>
      </div>
      <div class="m-page-menu-suffix"></div>
    </div>
    <div class="m-page-content"></div>
    <div class="m-page-footer"></div>
  </div>
</template>

<script>
import MScroller from '../../scroller/src/scroller.vue'
export default {
  name: 'm-page',
  components: {
    MScroller
  },
  props: {
    shape: {
      type: 'origin' | 'modern' | 'website',
      default: 'origin'
    }
  }
}
</script>

<style lang="css" scoped>
@import './page.css';
</style>