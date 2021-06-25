# Form

<div class="preview">
  <m-form>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
  </m-form>
</div>

<div class="preview">
  <m-form label-position="right">
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
  </m-form>
</div>

<div class="preview">
  <m-form label-position="left">
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
  </m-form>
</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>