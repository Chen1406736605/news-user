<template>
  <div id="index">
    <mt-header style="background-color: #26a2ff;" fixed title="固定在顶部"></mt-header>
    
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/tabbar/home-unactive.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/tabbar/add-unactive.png">
        发布
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/tabbar/me-unactive.png">
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
        selected: null
      }
    },
    methods: {
      
      channel_init() {
        this.axios.get('system-init/channel')
          .then(res => {
            this.channel_name = res.data
          })
      },
      
    },
    mounted() {
      // this.channel_init()
    }
  }
</script>

<style scoped>

</style>