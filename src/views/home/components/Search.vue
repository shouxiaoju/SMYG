<template>
  <div id="nav">
    <img src="../../../assets/logo.d291ac7.png" alt="" />
    <van-search shape="round" placeholder="请输入搜索关键词" @click="tex" />
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
    tex () {
      this.$router.push('/search')
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

<style scoped>
#nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 55.25px;
  padding-left: 14px;
  padding-right: 15px;
  background: linear-gradient(135deg, #009de6, #0090da);
  /* display: flex; */
  align-items: center;
  z-index: 99;
}
#nav img {
  width: 42px;
  height: 22px;
}
#nav .van-search {
  background: none;
  width: 350.562px;
  height: 35.45;
  padding-left: 16.57px;
}
</style>
