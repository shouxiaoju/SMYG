<template>
  <div class='car'>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
        <ul>
        　　<li v-for="(item,index) in list" :key="index" style="margin-top:20px;">
        　　　　<input type="checkbox" v-model="checkModel" :value="item.id">
        　　　　<img :src="item.pic" alt="" v-if="item.pic!=null"> 
                <img v-if="item.pic==null" src="../../assets/smygbox.png" alt="">
        　　　<div>
              <p>{{item.name}}</p>
              <p>型号：{{item.name}}</p>
              <p><span>￥</span>{{item.price}}</p>
              </div>
              <van-stepper :v-model="value" />
        　　</li>
        </ul>
      <van-submit-bar class="box1" v-if="a" :price="0" button-text="提交订单" @submit="onSubmit">
        <input type="checkbox" @click="checkAll" v-model="checked" value="全选" class="ckae">
      </van-submit-bar>
      <van-submit-bar class="box1" v-if="a==false"  button-text="删除" @submit="delt" >
        <input type="checkbox" @click="checkAll" v-model="checked" value="全选" class="ckae">
      </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'',
      checked:'',
      uid:'',
      num:'',
      a:true,
      list:[],
　　　checked:false, //是否全选
　　　checkModel:[] //双向数据绑定的数组，我是用的id
     
    };
  },
  computed: {},
  watch: {
    checkModel(){
　　　　if(this.checkModel.length==this.list.length){
　　　　　　this.checked=true;
　　　　}else{
　　　　　　this.checked=false;
　　　　}
　　}
  },
  methods: {
    onSubmit(){
     console.log("tijao")
    },
    delt(){

    },
     onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.a=!this.a
    },
  
   checkAll(){
　　　　if(this.checked){
　　　　　　this.checkModel=[];
　　　　}else{
　　　　　　this.list.forEach((item)=>{
　　　　　　if(this.checkModel.indexOf(item.id)==-1){
　　　　　　　　this.checkModel.push(item.id)
　　　　　　}
　　　　　　})
　　　　}
　　}
  },
  created() {
   if(localStorage.getItem("token")){
     this.uid=JSON.parse(localStorage.getItem("token")).uid
     this.num=JSON.parse(localStorage.getItem("token")).token
      this.$http.get(`/api//index.php/index/index_order/cart?token=${this.num}&uid=${this.uid}&temporary_token=`).then((res)=>{
      if(res.data.data.myshop.length!=0){
        this.list=res.data.data.myshop
      }else {
        this.list=res.data.data.other
        console.log(1)
      }
      //this.list=res.data.data.myshop
      //this.list=res.data.data.other
      console.log(res.data.data.myshop.lengths)
     /*  console.log(res.data.data.myshop+res.data.data.other)
      console.log(res.data.data.other) */
      // console.log(JSON.parse(localStorage.getItem("token")).uid)
    }) 
   } else{
     this.$router.push('/login');
   }
   /* https://m.szsmyg.com/api/index.php/index/index_order/cart?token=UZMizQsQXsPsGJGO7pAkJrJ9MU0k8VgT&uid=35286&temporary_token= */
    // http://localhost:8080/api//index.php/index/index_order/cart?token=UZMizQsQXsPsGJGO7pAkJrJ9MU0k8VgT&uid=35286&temporary_token=
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
*{
  margin: 0;
  padding: 0;
}
.ckae{
  position: absolute;
  left: 10px;
}
img{
  width: 88px;
  height: 88px;
 margin-right: 10px;
}
ul li{
  height: 135px;
  display: flex;
  align-items: center;
  position: relative;
}
ul li div{
  height: 135px;
  overflow: hidden;
}
ul li div p:nth-of-type(1){
  margin-top: 20px;
}
ul li div p:nth-of-type(3){
  color: red;
}
.van-stepper{
  height: 30px;
  position: absolute;
  right: 0;
  bottom: 10px;
}
</style>