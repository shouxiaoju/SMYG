<template>
  <div class="login">
    <van-form>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round type="info" @click="setIn">立即登录</van-button>
        <!-- <van-button round type="info" to="/register">立即注册</van-button> -->
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    setIn () {
      this.$http.post('/api/index.php/index/login/loginweb')
    }
  },
  created () {},
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

<style lang="scss" scoped></style>
