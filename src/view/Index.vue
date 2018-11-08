<template>
  <div id="index">
    <van-search placeholder="请输入搜索关键词" style="background-color: #1387ff;" v-model="value"/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
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
      }
    },
    methods: {
    
    },
    mounted() {
  
    }
  }
</script>

<style scoped>

</style>