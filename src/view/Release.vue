<template>
  <div style="margin-top: 46px;">
    <van-nav-bar right-text="发布"/>
    <van-cell-group>
      <van-field type="textarea" rows="8" v-model="value" placeholder="分享新鲜事"/>
    </van-cell-group>
    <br>
    <van-row>
      <van-col span="4">
        <van-uploader>
          <van-icon name="photograph" />
        </van-uploader>
      </van-col>
      <van-col span="20">&nbsp;</van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "Release",
    data() {
      return {
        value: null,
      }
    }
  }
</script>

<style scoped>

</style>