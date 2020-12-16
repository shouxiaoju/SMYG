<template>
  <div class="search">
    <van-nav-bar left-text="返回" left-arrow>
      <template #right>
        <form action="/">
          <van-search
            v-model="value"
            show-action
            shape="round"
            action-text="搜索"
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      result: '',
      value: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      Toast('sousuo')
    }
  },
  created () {
    this.$http.get('/api/index.php/index/index/get_tdk').then(res => {
      console.log(res)
    })
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

<style scoped>
.van-search {
  width: 330px;
}
</style>
