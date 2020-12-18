<template>
  <div class="information">
    <div>
      <div class="zixun-title tuijian-title">
        <img src="https://m.szsmyg.com/_nuxt/img/hangye.15453a7.png" alt="" />
        <router-link tag="a" to="/news" class="more">
          更多
        </router-link>
      </div>
      <ul>
        <li v-for="item in newsList" :key="item.id">
          <img :src="item.pic" alt="" />
          <div class="box">
            <p>{{ item.title }}</p>
            <div>
              <span>发布时间:</span>
              <span>{{ item.create_time }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    getList () {
      this.$http
        .get('/api/index.php/index/news/index')
        .then(res => {
          this.newsList = res.data.data.data.splice(0, 5)
          // console.log(this.newsList)
        })
    }
  },
  created () {
    this.getList()
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
.information {
  padding: 0 13px;
  div.zixun-title {
    width: 414px;
    height: 40px;
    box-sizing: border-box;
    margin-top: 22px;
    padding: 0 0 23px 14px;
    display: flex;
    justify-content: space-between;
    img {
      width: 242px;
      height: 100%;
    }
    a {
      display: block;
      width: 55px;
      height: 100%;
      color: #ffa300;
      font-size: 13px;
    }
  }
  ul {
    li {
      padding: 10px 0;
      display: flex;
      img {
        width: 132px;
        height: 84px;
      }
      div.box {
        width: 254px;
        height: 84px;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          margin: 0;
          font-size: 16px;
        }
        div {
          span {
            font-size: 14px;
            color: gray;
          }
        }
      }
    }
  }
}
</style>
