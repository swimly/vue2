## Button 按钮

按钮用于开始一个即时操作。

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 组件使用

``` html
<mc-button></mc-button>
```

### 不同弧度

通过`conner`设置小圆角，通过`rounder`设置圆弧

<div class="preview">
  <mc-button conner>圆角按钮</mc-button>
  <mc-button rounder>圆弧按钮</mc-button>
</div>

### 不同颜色

通过自定义属性`type`改变按钮的主题色，可选：`default`，`primary`，`warning`，`success`，`danger`，默认值为：`default`。
<div class="preview">
  <mc-button type="default">按钮</mc-button>
  <mc-button type="primary">按钮</mc-button>
  <mc-button type="warning">按钮</mc-button>
  <mc-button type="success">按钮</mc-button>
  <mc-button type="danger">按钮</mc-button>
</div>

``` html
<mc-button type="default">按钮</mc-button>
<mc-button type="primary">按钮</mc-button>
<mc-button type="warning">按钮</mc-button>
<mc-button type="success">按钮</mc-button>
<mc-button type="danger">按钮</mc-button>
```

### 线条形式

通过属性`outline`设置按钮为线条模式。

<div class="preview">
  <mc-button type="default" outline>按钮</mc-button>
  <mc-button type="primary" outline>按钮</mc-button>
  <mc-button type="warning" outline>按钮</mc-button>
  <mc-button type="success" outline>按钮</mc-button>
  <mc-button type="danger" outline>按钮</mc-button>
</div>

``` html
<mc-button type="default" outline>按钮</mc-button>
<mc-button type="primary" outline>按钮</mc-button>
<mc-button type="warning" outline>按钮</mc-button>
<mc-button type="success" outline>按钮</mc-button>
<mc-button type="danger" outline>按钮</mc-button>
```

### 朴素按钮

通过属性`plain`设置。

<div class="preview">
  <mc-button type="default" plain>按钮</mc-button>
  <mc-button type="primary" plain>按钮</mc-button>
  <mc-button type="warning" plain>按钮</mc-button>
  <mc-button type="success" plain>按钮</mc-button>
  <mc-button type="danger" plain>按钮</mc-button>
</div>

``` html
<mc-button type="default" plain>按钮</mc-button>
<mc-button type="primary" plain>按钮</mc-button>
<mc-button type="warning" plain>按钮</mc-button>
<mc-button type="success" plain>按钮</mc-button>
<mc-button type="danger" plain>按钮</mc-button>
```

<div class="preview">
  <mc-button type="default" plain icon="close">按钮</mc-button>
</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>