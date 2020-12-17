<template>
  <div class="menu">
    <van-grid id="van-grid" column-num="5" icon-size="33px">
      <van-grid-item
        class="item"
        v-for="(item, index) in dataList"
        :key="item.cid"
        :icon="item.icon_pic"
        :text="item.name"
        @click="onclick(item.cid, index)"
      />
      <van-grid-item
        class="item"
        icon="https://www.szsmyg.com/upload_pic/181002/more_one.png"
        text="更多"
        to="/classify?0&105"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    getList () {
      this.$http.get('/api/index.php/index/item/catlist').then(res => {
        this.dataList = res.data.data.splice(0, 9)
      })
    },
    onclick (id, num) {
      this.$router.push(`/classify?${id}&${num}`)
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
.menu {
  margin-top: 55.25px;
  #van-grid {
    // padding-top: 17px;
    // box-sizing: border-box;
  }
}
</style>
