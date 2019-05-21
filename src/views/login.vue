<template>
  <div id="login" ref="login">
    <div class="logo">
      <img src="../assets/images/PClogo.png" width="400">
    </div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" status-icon>
      <el-form-item prop="loginname" label="用户名">
        <el-input v-model="loginForm.loginname" prefix-icon="el-icon-date"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input v-model="loginForm.pwd" prefix-icon="el-icon-date"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" :disabled="isDisabled">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var pwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
      if (value.length < 6 || value.length > 10) {
        return callback(new Error("请输入6-10位密码"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        loginname: "",
        pwd: "",
        flag: "resetpwd"
      },
      // 登陆按钮
      isDisabled: false,

      rules: {
        loginname: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: pwd, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.isDisabled = true;
      this.$api.LOGIN.login(this.loginForm).then(
        res => {
          // 登陆按钮重置可点击
          this.isDisabled = false;
          // 存储用户登陆信息
          // this.$tools.setCookie('userInfo','123',2)
        },
        error => {
          // 登陆按钮重置可点击
          this.isDisabled = false;
        }
      );
    },

    submitForm(loginForm) {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss">
#login {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/loginbg.png") 0 0 no-repeat;
  background-size: contain;
  .logo {
    height: 50px;
  }
}
</style>
