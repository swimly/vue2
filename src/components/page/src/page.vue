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
          <slot name="header-suffix">
            <!-- <m-popover placement="bottom-right" effect="hover">
              <m-row style="cursor:pointer;">
                <m-col>
                  <img src="../../../assets/avatar.png" alt="">
                </m-col>
                <m-col>
                  <span style="font-size:12px;padding:0 8px;">用户名</span>
                </m-col>
                <m-col>
                  <m-icon size="10" name="caret-down"></m-icon>
                </m-col>
              </m-row>
              <div slot="content" style="width:120px;padding:8px;">
                <p style="margin:0;padding: 8px 16px;cursor:pointer">个人设置</p>
                <p style="margin:0;padding: 8px 16px;cursor:pointer">岗位切换</p>
                <p style="margin:0;padding: 8px 16px;cursor:pointer">首页设置</p>
              </div>
            </m-popover>
            <m-space size="24" direction="left">
              <m-popover placement="bottom-right" effect="hover">
                <m-icon size="16" name="booklet"></m-icon>
              </m-popover>
            </m-space>
            <m-space size="24" direction="left">
              <m-popover placement="bottom-right" effect="hover">
                <m-icon size="16" name="logout-circle"></m-icon>
              </m-popover>
            </m-space> -->
          </slot>
        </div>
      </div>
    </div>
    <div class="m-page-menu">
      <div class="m-page-menu-prefix"></div>
      <div class="m-page-menu-content">
        <m-scroller v-if="data.menu">
          <slot name="menu-content">
            <m-menu v-model="data.menu"></m-menu>
          </slot>
        </m-scroller>
      </div>
      <div class="m-page-menu-suffix">

      </div>
    </div>
    <div class="m-page-content">
      <div class="m-page-bookmark">
        <slot name="bookmark">
          <m-bookmark v-if="data.bookmark" v-model="data.bookmark"></m-bookmark>
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