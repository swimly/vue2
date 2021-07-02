<template>
  <ul class="m-menu">
    <li
      class="m-menu-item"
      v-for="(item, index) in value" :key="index"
      :active="item.active"
    >
      <div class="m-menu-handle" @click="onClick(item)">
        <span class="m-menu-prefix">
          <img v-if="item.defaultIcon" :src="item.defaultIcon" alt="" class="m-menu-icon">
          <!-- <img v-if="item.activeIcon" :src="item.activeIcon" alt="" class="m-menu-icon"> -->
        </span>
        <span class="m-menu-label">{{item.label}}</span>
        <span class="m-menu-suffix">
          <span>
            <m-icon v-if="item.children" :size="12" name="arrow-down"></m-icon>
          </span>
        </span>
      </div>
      <div class="m-menu-content" v-if="item.children">
        <m-menu :value="item.children"></m-menu>
      </div>
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
  },
  methods: {
    onClick (item) {
      item.active = !item.active
      console.log(item)
    }
  }
}
</script>

<style lang="css" scoped>
@import './menu.css';
</style>