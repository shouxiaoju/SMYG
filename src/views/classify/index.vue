<template>
  <div class="classify">
    <van-search @click="onSearch1"  shape="round" placeholder="请输入元器件型号/参数" />
    <div class="call">
    <van-sidebar v-model="activeKey" >
      <div class="div1" v-for="(item) in list" :key="item.cid" @click="buut(item.cid )">
        <van-sidebar-item  :title="item.name" />
      </div>
    </van-sidebar>
    </div>
    <div class="div2">
      <ul>
        <li v-for="(item,index) in list1" :key="index" @click="but(item.cid)">
          <div style="text-aling='center'">
            <img :src="item.icon_pic" alt="" v-if="item.icon_pic!=''"> 
            <img v-if="item.icon_pic==''" src="../../assets/smygbox.png" alt="">
            <p>{{item.name}}</p>
          </div>
        
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      list:[],
      id:105,
      list1:[],
      uid:''
    };
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    onSearch1() {
      this.$router.push('/search');
    },
    but(id2){
      this.$router.push(`/data?&cid_1=${this.id}&cid_2=${id2}`);
    },
    buut(cid){
      this.id=cid
      //this.name=name
      this.$http.get(`/api/index.php/index/item/catlist?cid=${this.id}`).then((res)=>{
      console.log(res.data.data)
      this.list1=res.data.data
    }) 
       console.log(cid);
    }
  },
  created() {
   
    
    this.activeKey=(window.location.search).substr(1).split('&')[0]
    if((window.location.search).substr(1).split('&')[1]){
      this.id=(window.location.search).substr(1).split('&')[1]
    }else{
      this.id=105
    }
    this.$http.get('/api/index.php/index/item/catlist').then((res)=>{
      this.list=res.data.data
    })
     this.$http.get(`/api/index.php/index/item/catlist?cid=${this.id}`).then((res)=>{
      console.log(res.data.data)
      this.list1=res.data.data
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
.classify{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

}

.van-search{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 55px;
  
}
.call{
  width: 138.14px;
  height:684px;
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
}
.van-sidebar{
  flex: 1;
  width: 138.14px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 55px;
  
}
.van-sidebar-item{
  display:block;
  width: 138.14px;
  height: 55.25px;
  text-align: center;
}
.div1{
  width: 138.14px;
  height: 55.25px;
}
.van-sidebar-item__text{
  width: 138.14px;
  height: 55.25px;
  display: block;
}
.div2{
  width: 270px;
  height: 634px;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 55px;
 
}
img{
  width: 106px;
  height: 106px;
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li{
  text-align: center;
}
.p1{
  margin-right: 150px;
}
</style>