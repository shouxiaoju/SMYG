<template>
  <div class="header">
    <div class="top">
      <span>
        <van-nav-bar class="back" left-arrow></van-nav-bar>
        <img src="https://m.szsmyg.com/_nuxt/img/logo2.29718ed.png" alt="" />
      </span>
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
.header {
  height: 50px;
  background: #fff;
}
div.top {
  height: 50px;
  span {
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    position: fixed;

    .back {
      position: absolute;
      font-size: 40px;
    }

    img {
      width: 110px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
</style>
