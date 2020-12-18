<template>
  <div class="footer">
    <van-grid id="icon" icon-size="45px" :column-num="4">
      <van-grid-item
        icon="https://m.szsmyg.com/img/home-zheng.png"
        text="正品保障"
      />
      <van-grid-item
        icon="https://m.szsmyg.com/img/home-xian.png"
        text="海量现货"
      />
      <van-grid-item
        icon="https://m.szsmyg.com/img/home-jia.png"
        text="价格优势"
      />
      <van-grid-item
        icon="https://m.szsmyg.com/img/home-yi.png"
        text="一站式采购"
      />
    </van-grid>
    <div class="text">
      <div class="weblink-link">
        <div class="weblink-item item">
          关于我们
        </div>
        <div class="weblink-item item">
          联系我们
        </div>
        <div class="weblink-item item">
          常见问题
        </div>
        <div class="weblink-item">
          网站地图
        </div>
      </div>
      <p>深圳市深铭易购商务有限公司</p>
      <p>©粤ICP备17023760号-2</p>
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
.footer {
  margin-bottom: 50px;
}
.text {
  height: 111px;
  padding: 11px 0 27px;
  box-sizing: border-box;
}
div.weblink-link {
  display: flex;
  flex-wrap: wrap;
  padding: 0 11px;
  justify-content: center;
  div.weblink-item {
    margin: 0;
    padding: 3px 9px;
    border: 0;
    outline: 0;
    font-size: 12px;
    vertical-align: baseline;
    background: transparent;
    color: #999;
    box-sizing: border-box;
    position: relative;
  }
  div.item:after {
    content: "|";
    position: absolute;
    right: 0;
    top: 50%;
    height: 80%;
    width: 1px;
    transform: translateY(-50%);
  }
}

p {
  padding-top: 3px;
  text-align: center;
  margin: 0;
  font-size: 12px;
  color: #999;
}
</style>
