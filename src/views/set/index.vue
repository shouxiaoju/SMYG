<template>
  <div class="set">
    <div class="top">
      <i class="van-icon van-icon-arrow-left" @click="back"></i>
      设置
    </div>
    <div class="menu">
      <div>
        个人信息
        <i
          data-v-1e97304a=""
          class="van-icon van-icon-arrow van-cell__right-icon"
        ></i>
      </div>
      <div>
        地址管理
        <i
          data-v-1e97304a=""
          class="van-icon van-icon-arrow van-cell__right-icon"
        ></i>
      </div>
      <div>
        帐号与安全
        <i
          data-v-1e97304a=""
          class="van-icon van-icon-arrow van-cell__right-icon"
        ></i>
      </div>
      <div>
        关于我们
        <i
          data-v-1e97304a=""
          class="van-icon van-icon-arrow van-cell__right-icon"
        ></i>
      </div>
    </div>
    <van-button type="info" size="large" @click="setup"
      >退出当前帐号</van-button
    >
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    back () {
      this.$router.push('/main')
    },
    setup () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  },
  created () {},
  mounted () {},
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  components: {}
}
</script>

<style lang="scss" scoped>
.set {
  .top {
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    position: relative;
    border-bottom: 1px solid #fafafa;
    i {
      font-size: 24px;
      position: absolute;
      top: 11px;
      left: 11px;
    }
  }
  .menu {
    div {
      height: 26px;
      line-height: 26px;
      padding: 11px 17px;
      i {
        float: right;
      }
    }
  }
}
</style>
