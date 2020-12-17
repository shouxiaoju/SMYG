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
    <div class="content">
      <div class="myOrder">
        <div>
          <h2>我的订单</h2>
          <p>查看所有订单</p>
        </div>
        <van-grid :column-num="4">
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/orderList01.4fae834.png"
            text="待付款"
          />
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/orderList02.8421123.png"
            text="待发货"
          />
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/orderList03.0ff2a00.png"
            text="待收货"
          />
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/orderList04.03c2246.png"
            text="已完成"
          />
          <van-grid-item
            icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABOFBMVEUAAAAdqOoMnOIZpegImeAFl98GmN8YpegdqesQn+QBld0XpOgMneMfquwImeAVoucPn+QElt4NneMcqOoKm+ECld4UouYfquwYpegUouYVo+cSoeUKmuIZpukYpegWo+cJmuEeqesRoOUQn+Qap+kWo+cKmuEDld4WpOcFl98ZpukMnOIElt4irOwcqOoNneIZpughq+wJm+EOnuMgq+wFl98GmN8Elt8ToeUElt4Vo+ccqOoImeAKmuEequseqesFl98ImeABlN0BlNwhq+wMnOIMnOIRoOQLm+EToeUOneMcp+kXpOcirO0irOwUoeYMnOIToeUhq+wSoOUbp+kapukRoOUOnuMWpOcKm+EdqOoToeYImeAMnOIElt4Ypegfqusbp+kVo+YCld0Fl98GmOAZpukhq+xyCPqjAAAAVnRSTlMAnCYP8Hnw0ah5eULw2S7w8PCf8PDw/PHxIvbw69l9/Na7n5o9Hxr9+/r59evp5+Hfysi5rpqIfXRiX1lINSwKBvjz4t/a2b29u7Wzq6OPjo5yb282FP3zHcgAAAGuSURBVDjLlc/XWsJAEIbhMdiNYAE1iHSw99577y2AUgQC3P8dOLMJMkOO/I7fZ+df+G9HqxeDTku9HnBnDGjw1mg0fqgvLAkfyU9Bjh8XGxuw7xCqfARLcythjp7wjRh4OjZ6ne7DcFwulUr7DC0iWgVZaq6UzT5Aq3EaE+v4awqbQJONcPSjUmOweh0vZbGKTyJnsCAViRhh5vt7kiObYIJINKrMaE+zYDDoQ2KaQxzRMzHD0yyVShu3aCSiQ2EQhU0XwjEre8kBp53X971l08xkBLL3zsxEImMUXSKT0RmaEH9yCFYQyE2UkUgRZczWM5ifIyLBxE6f0/r6XWK+UMjlOPLRpWcQveQwgehSXKIRNPlOjtTg60Q8PqK6vIreIMm3I7GXLuWxWjdDkzZxGTdyk5rF0ZBNQrqu+/3+EIpTIpY1zBGRtUNDUwFomnG4hqbYjgp9IOqyikWBdBoTPdC8KgCvVzuIFrEAR/beUCfVvTBrWbNEqlWO5uWfLEsR7IyhkIugoRYY2nITuy2GTjaXaQw1jAWmp3FOIHC+eQKs9O52V7P+Ztu7aVD9Arwo0nMjrTttAAAAAElFTkSuQmCC"
            text="系统订单"
          />
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/orderList05.8e4c332.png"
            text="预定订单"
          />
        </van-grid>
      </div>
      <div class="myServe">
        <div>
          <h2>我的服务</h2>
        </div>
        <van-grid :column-num="4">
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/serviceList01.d5363e2.png"
            text="红包卡券"
          />
          <van-grid-item
            icon="https://m.szsmyg.com/_nuxt/img/serviceList06.633899a.png"
            text="浏览历史"
          />
        </van-grid>
      </div>

      <div class="menu">
        <h2>客服中心</h2>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUBAMAAADuRQ3yAAAAElBMVEUAAACAf39/f3+Af3+qVVWAf3+HH524AAAABXRSTlMAl4ikA164vcMAAABkSURBVEjH7dahDYBAEAVRIBRwBg+CEqiACiD5/beCRF0yOXeX+Xrz1IqZXL878OWSQk/PPBhNCkVD2S2YnSMr28TunH1HZC/O3pxdu2L/p4GvKCoqKgoyh8YTTzIeejwfnavvA2ARWm0+Kg7jAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="menu menu2">
        <h2>意见反馈</h2>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUBAMAAADuRQ3yAAAAElBMVEUAAACAf39/f3+Af3+qVVWAf3+HH524AAAABXRSTlMAl4ikA164vcMAAABkSURBVEjH7dahDYBAEAVRIBRwBg+CEqiACiD5/beCRF0yOXeX+Xrz1IqZXL878OWSQk/PPBhNCkVD2S2YnSMr28TunH1HZC/O3pxdu2L/p4GvKCoqKgoyh8YTTzIeejwfnavvA2ARWm0+Kg7jAAAAAElFTkSuQmCC"
          alt=""
        />
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
      height: 63px;
      padding: 19px 14px 0 16px;
      img {
        width: 63px;
        height: 63px;
        float: left;
      }
      div {
        padding-left: 14px;
        float: left;
        color: #fff;
        h2 {
          font-size: 18px;
          font-weight: 500;
        }
        h3 {
          margin-top: 6px;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
  .content {
    margin-top: -40px;
    padding: 0 14px;
    .myOrder,
    .myServe {
      padding: 0 16px;
      background: #fff;
      border-radius: 5px;
      box-shadow: rgba(141, 141, 141, 0.16) 0px 4px 20px 0px;
      div {
        height: 48px;
        line-height: 48px;
        h2 {
          float: left;
          font-size: 18px;
          font-weight: 500;
          color: #2b2b2b;
        }
        p {
          float: right;
          font-size: 16px;
          color: #939393;
        }
      }
      div.van-grid {
        height: 123px;
        padding: 11px 0;
      }
    }
    .myServe {
      margin-top: 11px;
      div.van-grid {
        height: 75px;
      }
    }
    .menu {
      height: 54px;
      line-height: 54px;
      margin-top: 11px;
      padding: 0 22px;
      h2 {
        color: #5b5b5b;
        font-size: 16px;
        font-weight: 500;
        float: left;
      }
      img {
        margin-top: 10px;
        width: 23px;
        height: 23px;
        float: right;
      }
    }
    .menu2 {
      margin: 0;
    }
  }
}
</style>
