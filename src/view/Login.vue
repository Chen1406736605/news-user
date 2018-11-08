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
    <br><br>
    <van-button type="default" style="color: #0092f2; width: 200px;" round>登 录</van-button>
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
        }
      }
    },
    
    methods: {
      login_back() {
      
      }
    }
  }
</script>

<style scoped>

</style>