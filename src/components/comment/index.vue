<template>

  <div>

    <div class="comment_top">
      <div class="comment_top_title">
        <div>评论</div>
      </div>  
      <div class="comment_top_user">
        <div style="text-align:right;cursor:pointer" @click="toLogin()">请登录！</div>
        <div v-if="false">
          <el-dropdown :show-timeout="0" placement="bottom" style="float:right">
            <span class="el-dropdown-link">
              测试人员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        
      </div>  
      <div class="clear"></div> 
    </div>

    <div class="comment_put_comment">
      <el-form element-loading-spinner="el-icon-loading" :model="dataForm" ref="dataForm">
        <el-form-item v-if="!canComment">
          <el-input style="width:94%;" v-model="dataForm.noComment" @focus="getComment()"  placeholder="写下你的评论"></el-input>
        </el-form-item>
        <el-form-item v-else>
          <el-input style="width:86%;" v-model="dataForm.comment" @blur="notComment()" placeholder="写下你的评论"></el-input>
          <el-button type="primary">发布</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="comment_list_bor">
      <div class="comment_list">
        <div class="comment_list_userPic">

        </div>
        <div class="comment_list_content">
          <el-row :gutter="24" class="">
            <el-col :span="4">
              <div class="user_name">用户2313213</div>
            </el-col> 
            <el-col :span="4" :offset="16">
              <div>用户2313213</div>
            </el-col>
            <el-col :span="24">
              <div class="comment_list_content_detail">asadsadasdsadasdasda卡的旷达科技爱空间大撒大家垃圾大厦我我euro我无撇开了
                对方速度快的凯撒角度看垃圾山大美女名称’阿斯兰的暗示了的</div>
            </el-col>
          </el-row>
        </div>

        <div class="clear"></div>
      </div>

    </div>

    <loginPart ref="loginPart" v-if="loginPartVisible"></loginPart>
  </div>

  
</template>

<script>

import { articleList } from '@/api/home'
import loginPart from '@/views/login'

export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 6,
      articleLists: [],
      dataForm:{
        comment: '',
        noComment: ''
      },
      rules: [],
      canComment: false,
      loginPartVisible: false
    }
  },
  created() {
    // this.getDataList()
  },
  components: {
    loginPart
  },
  methods: {
    getDataList () {
      articleList(this.currentPage,this.pageSize).then(res => {
        if(res.data && res.data.code === 0){
          let tempData = res.data.data
            for(var i in tempData){
              tempData[i].create_time = tempData[i].create_time.substring(0,10)
            }
            this.articleLists = tempData
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration:  1500
          })
        }
      })
    },
    // 查看详情
    getArticleDetail (data) {
      this.$router.push({
        name: 'article',
        query: {
          id: data
        }
      })
    },
    // 登录
    toLogin () {
      // this.$router.push({
      //   name: 'login',
      // })
      this.loginPartVisible = true
      this.$nextTick(() => {
        this.$refs.loginPart.init()
      })
    },
    getComment () {
      this.canComment = true
    },
    notComment () {
      this.canComment = false
    }
  }
}

</script>
<style lang="less" scoped>
  .clear{
    clear:both
  }
  .comment_top{
    border-bottom:1px solid gray;
    .comment_top_title{
      width:10%;
      padding:10px 0;
      border-bottom:1px solid red;
      float:left;
    }
    .comment_top_user{
      width:20%;
      float:right;
      padding:10px 0;
    }
  }
  .comment_put_comment{
    margin-top:20px;
  }
  .comment_list_bor{
    border-top:1px solid gray;
    padding:20px 0;
    margin-top:20px;
    .comment_list{
      width:98%;
      margin:0 auto;
      padding:10px 0;
      .comment_list_userPic{
        width:5%;
        // width:40px;
        height:30px;
        border:1px solid yellow;
        float:left;
      }
      .comment_list_content{
        width:92%;
        float:right;
        .comment_list_content_detail{
          text-align: left;
          margin-top: 20px;
        }
        .user_name{
          text-align:left
        }
      }
    }
  }
  
</style>