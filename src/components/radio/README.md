# Radio 单选

<!-- start -->

<div class="code">
  <p>{{s1}}</p>
  <m-radio-group v-model="s1">
    <m-radio value="1">单选</m-radio>
    <m-radio value="2">单选</m-radio>
    <m-radio value="3">单选</m-radio>
  </m-radio-group>
</div>

<!-- end -->

<script>
  var previews = document.querySelectorAll('.code')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i],
      data () {
        return {
          s1: '1'
        }
      }
    })
  }
</script>