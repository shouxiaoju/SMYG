<template>
  <div class="home">
    <Search></Search>
    <div class="content">
      <Menu></Menu>
      <img
        class="van-image__img"
        data-src="https://www.szsmyg.com/upload_file/200617/15923577406206.png"
        src="https://www.szsmyg.com/upload_file/200617/15923577406206.png"
        lazy="loaded"
        style="object-fit: cover;"
      />
      <div class="nav-list item2" data-v-375518d2="">
        <a href="/activity/ticket" class="nav-item" data-v-375518d2=""
          ><div class="van-image" data-v-375518d2="">
            <img
              class="van-image__img"
              style="object-fit:cover;"
              data-src="/img/home-xinrenyouli.png"
              src="https://m.szsmyg.com/img/home-xinrenyouli.png"
              lazy="loaded"
            /></div
        ></a>
        <a href="/activity/cooperate" class="nav-item" data-v-375518d2=""
          ><div class="van-image" data-v-375518d2="">
            <img
              class="van-image__img"
              style="object-fit:cover;"
              data-src="https://m.szsmyg.com//img/home-gongyinshang.png"
              src="https://m.szsmyg.com/img/home-gongyinshang.png"
              lazy="loaded"
            /></div
        ></a>
      </div>
      <Notify></Notify>
      <HotBrand></HotBrand>
      <Information></Information>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import Menu from './components/Menu'
import Notify from './components/Notify'
import HotBrand from './components/HotBrand'
import Information from './components/Information'
import Footer from './components/Footer'
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
  components: {
    Search,
    Menu,
    Notify,
    HotBrand,
    Information,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
}
#nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 55.25px;
  padding-left: 14px;
  padding-right: 15px;
  background: linear-gradient(135deg, #009de6, #0090da);
  display: flex;
  align-items: center;
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
div.nav-list {
  padding: 16.56px;
  display: flex;
  justify-content: space-between;
  div {
    width: 184.71px;
    height: 82.79px;
  }
}
</style>
