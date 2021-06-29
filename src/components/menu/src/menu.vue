<template>
  <ul class="m-menu">
    <li class="m-menu-item" v-for="(item, index) in value" :key="index">
      <div class="m-menu-handle">
        <span class="m-menu-prefix">
          <img src="../../../assets/menu1.png" alt="" class="m-menu-icon">
        </span>
        <span class="m-menu-label">{{item.label}}</span>
        <span class="m-menu-suffix">
          <span>
            <m-icon v-if="item.children" :size="12" name="arrow-down"></m-icon>
          </span>
        </span>
      </div>
      <div class="m-menu-content"></div>
    </li>
  </ul>
</template>

<script>
import MIcon from '../../icon/src/icon.vue'
export default {
  name: 'm-menu',
  components: {
    MIcon
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
@import './menu.css';
</style>