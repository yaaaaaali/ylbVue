<template>
<app-header />
  <div class="login-content">
    <div class="login-flex">
      <div class="login-left">
        <p>万民用户知心托付&nbsp;&nbsp;&nbsp;&nbsp;<span>12.7%</span>历史年化收益</p>
        <p>千万级技术研发投入&nbsp;&nbsp;&nbsp;&nbsp;亿级注册资本平台  </p>
      </div>
      <!---->
      <div class="login-box">
        <h3 class="login-title">用户注册</h3>
        <form action="" id="register_Submit">
          <div class="alert-input">
            <input type="text" class="form-border user-num" name="mobile" placeholder="请输入11位手机号">
            <p class="prompt_num"></p>
            <input type="password" placeholder="请输入6-20位英文和数字混合密码" class="form-border user-pass" autocomplete name="password">
            <p class="prompt_pass"></p>
            <div class="form-yzm form-border">
              <input class="yzm-write" type="text" name="" placeholder="输入短信验证码">
              <input class="yzm-send" type="text" value="获取验证码" disabled="disabled" id="yzmBtn" readonly="readonly" >
            </div>
            <p class="prompt_yan"></p>
          </div>
          <div class="alert-input-agree">
            <i class="fa fa-square-o"></i>我已阅读并同意<a href="javascript:;" target="_blank">《动力金融网注册服务协议》</a>
          </div>
          <div class="alert-input-btn">
            <input type="submit" class="login-submit" value="注册">
          </div>
        </form>
        <div class="login-skip">
          已有账号？ <a href="login.html" target="_blank">登录</a>
        </div>
      </div>
    </div>
  </div>
<app-footer />
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: 'RegisterView',
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>