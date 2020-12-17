<template>
  <div class="main">
    <div class="head">
      <div class="icon">
        <img src="https://m.szsmyg.com/_nuxt/img/my-set.f36d469.png" alt="" />
      </div>
      <div class="userInfo">
        <img src="https://api.szsmyg.com/images/user/face.png" alt="" />
        <div>
          <h2>深铭易购用户</h2>
          <h3>您还没有填写个性签名呢</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
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
* {
  margin: 0;
  padding: 0;
}
.main {
  .head {
    width: 100%;
    height: 230px;
    background-image: url("https://m.szsmyg.com/_nuxt/img/my-head-bg.3201f66.png");
    background-size: cover;
    .icon {
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      padding: 22px 14px 0 0;
      img {
        width: 23px;
        height: 23px;
        float: right;
      }
    }
    .userInfo {
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      padding: 19px 14px 0 16px;
      img {
        width: 63px;
        height: 63px;
      }
    }
  }
}
</style>
