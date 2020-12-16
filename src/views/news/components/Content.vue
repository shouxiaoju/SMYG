<template>
  <div class="content">
    <div class="pic">
      <img
        src="https://www.szsmyg.com/upload_file/200327/15852862727208.png"
        alt=""
      />
    </div>
    <van-tabs sticky>
      <van-tab v-for="item in title" :key="item.id" :title="item">
        <ul class="news">
          <li v-for="item in Lists" :key="item.id">
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
      </van-tab>
    </van-tabs>
    <!-- <van-sticky :offset-top="50">
       <van-button type="info">吸顶距离</van-button>
     <ul class="nav">
        <li v-for="item in title" :key="item">{{ item }}</li>
      </ul>
      <van-tabs v-model="active">
        <van-tab title="标签 1">
          <ul class="news">
            <li v-for="item in Lists" :key="item.id">
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
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
    </van-sticky> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      Lists: [],
      newsList: [],
      title: ['资讯', '早报', '公告']
    }
  },
  computed: {},
  watch: {},
  methods: {
    getList () {
      this.$http.get('/api/index.php/index/news').then(res => {
        this.Lists = res.data.data.data
        console.log(this.Lists)
      })
    }
    /* click() {
      this.$http.get("/api/index.php/index/news/index").then(res => {
        this.newsList2 = res.data.data.data;
        // this.newsList1;
        this.newsList2.forEach(item => {
          this.newsList1.push(item);
        });
        console.log(this.newsList1);
      });
    } */
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
div.content {
  padding: 14px 14px 0;
  //   overflow: hidden;
  div.pic {
    width: 100%;
    height: 194px;
    overflow: hidden;
  }
  .van-tabs__nav {
    position: fixed;
    top: 100px;
  }
  /* ul.nav {
    line-height: 58px;
    display: flex;
    text-align: center;
    li {
    }
  } */
  ul.news {
    overflow: auto;

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
