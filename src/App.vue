<template>
  <div class='app'>
    <router-view></router-view>
    <tablebar v-show="$route.meta.showfooter"></tablebar>
  </div>
</template>

<script>
import Nav from './components/nav.vue'
export default {
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

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
  components: {
     tablebar:Nav
  },
}
</script>

<style lang='scss' scoped>

</style>

