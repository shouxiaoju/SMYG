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
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    setIn () {
      var formdata = new FormData()
      formdata.append('username', this.username)
      formdata.append('password', this.password)
      this.$http
        .post('/api/index.php/index/login/loginweb', formdata)
        .then(res => {
          const result = res.data
          const info = result.info
          const uid = res.data.uid
          const code = result.status
          if (code === 200) {
            localStorage.setItem('token', uid)
            alert(info)
          } else {
            alert(info)
          }
          console.log(result, uid)
        })
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
