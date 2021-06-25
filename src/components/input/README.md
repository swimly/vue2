# Input

<div class="preview">
  <m-input v-model="input1"></m-input>
  <p>{{input1}}</p>
</div>

<div class="preview">
  <m-input prefix-label="用户名" v-model="input2"></m-input>
  <p>{{input2}}</p>
  <m-input prefix-icon="date" v-model="input3"></m-input>
  <p>{{input3}}</p>
</div>

<div class="preview">
  <m-input suffix-label="发送验证码" v-model="input4"></m-input>
  <p>{{input4}}</p>
  <m-input size="36" suffix-icon="date" v-model="input4"></m-input>
  <p>{{input5}}</p>
</div>

<script>
  var previews = document.querySelectorAll('.preview')
  for (var i = 0; i < previews.length; i++) {
    new Vue({
      el: previews[i],
      data: () => {
        return {
          input1: '3333',
          input2: '2222',
          input3: '2222',
          input4: '2222',
          input5: '2222'
        }
      }
    })
  }
</script>