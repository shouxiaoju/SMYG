<template>
  <div class="header">
        <van-nav-bar class="back" left-arrow @click-left='back'></van-nav-bar>
        <img src="https://m.szsmyg.com/_nuxt/img/logo2.29718ed.png" alt="" />
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
      this.$router.push('/home')
      console.log('aaa')
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
.header {

  background: #fff;
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    position: fixed;
    opacity:1;
    z-index:99999
}

    // background:red

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
</style>
