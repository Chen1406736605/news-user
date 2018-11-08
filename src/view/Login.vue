<template>
  <div>
    <van-nav-bar
      title="登录"
      left-arrow
      fixed
      @click-left="login_back"
    />
    <br><br><br><br><br><br><br>
    <h1>Welcome</h1>
    <br><br><br><br>
    <van-cell-group :model="loginForm">
      <van-field
        v-model="loginForm.username"
        label="用户名"
        placeholder="请输入用户名"
      />
    
      <van-field
        v-model="loginForm.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <br><br><br>
    <van-button type="default"
                @click="btn_login"
                style="color: #0092f2; width: 200px;" round>登 录</van-button>
    <br><br>
    <van-row>
      <a style="font-size: x-small; color: #0092f2;" href="#">注册账号</a>
      <div style="display: inline-block; width: 18px; height: 10px;">
        <div style="display: inline-block; height: 10px; width: 1px; background-color: darkgrey;"></div>
      </div>
      <a style="font-size: x-small; color: #0092f2;" href="#">忘记密码</a>
    </van-row>
  
    <van-popup v-model="isLoading_Login" style="border-radius: 15px; background-color: black;">
      <van-loading color="write"/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: null,
          password: null
        },
        isLoading_Login: false,
      }
    },
    
    methods: {
      login_back() {
      
      },
  
      btn_login() {
        this.isLoading_Login = true;
      }
    }
  }
</script>

<style scoped>

</style>