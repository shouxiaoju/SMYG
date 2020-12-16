<template>
  <div>
    <div data-v-375518d2="" class="hot-brand">
      <img
        data-v-375518d2=""
        src="https://m.szsmyg.com/_nuxt/img/hot-brand-title.57a8a6c.png"
        alt=""
        class="title"
      /><img
        data-v-375518d2=""
        src="https://www.szsmyg.com/upload_file/200408/15863346856387.png"
        alt=""
        class="content"
      />
    </div>
    <div class="connect-phone" data-v-375518d2="">
      <div class="connect-item item1" data-v-375518d2="">
        <div class="img" data-v-375518d2="">
          <img
            src="https://m.szsmyg.com/_nuxt/img/dianhua@2x.8f43abb.png"
            alt=""
            data-v-375518d2=""
          />
        </div>
        <div class="connect-box" data-v-375518d2="">
          <p data-v-375518d2="">客服电话</p>
          <a href="tel:0755-82722999" data-v-375518d2="">0755-82722999</a>
        </div>
      </div>
      <div class="connect-item item2" data-v-375518d2="">
        <div class="img" data-v-375518d2="">
          <img
            src="https://m.szsmyg.com/_nuxt/img/qq01@2x.807b59d.png"
            alt=""
            data-v-375518d2=""
          />
        </div>
        <div class="connect-box" data-v-375518d2="">
          <p data-v-375518d2="">企业QQ</p>
          <a href="tel:800064777" data-v-375518d2="">800064777</a>
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
.hot-brand {
  padding: 0 13px;
}
.title {
  width: 217.4px;
  height: 17px;
  margin: 28px 0 22px;
}
.content {
  width: 384px;
  height: 240.5px;
}
.connect-phone {
  padding: 0 13px;
  display: flex;
}
.connect-item {
  width: 190px;
  height: 56px;
  display: flex;
  overflow: hidden;
  vertical-align: middle;
  .img {
    width: 55px;
    height: 25px;
    text-align: center;
    margin-top: 13px;
    img {
      width: 23px;
      height: 23px;
    }
  }
  .connect-box {
    widows: 134px;
    height: 36px;
    margin-top: 10px;
    p {
      // width: 134px;
      height: 18px;
      margin: 0;
      margin-bottom: 3px;
    }
    a {
      font-size: 18px;
      font-weight: 600;
      display: block;
      color: #fff;
      white-space: nowrap;
    }
  }
}
.item1 {
  margin: 28px 3px 28px 0;
  background-color: #eb8b1a;
}
.item2 {
  margin: 28px 0 28px 3px;
  background-color: #62bb9f;
}
</style>
