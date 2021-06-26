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
  <m-form label-position="right" label-width="80">
    <m-form-item label="用户名">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="居住地址">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="手机号">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="邮箱">
      <m-input></m-input>
    </m-form-item>
  </m-form>
</div>

<div class="preview">
  <m-form label-position="left">
    <m-form-item label="姓名" :span="12">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="居住地址" :span="12">
      <m-input suffix-icon="date"></m-input>
    </m-form-item>
    <m-form-item label="出生日期" :span="12">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="爱好" :span="12">
      <m-input suffix-icon="arrow-down"></m-input>
    </m-form-item>
  </m-form>
</div>

<div class="preview">
  <m-form label-position="left" label-width="80">
    <m-form-item label="姓名" :span="12">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="居住地址" :span="12">
      <m-input suffix-icon="date"></m-input>
    </m-form-item>
    <m-form-item label="出生日期" :span="12">
      <m-input></m-input>
    </m-form-item>
    <m-form-item label="爱好" :span="12">
      <m-input suffix-icon="arrow-down"></m-input>
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