# Popover

<!-- start -->

### 介绍

点击/鼠标移入元素，弹出气泡式的卡片浮层。

<!-- end -->


<!-- start -->

### 不同方向

<div class="code">
<m-space>
  <m-space>
    <m-row>
      <m-col :span="4"></m-col>
      <m-col :span="4">
        <m-popover placement="top-left">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
        <m-popover placement="top">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
        <m-popover placement="top-right">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4"></m-col>
    </m-row>
  </m-space>
  <m-space>
    <m-row>
      <m-col :span="4">
        <m-popover placement="left-top">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
      </m-col>
      <m-col :span="4"></m-col>
      <m-col :span="4"></m-col>
      <m-col :span="4">
        <m-popover placement="right-top">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
    </m-row>
  </m-space>
  <m-space>
    <m-row>
      <m-col :span="4">
        <m-popover placement="left">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
      </m-col>
      <m-col :span="4"></m-col>
      <m-col :span="4"></m-col>
      <m-col :span="4">
        <m-popover placement="right">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
    </m-row>
  </m-space>
  <m-space>
    <m-row>
      <m-col :span="4">
        <m-popover placement="left-bottom">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
      </m-col>
      <m-col :span="4"></m-col>
      <m-col :span="4"></m-col>
      <m-col :span="4">
        <m-popover placement="right-bottom">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
    </m-row>
  </m-space>
  <m-space>
    <m-row>
      <m-col :span="4"></m-col>
      <m-col :span="4">
        <m-popover placement="bottom-left">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
        <m-popover placement="bottom">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
        <m-popover placement="bottom-right">
          <m-button type="primary">按钮</m-button>
          <p slot="content">使用 visible 属性控制浮层显示。</p>
        </m-popover>
      </m-col>
      <m-col :span="4">
      </m-col>
    </m-row>
  </m-space>
</m-space>
</div>

<!-- end -->


<script>
  setTimeout(function(){
    var previews = document.querySelectorAll('.code')
    for (var i = 0; i < previews.length; i++) {
      new Vue({
        el: previews[i]
      })
    }
  }, 100)
</script>