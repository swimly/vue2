# Icon

<div class="preview">
  <m-icon name="close"></m-icon>
</div>

<div class="preview">
  <m-icon name="close" size="24" color="#f00"></m-icon>
</div>

<div class="preview">
  <m-icon name="close" spin></m-icon>
</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>