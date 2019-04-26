<template>
  <el-dialog :close-on-click-modal="false" :visible.sync="visible" width="432px">
    <el-form class="login-form" autoComplete="on" :model="regisForm" :rules="regisRules" ref="regisForm" label-position="left" v-if="loginOrRegis">
      <h3 class="title">注册</h3>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="regisForm.username" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" v-model="regisForm.password" placeholder="password" show-password></el-input>
      </el-form-item>
      <el-form-item prop="repasword">
        <el-input name="repasword" type="password" v-model="regisForm.repasword" placeholder="repasword" show-password/>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input name="tel" type="text" v-model="regisForm.tel" placeholder="tel" maxlength="11" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click="handleRegister()">
          register
        </el-button>
      </el-form-item>
      <div class="tips">
        已有账号？<span style="color:#175199" @click="toLogin">登录</span>
      </div>
    </el-form>
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" v-else>
      <h3 class="title">登录</h3>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" placeholder="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          Sign in
        </el-button>
      </el-form-item>
      <div class="tips">
        没有账号？<span style="color:#175199" @click="toRegister">注册</span>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
import { login, register, checkName, checkTel } from '@/api/home'
import { setToken } from '@/utils/user'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }

    // 注册验证
    const validateRegisName = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('用户名长度不能小于3位'))
      } 
      else {
        checkName(value).then(res => {
          if(res.data && res.data.code === 0) {
            callback()
            // this.$message.success(res.data.msg)
          } else {
            callback(new Error('用户名已存在'))
          }
        })
      }
    }
    const validateRegisPas = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } 
      else {
        callback()
      }
    }
    const validateRegisRepas = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      }
      if(value !== this.regisForm.password){
        callback(new Error('两次密码不一致'))
      }  
      else {
        callback()
      }
    }

    const validateRegisTel = (rule, value, callback) => {
      if (value.length !== 11) {
        callback(new Error('手机号码格式错误'))
      } 
      else {
        checkTel(value).then(res => {
          if(res.data && res.data.code === 0) {
            callback()
            // this.$message.success(res.data.msg)
          } else {
            callback(new Error('用户名已存在'))
          }
        })
      }
    }

    
    
    return {
      loginForm: {
        // username: 'xiaohui@qq.com',
        // password: 'H.ae2zsPZGWsFk'
        username: '',
        password: ''
      },
      regisForm: {
        username: '',
        password: '',
        repasword: '',
        tel: ''
      },
      regisRules: {
        username: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          // { validator: validateRegisName, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validateRegisPas, trigger: 'blur' }
        ],
        repasword: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validateRegisRepas, trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          // { validator: validateRegisTel, trigger: 'blur' }
        ]
      },
      loginRules: {
        username: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
        ],
        password: { required: true, message: '密码不能为空', trigger: 'blur' }
      },
      loading: false,
      visible: false,
      loginOrRegis: true
    }
  },
  methods: {
    init (){
      this.visible = true
      this.resetLoginForm()
      this.resetRegisForm()
    },
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        // if (valid) {
        //   this.loading = true
        //   this.$store.dispatch('Login', this.loginForm).then(() => {
        //     console.log('登录成功')
        //     this.loading = false
        //     this.$router.push({ path: '/' })
        //   }).catch(() => {
        //     this.loading = false
        //   })
        // } else {
        //   console.log('error submit!!')
        //   return false
        // }
        if(valid) {
          login(this.loginForm).then(res => {
            if(res.data && res.data.code === 0) {
              console.log(res.data)
              setToken(res.data.token)
            } else {
              this.$message.error(res.data.msg)
            }
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    resetLoginForm () {
      this.loginForm = {
        username: '',
        password: ''
      }
    },
    resetRegisForm () {
      this.regisForm = {
        username: '',
        password: '',
        repasword: '',
        tel: ''
      }
    }, 
    handleRegister () {
      this.$refs.regisForm.validate(valid => {
        if(valid) {
          register(this.regisForm).then(res => {
            if(res.data && res.data.code === 0) {
              this.$message({
                message: '注册成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.toLogin()
                }
              })
            } else {
              this.$message.error(res.data.msg)
            }
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    toLogin () {
      this.loginOrRegis = false
    },
    toRegister () {
      this.loginOrRegis = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
