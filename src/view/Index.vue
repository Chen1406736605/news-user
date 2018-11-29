<template>
  <div id="index">
    <mt-header fixed title="新闻头条">
      <mt-button
        @click="btn_more"
        icon="more"
        slot="left"></mt-button>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    
    <mt-tabbar fixed v-model="selected_index_tabbar">
      <mt-tab-item id="首页" @click.native="btn_home">
        <img slot="icon" :src="Icon_home">
        首页
      </mt-tab-item>
      <mt-tab-item id="发布" @click.native="btn_add">
        <img slot="icon" :src="Icon_add">
        发布
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="btn_me">
        <img slot="icon" :src="Icon_me">
        我的
      </mt-tab-item>
    </mt-tabbar>
    
    <mt-popup
      position="left"
      v-model="channelVisible">
      <div style="height: 100vh; width: 70vw;">
        <mt-header fixed title="频道选择"></mt-header>
        <br><br><br>
        <div v-for="item in 10" :key="item.id">
          <mt-button style="width: 200px;">btn_{{item}}</mt-button>
          <br><br>
        </div>
      </div>
    </mt-popup>
    
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
  
        navbar_itemValue: null,
  
        Icon_home: require('../assets/images/tabbar/home-unactive.png'),
        Icon_add: require('../assets/images/tabbar/add-unactive.png'),
        Icon_me: require('../assets/images/tabbar/me-unactive.png'),
  
        selected_index_tabbar: null,
  
        channelVisible: false
  
      }
    },
    methods: {
      
      btn() {
        this.channelVisible = false;
      },
  
      btn_more() {
        this.channelVisible = true;
      },
  
      btn_home() {
        this.resetIcon();
        this.Icon_home = require('../assets/images/tabbar/home-active.png');
      },
  
      btn_add() {
        this.resetIcon();
        this.Icon_add = require('../assets/images/tabbar/add-active.png');
      },
  
      btn_me() {
        this.resetIcon();
        this.Icon_me = require('../assets/images/tabbar/me-active.png');
      },
      
      resetIcon() {
          this.Icon_home = require('../assets/images/tabbar/home-unactive.png'),
          this.Icon_add = require('../assets/images/tabbar/add-unactive.png'),
          this.Icon_me = require('../assets/images/tabbar/me-unactive.png')
      }
      
    },
    mounted() {
      // this.channel_init()
    }
  }
</script>

<style scoped>

</style>