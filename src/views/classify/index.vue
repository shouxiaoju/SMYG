
<template>
<div>
  <van-popup v-model="show" position="right" :style="{ width: '30%' }">
    <div>asdcsdc</div>
  </van-popup>
  <button @click="but">点击</button>
</div>
  
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
  data() {
    return {
      show:false
    };
  },
  computed: {},
  watch: {},
  methods: {
      but(){
      this.show=true
    }
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
div{
 height: 100%; 
}
.classify{
height: 300px;
overflow: auto;
}
</style>