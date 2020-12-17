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
      <van-submit-bar v-if="a" :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
      <van-submit-bar v-if="a==false"  button-text="删除" @submit="delt" >
        <van-checkbox v-model="checked" class="ckae">全选</van-checkbox>
      </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked:'',
      a:true
    };
  },
  computed: {},
  watch: {},
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
  },
  created() {

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
.van-checkbox{
  position: absolute;
  left: 10px;
}
</style>