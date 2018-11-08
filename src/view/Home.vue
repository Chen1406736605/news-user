<template>
    <van-pull-refresh style="height: 100vh; margin-top: 50px;" v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
      <br>
      <span style="font-family: 'Calisto MT'; font-size: smaller;" @click="see_more">查看更多>></span>
    </van-pull-refresh>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        count: 0,
        isLoading: false,
      }
    },
    
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
          this.count++;
        }, 1500);
      },
  
      see_more() {
        // console.log(11)
      },
    }
  }
</script>

<style scoped>

</style>