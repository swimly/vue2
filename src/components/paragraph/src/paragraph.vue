<template>
  <div class="m-paragraph">
    <span ref="content" class="m-paragraph-content">
    </span>
    <span class="m-paragraph-more">更多</span>
  </div>
</template>

<script>
export default {
  name: "m-paragraph",
  props: {
    rows: {
      type: Number,
      default: 2,
    },
    content: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const arr = this.content.split('')
    arr.forEach((t) => {
      console.log(t)
    })
  },
  methods: {
  },
};
</script>

<style lang="css" scoped>
@import "./paragraph.css";
</style>