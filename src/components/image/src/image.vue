<template>
  <div class="m-image">
    <div class="m-image-preview" v-if="!loaded"></div>
    <img :src="src" alt="" v-else>
  </div>
</template>

<script>
export default {
  name: 'm-image',
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    getImageInfo () {
      const img = document.createElement('img')
      img.src = this.src
      img.onload = (e) => {
        // this.nature.width = img.naturalWidth
        // this.nature.height = img.naturalHeight
        this.loaded = true
      }
    }
  },
  created () {
    this.getImageInfo()
  }
}
</script>

<style lang="css" scoped>
@import './image.css';
</style>