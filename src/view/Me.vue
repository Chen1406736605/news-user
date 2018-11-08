<template>
  <div style="margin-top: 46px; background-color: #f2f2f2;">
    <van-row style="background-color: #ffffff;">
      <br>
      <van-col span="2">&nbsp;</van-col>
      <van-col>
        <img style="border-radius: 33px; height: 66px; width: 66px;" src="../assets/me/me-back.jpg" alt="">
      </van-col>
      <van-col style="margin-top: 8px;">
        <span style="margin-left: 8px;">{{username}}</span><br>
        <van-tag round style="margin-top: 6px;" size="medium" color="#f2826a">热血青年</van-tag>
      </van-col>
    </van-row>
    <van-row style="background-color: #ffffff;">
      <br><br>
      <van-col span="8">
        <span>0</span><br>
        <span>动态</span>
      </van-col>
      <van-col span="8">
        <span>0</span><br>
        <span>关注</span>
      </van-col>
      <van-col span="8">
        <span>0</span><br>
        <span>粉丝</span>
      </van-col>
    </van-row>
    <van-row style="background-color: #ffffff;"><br></van-row>
    <br>
    <van-row style="background-color: #ffffff;">
      <van-cell-group>
        <van-cell value="历史记录"
                  is-link
                  clickable />
        <van-cell value="我的收藏"
                  is-link
                  clickable />
      </van-cell-group>
    </van-row>
    <br>
    <van-row style="background-color: #ffffff;">
      <van-cell-group>
        <van-cell value="用户反馈"
                  is-link
                  clickable />
        <van-cell value="系统设置"
                  is-link
                  @click="system_visible = 'true'"
                  clickable />
      </van-cell-group>
    </van-row>
    <van-row style="background-color: #f2f2f2;"><br></van-row>
    
    <!--系统设置-->
    <van-popup v-model="system_visible" position="right">
      <div style="height: 100vh; width: 100vw; background-color: #f2f2f2;">
        <van-nav-bar
          title="设置"
          left-arrow
          @click-left="systemBack"
        />
        <br>
        <van-cell-group>
          <van-cell value="编辑资料" clickable is-link />
          <van-cell value="账号设置" clickable is-link />
        </van-cell-group>
        <br><br>
        <van-cell-group>
          <van-cell style="color: red;" clickable title="退出登录"/>
        </van-cell-group>
        <br><br>
        <span style="font-size: x-small;">v.0.0.1 Build</span>
      </div>
    </van-popup>

  </div>
</template>

<script>
  export default {
    name: "Me",
    data() {
      return {
        system_visible: false,
        username: '你算哪根葱灬'
      }
    },
    methods: {
      systemBack() {
        this.system_visible = false;
      }
    }
  }
</script>

<style scoped>
  #me-top {
    background-image: url("../assets/me/me-back.jpg");
  }
</style>