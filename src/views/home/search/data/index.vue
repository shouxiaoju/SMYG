<template>
  <div class='data'>
    <div class="toubu">
        <van-nav-bar  left-text="返回" left-arrow @click-left="onClickLeft">
        <template #right>
        <form action="/">
            <van-search v-model="value" show-action shape="round" placeholder="请输入搜索关键词" @search="onSearch">
              <template #action>
                <div @click="onSearch">搜索</div>
              </template>
            </van-search>
          </form>
        </template>
      </van-nav-bar>
      <div class="xuanze">
          <span @click="zonghe">综合</span>
          <span @click="page">价格
            <img src="../../../../assets/价格1.png" alt="" v-if="lujing==0">
            <img src="../../../../assets/价格2.png" alt="" v-if="lujing==1">
            <img src="../../../../assets/价格3.png" alt="" v-if="lujing==2">
          </span>
          <span @click="shaixuan">筛选</span>
      </div>
    </div>
    <ul>
      <van-list v-model="loading" :finished="finished" :finished-text="tishi" >
      <li v-for="(item,index) in list" :key="index">
        <p class="p1">{{item.name}}</p>
        <b class="a1" @click="tiaozhuan(item.item_id)" >
          <img :src="item.pic" alt="" v-if="item.pic!=null"> 
          <img v-if="item.pic==null" src="../../../../assets/smygbox.png" alt="">
          <span>
            <p>品牌： {{item.brand}}</p>
            <p>型号：  {{item.model_name}}</p>
            <p>封装：  {{item.feng_zhuang}}</p>
          </span>
        </b>
        <div class="but">
            加入购物车
          </div>
        <div class="xiangq">
          <span>商品价格</span> 
           <span class="span1">{{(item.arr_price.l)[0]}}:</span>
           <span class="span2">{{(item.arr_price.r)[0]}}</span>
           <img src="../../../../assets/下载.png" alt="" :class="[a&&rotate==index?'go':'aa']" @click.self="start(index)">
         </div>
         <div class="xiangq1" v-if="rotate==index&&a">
           <span>
           <p v-for="(item,index) in item.arr_price.l" :key="index">{{item}}:</p>
           </span>
           <span>
           <p v-for="(item,index) in item.arr_price.r" :key="index">{{item}}</p>
           </span>
         </div>
      </li>
      </van-list>
    </ul>
    <van-popup v-model="show" position="right" :style="{ width: '331px' }">
    <div class="popu1">
      <div class="pin1">
        <span>品牌</span>
        <img src="../../../../assets/下载.png" alt="" class="tu_1">
      </div>
      <div >

      </div>
    </div>
  </van-popup>
  </div>
</template>

