<template>
  <div class='detail'>
    <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
            <van-icon name="ellipsis" size="18" />
        </template>
    </van-nav-bar>
    <main class="main">
        <img :src="list.pic" alt="" v-if="list.pic!=null"> 
        <img v-if="list.pic==null" src="../../assets/smygbox.png" alt="">
        <h3>{{list.name}}</h3>
        <p>品牌：{{list.brand}}</p>
        <p>型号：{{list.name}}</p>
        <p>封装：{{list.feng_zhuang}}</p>
        <p>包装方式：{{list.bao_zhuang_fang_shi}}</p>
        <p>销售单价</p>
        <div class="xian">
           <span>
                <p v-for="(item,index) in list.arr_price.l" :key="index">{{item}}:</p>
           </span>
           <span>
                <p v-for="(item,index) in list.arr_price.r" :key="index">{{item}}</p>
           </span>
         </div>
         <p class="pp1">商品参数:{{list.name}}</p>
         <p class="pp2">商品描述:
             <br>
             <span>{{list.description}}</span>
            </p>
    </main>
    <div class="row" >
        <van-button icon="shopping-cart-o" type="warning">加入购物车</van-button>        
        <van-button icon="bag-o" type="primary">立即购买</van-button>
    </div>
    <van-popup v-model="show" position="right">
        <a class="aa1" href="">
            <van-icon name="service-o" />
            联系客服
        </a>
        <a class="aa1" href="">
            <van-icon name="shopping-cart-o" />
            购物车
        </a>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
         show: false,
         list:''
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft(){
        this.$router.go(-1)
      },
    onClickRight(){
        this.show = true;
      },
    
  },
  created() {
     var url=(window.location.search).substr(1)
       //this.url=(location.hash || '').split('?')[1].split('&')
      console.log(url)
      this.$http.get(`/api/index.php/index/item/itemDetail?item_id=${url}`).then((res)=>{
      this.list=res.data.data
      console.log(res.data.data)
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
  components: {},
}
</script>

<style  scoped>

.van-nav-bar{
    width: 100%;
     position: fixed;
    top: 0;
    overflow: aotu;
}
.row{
    width: 100%;
    height: 53px;
    position: fixed;
    bottom: 0;
}
.van-button{
    width: 207px;
    height: 53px;
}
.aa1{
    display: block;
    width: 123px;
    height: 48px;
    padding: 0 8px 1px 8px;
    text-align: center;
    line-height: 48px;
    border-bottom: 1px solid #cecece;
}
.van-popup{
    width: 139px;
    position: fixed;
    top: 100px;
    right: 10px;
}
.main{
    padding-left: 10px;
    margin-top: 50px;
    margin-bottom: 100px;
    
}
.main img{
    width: 129px;
    height: 129px;
    margin-left: 140px;
    margin-top: 5px;
}
.xian{
    position: absolute;
    top: 400px;
    left: 100px;
    display: flex;
}
.xian span{
    width: 160px;
   font-size: 12;
}
.xian span p{
    margin: 0;
}
.xian span:nth-of-type(1){
    text-align:right;
}
.xian span:nth-of-type(2){
    color: #ff7802;
}
.pp1{
    width: 100%;
    height: 90px;
    margin-top: 180px;
    border-bottom: 1px solid #cecece;
}
.pp2{
    font-size: 14px;
}
</style>