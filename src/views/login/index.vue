<template>
  <div class="login">
    <div class="bgTop">
      <i class="van-icon van-icon-arrow-left" @click="back"></i>
      <div @click="click">
        <p :class="{ active: falg }">注册</p>
        <p :class="{ active: !falg }">登录</p>
      </div>
    </div>
    <div class="form">
      <van-field
        v-model="username"
        placeholder="请输入手机号"
        type="tel"
        input-align="center"
      />
      <van-field
        v-if="!falg"
        v-model="password"
        placeholder="请输入密码"
        type="password"
        input-align="center"
      />
      <van-button type="info" size="large" v-if="!falg" @click="setIn"
        >登录</van-button
      >
      <van-button type="info" size="large" v-else>注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      falg: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    back () {
      this.$router.push('/main')
    },
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
          const token = result.token
          const code = +result.status
          if (code === 200) {
            localStorage.setItem(
              'token',
              JSON.stringify({
                uid: uid,
                token: token
              })
            )
            this.$router.push('/')
          } else {
            alert(info)
          }
        })
    },
    click () {
      this.falg = !this.falg
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

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.login {
  .bgTop {
    width: 100%;
    height: 239px;
    background-image: url("https://m.szsmyg.com/_nuxt/img/login-banner.fbecc7f.png");
    background-size: cover;
    position: relative;
    i.van-icon {
      position: relative;
      font-size: 24px;
      color: #fff;
      text-rendering: auto;
      top: 11px;
      left: 11px;
    }
    div {
      width: 100%;
      height: 46px;
      position: absolute;
      bottom: 0;
      color: #fff;
      p {
        width: 50%;
        height: 100%;
        line-height: 46px;
        display: inline-block;
        text-align: center;
      }
      .active {
        color: #edee0c;
      }
    }
  }
  div.form {
    padding: 0 11px;
    div.van-field {
      width: 100%;
      height: 55px;
    }
  }
}
</style>
