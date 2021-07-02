<style>
  .m-icon{
    margin-right:20px;
  }
</style>
# Icon 图标

<!-- start -->

### 介绍

语义化的矢量图形。

<!-- end -->

<!-- start -->

### 用法

通过`m-icon`标签调用图标组件。

<div class="code">
  <m-icon name="date"></m-icon>
</div>

``` html
  <m-icon name="date"></m-icon>
```

<!-- end -->

<!-- start -->

### 大小

通过`size`调整图标的大小，类型：`string`或者`number`，切记不可带单位，例如：`size="28px"`。

<div class="code">
  <m-icon name="date" size="28"></m-icon>
</div>

``` html
  <m-icon name="date" size="28"></m-icon>
```

<!-- end -->

<!-- start -->

### 颜色

调整图标颜色的方式有两种：一种是通过`type`调用内置颜色，一种是通过`color`自定义颜色，

?> 二者唯一的区别便是，内置颜色可跟随主题变色，而自定义不可。

<div class="code">
  <m-icon name="date" type="default"></m-icon>
  <m-icon name="date" type="regular"></m-icon>
  <m-icon name="date" type="secondary"></m-icon>
  <m-icon name="date" type="primary"></m-icon>
  <m-icon name="date" type="warning"></m-icon>
  <m-icon name="date" type="success"></m-icon>
  <m-icon name="date" type="danger"></m-icon>
</div>

``` html
  <m-icon name="date" type="default"></m-icon>
  <m-icon name="date" type="regular"></m-icon>
  <m-icon name="date" type="secondary"></m-icon>
  <m-icon name="date" type="primary"></m-icon>
  <m-icon name="date" type="warning"></m-icon>
  <m-icon name="date" type="success"></m-icon>
  <m-icon name="date" type="danger"></m-icon>
```
#### 自定义颜色

<div class="code">
  <m-icon name="date" color="#f00"></m-icon>
</div>

``` html
<m-icon name="date" color="#f00"></m-icon>
```

<!-- end -->

<!-- start -->

### 旋转

通过`spin`控制图标不停的旋转

<div class="code">
  <m-icon name="date" spin></m-icon>
</div>

``` html
  <m-icon name="date" spin></m-icon>
```

<!-- end -->

<!-- start -->

### 鼠标手势

通过`cursor`控制图标不停的旋转

<div class="code">
  <m-icon name="date" cursor="pointer"></m-icon>
</div>

``` html
  <m-icon name="date" cursor="pointer"></m-icon>
```

<!-- end -->

<script>
  var previews = document.querySelectorAll('.code')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>