<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  
  export default {
    name: 'app',
    mounted() {
      this.$router.push("/")
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  /*@import '~vux/src/styles/1px.less';*/
</style>
