<template>
  <div class='search'>
     <van-nav-bar  left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
       <form action="/">
          <van-search
            v-model="value"
            show-action
            shape="round"
            placeholder="请输入搜索关键词"
            @search="onSearch"
          >
            <template #action>
              <div @click="onSearch">搜索</div>
            </template>
          </van-search>
        </form>
      </template>
    </van-nav-bar>
    <div v-if="sousuo">
      <van-loading size="24px" vertical v-if="flax">热门搜索加载中...</van-loading>
      <ul>
        <router-link to="" tag="li" v-for="(item , index) in hotserve" :key="index">{{item.keyword}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search } from 'mint-ui';
import { Toast } from 'vant';

export default {
  data() {
    return {
      value:'',
      hotserve:'',
      flax:true  , //设置正在加载中
      sousuo:true
    };
  },
  computed: {},
  watch: {},
  methods: {
  onSearch() {
      this.$router.push(`/data?${this.value}`);
    },
    //返回
   onClickLeft(){
      this.$router.go(-1)
      //this.$router.push("/home");
   }
  },
  //获取热门搜索
  created() {
    this.$http.get('/api/index.php/index/item/hotSearch').then((res)=>{
      this.hotserve=res.data.data
      this.flax=false//关闭正在加载中
      //console.log(this.hotserve)
    })
  },
  mounted() {

  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    
  },
}
</script>

<style  scoped>
.van-search{
  width: 330px;
}
ul{
  overflow: hidden;
  padding: 14px;
  box-shadow:0 6px 16px 0 hsla(0,0%,55.3%,.16);}
li{
  float: left;
  padding: 8.84px 18.23px;
  border: 1px solid #dcdcdc;
  margin-right: 9.3px;
  margin-bottom: 6.3px;
  color: #666;
  height: 15.5px;
  font-size: 14px;
}

</style>