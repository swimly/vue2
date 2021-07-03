<style>
  .m-text{
    margin-right:20px;
  }
</style>
# Text 文本

<!-- start -->

### 基础

<div class="code">
  <m-text>文本</m-text>
  <m-text type="default">文本</m-text>
  <m-text type="regular">文本</m-text>
  <m-text type="secondary">文本</m-text>
  <m-text type="placeholder">文本</m-text>
  <m-text type="primary">文本</m-text>
  <m-text type="warning">文本</m-text>
  <m-text type="success">文本</m-text>
  <m-text type="danger">文本</m-text>
</div>

<!-- end -->

<!-- start -->

### 属性

|属性名称|描述<div style="width:160px;"></div>|可选值<div style="width:100px;"></div>|可选值<div style="width:40px;"></div>|
|:----|:---------|:-----|:----|
|Header|Title|Title|Title|

<!-- end -->

<script>
  var previews = document.querySelectorAll('.code')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>