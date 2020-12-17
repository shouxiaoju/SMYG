<template>
  <div class="content">
    <div class="pic">
      <img
        src="https://www.szsmyg.com/upload_file/200327/15852862727208.png"
        alt=""
      />
    </div>
    <van-tabs sticky offset-top="50" @click="onClick">
      <van-tab
        v-for="item in title"
        :key="item.id"
        :title="item.tit"
        :id="item.id"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="bool"
          @load="onLoad"
        >
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
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
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      type: 1,
      Lists: [],
      newsList: [],
      title: [
        { tit: '资讯', id: 1 },
        { tit: '早报', id: 3 },
        { tit: '公告', id: 2 }
      ],
      loading: false,
      finished: false,
      bool: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    getList (page, type) {
      this.$http
        .get(
          `/api/index.php/index/news/index?page=${this.page}&type=${this.type}`
        )
        .then(res => {
          this.newsList = res.data.data.data
          this.newsList.forEach(item => {
            this.Lists.push(item)
          })
        })
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.getList(this.page, this.type)

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.newsList.length === 0) {
          this.finished = true
        }
        console.log(this.newsList.length)
        this.page += 1
      }, 1000)
    },
    onClick (num, title) {
      this.page = 1
      this.Lists = []
      switch (num) {
        case 0:
          this.type = 1
          this.getList(this.page, this.type)
          break
        case 1:
          this.type = 3
          this.getList(this.page, this.type)
          break
        case 2:
          this.type = 2
          this.getList(this.page, this.type)
          break
      }
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
div.content {
  padding: 14px 14px 0;
  //   overflow: hidden;
  div.pic {
    width: 100%;
    height: 194px;
    margin-top: 50px;
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