<script>
import { Search } from 'mint-ui';
import { Toast } from 'vant';
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue'
Vue.use(InfiniteScroll);
export default {
  data() {
    return {
      value:'',//搜索的关键词
      num:0,//控制升序降序
      url:'',//接收的参数
      lujing:0,//控制升序降序的显示
      list:[],//商品列表
      newlist:[],
      newlist1:[],
      rotate:null,//动态添加类名
      a:0,//显示隐藏
      page1:1,//页数
      status:null,//返回状态码
      c:0,//用来判断当前接口条件
      show:false,
      loading: false,
      finished: false,
      tishi:'没有更多了',
    };
  },
  computed: {},
  watch: {
    
  },
  methods: {
    handleScroll() {
      var top = Math.floor( document.documentElement.scrollTop)
      var het= Math.floor( document.documentElement.scrollHeight)
      var clhet= Math.floor( document.documentElement.clientHeight)
      if(het-top-clhet<300){
        this.loading = true;
        if(this.c==0){   
          if(this.status==200){  
          this.page1+=1
          this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=&encap=&jingying_type=`).then((res)=>{
            if(res.data.status==500){
              this.finished = true;
              this.status= res.data.status
              this.tishi="没有更多商品了"
              return
            }else{
              this.newlist=res.data.data
              this.newlist.forEach(item => {
                this.list.push(item)
              });
                this.status= res.data.status
                this.loading = false;
            }
        })
        }else{
           this.finished = true;
        }
      }else if(this.c==1){
        if(this.status==200){  
          this.page1+=1
          this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=asc&encap=&jingying_type=`).then((res)=>{
          if(res.data.status==500){
            this.finished = true;
            this.status= res.data.status
            this.tishi="没有更多商品了"
            return
          }else{
            this.newlist=res.data.data
            this.newlist.forEach(item => {
              this.list.push(item)
            });
              this.status= res.data.status
              this.loading = false;
          }
        })
        }else{
           this.finished = true;
        }
      }else if(this.c==2){
        if(this.status==200){  
          this.page1+=1
          this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=desc&encap=&jingying_type=`).then((res)=>{
          if(res.data.status==500){
            this.finished = true;
            this.status= res.data.status
            this.tishi="没有更多商品了"
            return
          }else{
            this.newlist=res.data.data
            this.newlist.forEach(item => {
              this.list.push(item)
            });
              this.status= res.data.status
              this.loading = false;
          }
        })
        }else{
           this.finished = true;
        }
      }
         //console.log(this.list)       
    }else{
       this.finished = true;
    }
  },
    //搜索
    onSearch() {
      this.lujing=0
      this.list=[]
      this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.value}&fzFiltrate=&brandFiltrate=&priceSort=&encap=&jingying_type=`).then((res)=>{
        this.status= res.data.status
        if(this.status==500){
          this.finished = true;
          this.tishi="没有找得到符合要求的商品"
        }else{
          this.newlist1= res.data.data
          this.newlist1.forEach(item => {
                this.list.push(item)
              });
              this.c=0
        }
      })
    },
    //返回
    onClickLeft(){
      this.$router.go(-1)
    },
    //综合排序
     zonghe() {
      this.lujing=0
      this.list=[]
      this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=&encap=&jingying_type=`).then((res)=>{
      this.newlist1= res.data.data
      this.newlist1.forEach(item => {
              this.list.push(item)
            });
      this.status= res.data.status
      this.c=0
    })
    },
    //价格排序
     page() {
      if(this.num==0){
          this.list=[]
          this.num+=1
          this.lujing=1
          this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=asc&encap=&jingying_type=`).then((res)=>{
          this.newlist1= res.data.data
          this.newlist1.forEach(item => {
              this.list.push(item)
            });
          this.c=1 
        })
      }else if(this.num==1){
        this.list=[]
          this.num+=1
          this.lujing=2
          this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=desc&encap=&jingying_type=`).then((res)=>{
          this.newlist1= res.data.data
          this.newlist1.forEach(item => {
              this.list.push(item)
            });
           this.c=2 
          })
      }else if(this.num>=2){
        this.list=[]
          this.num=0
          this.lujing=0
          this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=&encap=&jingying_type=`).then((res)=>{
          this.newlist1= res.data.data
          this.newlist1.forEach(item => {
              this.list.push(item)
            });
          this.c=0  
        })
      }
    },
    //筛选排序
     shaixuan() {
       this.show=true
      
    },
    //点击动画
      start(index){
        this.a=! this.a
        this.rotate=index
    
      },
      //跳详情
      tiaozhuan(name){
        this.$router.push(`/detail?${name}`);
        //console.log(name)
      }
  },
  created() {
      this.url=(window.location.search).substr(1)
       //this.url=(location.hash || '').split('?')[1].split('&')
      console.log(this.url)
      this.$http.get(`/api/index.php/index/item/itemlist?page=${this.page1}&str_keyword=${this.url}&fzFiltrate=&brandFiltrate=&priceSort=&encap=&jingying_type=`).then((res)=>{
      this.status= res.data.status
      if(this.status==500){
        this.finished = true;
        this.tishi="没有找得到符合要求的商品"
      }else{
        this.newlist1= res.data.data
        this.newlist1.forEach(item => {
              this.list.push(item)
            });
        this.c=0
      }
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)//滚动条事件监听
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
*{
  margin: 0;
  padding: 0;
}
.van-search{
  width: 330px;
}
.data{
  width: 100%;
  height: 100%;
  overflow: height;
}
.toubu{
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 90px;
  z-index: 99;
}
.xuanze{
    display: flex;
    background-color: #fff;
    justify-content: space-around;
}
.xuanze span{
    display: inline-block;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
   
}
.xuanze img{
    width: 9.938px;
    height: 14.363px;
    margin-left: 5.525px;
    vertical-align: middle;
}
ul{
  flex: 1;
  width: 100%;
  margin-top: 90px;
  overflow: auto;
  background-color: #f7f7f7;
}
ul li{
  width: 100%;
  background-color: #fff;
  margin-top: 2px;
  margin-bottom: 9px;
  padding: 0 15.4px 32px 15.4px;
  overflow: hidden;
  position: relative;
}
ul li img{
  float: left;
  width: 143px;
  height: 143px;
}
ul li span{
  float: left;
  margin-left: 11.5px;
}
ul li span p{
  height: 27px;
  line-height: 27px;
}
.p1{
  height: 30px;
  line-height: 30px;
  margin-bottom: 11px;
}
.but{
  width: 96.6px;
  height: 38.6px;
  line-height: 38.6px;
  background-color: #ff7802;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  margin-left: 290px;
}
.xiangq{
  height: 22px;
}
.xiangq span{
  line-height: 22px;
}
.xiangq .span1{
  width: 61px;
  font-size: 14px;
  margin-left: 10px;
  text-align: right;
}
.xiangq .span2{
  font-size: 14px;
  color: #ff7802;
}
.xiangq img{
  width: 15px;
  height: 9px;
  margin-top: 6px;
  margin-left: 6px;
}
.a1{
  display: block;
  height: 143px;
  overflow: hidden;
  font-weight: 400;
}
.aa{
    transition: all 0.3s;
}
.go{
    transform:rotate(180deg);
    transition: all 0.3s;
}
.xiangq1 span:nth-of-type(1){
    font-size: 14px;
    width: 119.5px;
    text-align: right;
    margin-left: 25px;
}
.xiangq1 span:nth-of-type(2){
  font-size: 14px;
  color: #ff7802;
}
.popu1{
  box-sizing: border-box;
  height: 736px;
  padding-top: 33px;
  padding-left: 11px;
}
.tu_1{
  width: 12px;
  height: 10px;
}
.pin1{
  width: 296px;
  height: 26.9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>