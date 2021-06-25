<style>
  .panel{
    background:#eee;
    height: 50px;
    border-radius:2px;
  }
</style>
# Row 栅格

<div class="preview">
  <mc-row>
    <mc-col>
      <div class="panel"></div>
    </mc-col>
    <mc-col :span="12">
      <div class="panel"></div>
    </mc-col>
    <mc-col :span="12">
      <div class="panel"></div>
    </mc-col>
  </mc-row>
</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>