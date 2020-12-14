<template>
    <div class="nav">
            <van-tabbar route>
                <van-tabbar-item replace to="/home" icon="wap-home-o">
                    首页
                </van-tabbar-item>
                <van-tabbar-item replace to="/classify" icon="apps-o">
                    分类
                </van-tabbar-item>
                <van-tabbar-item replace to="/inquiry" icon="smile-o">
                    询价
                </van-tabbar-item>
                <van-tabbar-item replace to="/car" icon="cart-o">
                    购物车
                </van-tabbar-item>
                <van-tabbar-item replace to="/main" icon="contact">
                    我的
                </van-tabbar-item>
            </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
 
}
</script>

<style scoped >

</style>
