# Checkbox

<div class="preview">
  <p>{{s1}}</p>
  <m-checkbox-group v-model="s1">
    <m-checkbox value="1">单选</m-checkbox>
    <m-checkbox value="2">单选</m-checkbox>
    <m-checkbox value="3">单选</m-checkbox>
  </m-checkbox-group>
</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i],
      data () {
        return {
          s1: ['1', '3']
        }
      }
    })
  }
</script>