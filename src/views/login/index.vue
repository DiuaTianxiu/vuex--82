/* eslint-disable no-unused-vars */
<template>
  <div class="login" >
    <h1>登录</h1>
    <van-cell-group>
        <van-icon name="phone-circle" />
        <van-field
        v-model='user.mobile'
          right-icon="question-o"
          placeholder="请输入手机号"
        />
      <van-icon name="lock" />
      <van-field
      v-model='user.code'
      center
      clearable
      placeholder="请输入短信验证码"
    >
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>
    </van-cell-group>
    <van-button round type="info" @click='onLogin' >登录</van-button>

  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '15201230123',
        code: '246810'
      }
    }
  },
  methods: {

    async onLogin () {
      try {
        const { data } = await login(this.user)
        console.log(data)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err.response)
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped >
  .login{
    h1{
      background-color:pink;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .van-icon{
      float: left;
      vertical-align: middle;
      margin-top: 10px;
    }
    .van-cell {
      float: right;
      width: 90%;
      vertical-align: middle;
    }
    .van-button--round{
      text-align: center;
      width: 100%;
      margin-top: 30px;
    }
  }
</style>
