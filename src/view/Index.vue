<template>
  <div id="index">
    <van-nav-bar fixed title="新闻" left-arrow>
      <van-icon @click="show_menu" name="wap-nav" slot="left" />
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    
    <van-popup v-model="menu_visible" position="left">
      <div style="height: 100vh; width: 66vw;">
        <br>
        <span style="font-family: 'Harlow Solid Italic';
        font-size: large;">选择你喜欢的频道</span>
        <br><br>
        <van-button type="default">类型</van-button>&nbsp;&nbsp;
        <van-button type="default">类型</van-button>
        <br><br>
        <van-button type="default">类型</van-button>&nbsp;&nbsp;
        <van-button type="default">类型</van-button>
        <br>
      </div>
    </van-popup>
    
    <router-view/>
    
    <van-tabbar v-model="active">
      <van-tabbar-item @click="btn_home" icon="home" info="10">首页</van-tabbar-item>
      <van-tabbar-item @click="btn_release" icon="add-o" dot>发布</van-tabbar-item>
      <van-tabbar-item @click="btn_me" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        active: 0,
        value: null,
        menu_visible: false,
      }
    },
    methods: {
  
      show_menu() {
        this.menu_visible = true;
      },
  
      btn_home() {
        this.$router.push('/')
      },
  
      btn_release() {
        this.$router.push('/release')
      },
  
      btn_me() {
        this.$router.push('/me')
      }
      
    },
    mounted() {
    
    }
  }
</script>

<style scoped>

</style>