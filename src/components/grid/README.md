# Grid 栅格

<!-- start -->

### 介绍

24 栅格系统，提供三套布局形式。

- `row`，`col`，利用`table`的优势，提供便捷的水平排版容器，该布局的子元素不能换行，多适用于一行显示的情况。

- `grid`，`grid-item`，利用`inline-block`提供一个可以换行的布局容器，弥补了`row`的不足。

- `flex`，`flex-item`，充分利用现代浏览器的布局优势，提供更为便捷灵活的布局，兼容`ie10+`。

<!-- end -->

<div class="preview">

</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i]
    })
  }
</script>