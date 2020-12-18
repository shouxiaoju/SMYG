<template>
  <div class="order">
    <div class="top">
      <i class="van-icon van-icon-arrow-left" @click="back"></i>
      我的订单
    </div>

    <van-tabs>
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
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
.order {
  .top {
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    position: relative;
    border-bottom: 1px solid #fafafa;
    i {
      font-size: 24px;
      position: absolute;
      top: 11px;
      left: 11px;
    }
  }
}
</style>
