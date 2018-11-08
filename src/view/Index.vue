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
        <br><br><br>
        <van-cell-group>
          <van-cell v-for="item in channel_name"
                    clickable
                    @click="btn_chooseType(item.type)"
                    :key="item.id"
                    :title="item.typeName"/>
        </van-cell-group>
        <br>
      </div>
    </van-popup>
    
    <router-view/>
    
    <van-tabbar v-model="active">
      <van-tabbar-item @click="btn_home" icon="home" info="10">首页</van-tabbar-item>
      <van-tabbar-item @click="btn_release" icon="add-o" dot>发布</van-tabbar-item>
      <van-tabbar-item @click="btn_me" icon="contact">{{ indexTabbar }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        active: 0,
        menu_visible: false,
        channel_name: [],
        indexTabbar: '未登录'
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
        // this.$router.push('/me')
        this.$router.push('/login')
      },
      
      channel_init() {
        this.axios.get('system-init/channel')
          .then(res => {
            this.channel_name = res.data
          })
      },
  
      btn_chooseType(type) {
        this.menu_visible = false;
      }
      
    },
    mounted() {
      this.channel_init()
    }
  }
</script>

<style scoped>

</style>