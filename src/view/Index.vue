<template>
  <div id="index">
    <mt-header style="background-color: #26a2ff;" fixed title="固定在顶部"></mt-header>
  
    <!--<mt-tab-container style="margin-top: 33px;" v-model="navbar_itemValue">-->
      <!--<mt-tab-container-item id="tab-container1">-->
        <!--<mt-cell v-for="n in 10" :key="n.id" title="tab-container 1"></mt-cell>-->
      <!--</mt-tab-container-item>-->
      <!--<mt-tab-container-item id="tab-container2">-->
        <!--<mt-cell v-for="n in 5" :key="n.id" title="tab-container 2"></mt-cell>-->
      <!--</mt-tab-container-item>-->
      <!--<mt-tab-container-item id="tab-container3">-->
        <!--<mt-cell v-for="n in 7" :key="n.id" title="tab-container 3"></mt-cell>-->
      <!--</mt-tab-container-item>-->
    <!--</mt-tab-container>-->
    
    <mt-tabbar fixed>
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
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
  
        navbar_itemValue: null,
  
        Icon_home: require('../assets/tabbar/home-unactive.png'),
        Icon_add: require('../assets/tabbar/add-unactive.png'),
        Icon_me: require('../assets/tabbar/me-unactive.png'),
  
      }
    },
    methods: {
  
      btn_home() {
        this.resetIcon();
        this.Icon_home = require('../assets/tabbar/home-active.png');
      },
  
      btn_add() {
        this.resetIcon();
        this.Icon_add = require('../assets/tabbar/add-active.png');
      },
  
      btn_me() {
        this.resetIcon();
        this.Icon_me = require('../assets/tabbar/me-active.png');
      },
      
      resetIcon() {
          this.Icon_home = require('../assets/tabbar/home-unactive.png'),
          this.Icon_add = require('../assets/tabbar/add-unactive.png'),
          this.Icon_me = require('../assets/tabbar/me-unactive.png')
      }
      
    },
    mounted() {
      // this.channel_init()
    }
  }
</script>

<style scoped>

</style>