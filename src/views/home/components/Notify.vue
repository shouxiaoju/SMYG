<template>
  <div class="notify">
    <img src="https://m.szsmyg.com/_nuxt/img/shenminghot.82a9294.png" alt="" />
    <van-notice-bar id="notice" :scrollable="false">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>{{ text1 }}</van-swipe-item>
        <van-swipe-item>{{ text2 }}</van-swipe-item>
        <van-swipe-item>{{ text3 }}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    <div class="notify--line"></div>
    <router-link to="/news" class="notify-more">
      更多
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: '',
      text2: '',
      text3: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    getText1 () {
      this.$http
        .get('/api/index.php/index/news/index?page=1&type=1')
        .then(res => {
          this.text1 = res.data.data.data.splice(0, 1)[0].title
        })
    },
    getText2 () {
      this.$http
        .get('/api/index.php/index/news/index?page=1&type=2')
        .then(res => {
          this.text2 = res.data.data.data.splice(0, 1)[0].title
        })
    },
    getText3 () {
      this.$http
        .get('/api/index.php/index/news/index?page=1&type=3')
        .then(res => {
          this.text3 = res.data.data.data.splice(0, 1)[0].title
        })
    }
  },
  created () {
    this.getText1()
    this.getText2()
    this.getText3()
  },
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
.notify {
  width: 100%;
  height: 30px;
  padding: 0 21px 0 13px;
  text-align: center;
  img {
    width: 95.5px;
    height: 20px;
    line-height: 20px;
    float: left;
    margin-top: 5px;
  }
  #notice {
    width: 225px;
    height: 30px;
    background: #fff;
    color: gray;
    float: left;
    padding-right: 0;
    .notice-swipe {
      height: 30px;
      line-height: 30px;
    }
  }
  .notify--line {
    width: 1px;
    height: 60%;
    margin-top: 6px;
    // height: 20px;
    float: left;
    background-color: #949393;
    margin-right: 8.2px;
    margin-left: 8.2px;
  }
  a {
    display: block;
    width: 30px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    float: left;
    color: #000;
  }
}
</style>
