<template>
  <div class="wrap">
    <!-- <navPart></navPart> -->
     <!-- banner -->
    <div class="banner">
      <img src="@/assets/img/bac.jpg" alt="">
      <!-- <div class="banner_title">
        <p>"In carnage, I bloom.... like a flowerin the dawn."</p>
        <p>“在杀戮中,我终将绽放......就像黎明的花儿一样。</p>
      </div> -->
    </div>


    <!-- content -->
    <div class="main_contain">
      <p>下面是博主的不定时更新</p>
      <div class="main_contain_box">
        <el-row :gutter="24">
          <el-col :span="7" :offset="1" class="main_contain_box_list">
            <img class="list_bac" src="@/assets/img/show1.jpg" alt="">
            <div class="main_contain_box_list_cover">
              <div class="art-data">2019,Nov 12</div>
              <div class="art-title">第一篇文章</div>
            </div>
          </el-col>

          <el-col :span="7" :offset="1" class="main_contain_box_list">
            <img class="list_bac" src="@/assets/img/show2.jpg" alt="">
            <div class="main_contain_box_list_cover">
              <div class="art-data">2019,Nov 12</div>
              <div class="art-title">第一篇文章</div>
            </div>
          </el-col>

          <el-col :span="7" :offset="1" class="main_contain_box_list">
            <img class="list_bac" src="@/assets/img/show3.jpg" alt="">
            <div class="main_contain_box_list_cover">
              <div class="art-data">2019,Nov 12</div>
              <div class="art-title">第一篇文章</div>
            </div>
          </el-col>
          <el-col :span="7" :offset="1" class="main_contain_box_list">
            <img class="list_bac" src="@/assets/img/show1.jpg" alt="">
            <div class="main_contain_box_list_cover">
              <div class="art-data">2019,Nov 12</div>
              <div class="art-title">第一篇文章</div>
            </div>
          </el-col>

          <el-col :span="7" :offset="1" class="main_contain_box_list">
            <img class="list_bac" src="@/assets/img/show2.jpg" alt="">
            <div class="main_contain_box_list_cover">
              <div class="art-data">2019,Nov 12</div>
              <div class="art-title">第一篇文章</div>
            </div>
          </el-col>

          <el-col :span="7" :offset="1" class="main_contain_box_list">
            <img class="list_bac" src="@/assets/img/show3.jpg" alt="">
            <div class="main_contain_box_list_cover">
              <div class="art-data">2019,Nov 12</div>
              <div class="art-title">第一篇文章</div>
            </div>
          </el-col>

          <!-- <el-col :span="8" :offset="8" class="main_contain_box_list">
            <div class="load_more">
              more...
            </div>
          </el-col> -->
          
          
        </el-row>
      </div>
      
    </div>
    <!-- <div>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=253358001&site=qq&menu=yes">
      <img border="0" src="http://wpa.qq.com/pa?p=2:253358001:41" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
    </div> -->

    <!-- chat-with-me -->
    <div class="chat_contain">
      <div class="chat_contain_title">if you are interted with me, @ me</div>
      <div class="chat_contain_box">
        <div class="chat_contain_box_list">
          <div class="chat_contain_box_list_bor">
            <img src="@/assets/img/qq.png" alt="">
          </div>
        </div>

        <div class="chat_contain_box_list">
          <div class="chat_contain_box_list_bor">
            <img src="@/assets/img/weixin.png" alt="">
          </div>
        </div>

        <div class="chat_contain_box_list">
          <div class="chat_contain_box_list_bor">
            <img src="@/assets/img/github.png" alt="">
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <!-- contact -->
    <!-- <div class="main_contact">

      <div class="main_contact_contain">
        <div class="contact_title">SEND ME MESSAGE</div>
          <div class="contact_form">
            <div class="contact_form_input input_name">
              <input type="text" placeholder="NAME" name="name">
            </div>
            <div class="contact_form_input input_tel">
              <input type="text" placeholder="TEL" name="tel">
            </div>
            <div class="clear"></div>
            <div class="contact_form_input input_mes">
              <textarea name="message" id=""  rows="5"></textarea>  
            </div> 
            <div class="clear"></div>
            <div class="contact_form_input input_btn">
              sumbit
            </div>
            <div class="clear"></div>
          </div>
      </div> 
    </div> -->
  </div>
  
 
</template>

<script>

  import navPart from '../nav/index'

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
      navPart
    }
  }

</script>
<style lang="less" scoped>
  body{
    margin:0!important;
    padding:0!important;
  }
  .clear{
    clear:both
  }
  .wrap{
    width:100%;
    background: #141414;
  }
  a{
      text-decoration: none;
      color:black;
  }
   .banner{
    width:100%;
    position:relative;
    img{
      width:100%;
    }
    .banner_title{
      position:absolute;
      top:40%;
      left:0;
      width:100%;
      p{
        width:100%;
        color:#fff;
        text-align: center;
        font-size: 26px;
      }
    }
  }
  .main_contain{
    background: #262626;
    padding-top:30px;
    padding-bottom: 100px;
    p{
      color:#fff;
      font-size: 36px;
      padding:70px 0 30px 0;
    }
    .main_contain_box{
      width:80%;
      margin:0 auto;
      .main_contain_box_list{
        overflow: hidden;
        position:relative;
        margin-top:20px;
        margin-bottom:20px;
        img{
          width:100%;
        }
      }
      .main_contain_box_list_cover{
        width:90%;
        position:absolute;
        bottom:20px;
        left:0;
        right:0;
        margin:0 auto;
        text-align: left;
        .art-data{
          color:#fff;
          font-size: 18px;
          position:relative;
          width:100%;
          padding: 10px 0;
        }
        .art-data::after{
          position:absolute;
          left:0;
          content:'';
          bottom: 0px;
          width:16%;
          height:2px;
          background: #C15B6C;
        }
        .art-title{
          color:#fff;
          font-size: 24px;
          padding:10px 0;
        }
      }
      .load_more{
        width:20%;
        margin:0 auto;
        border-radius:20px;
        border:1px solid #fff;
        padding:10px 0;
      }
    }
  }

  // contact
  .main_contact{
    width:100%;
    overflow: hidden;
    margin-top:0px;
    .main_contact_bac{
      width:100%;
    }
    .main_contact_contain{
      
    }
    .contact_title{
      color:#fff;
      padding:30px 0;
      font-size: 28px;
      position:relative;
      ::after{
        position:absolute;
        width:20%;
        bottom:50px;
        left:0;
        right:0;
        // margin:0 auto;
        content: '';
        background: #fff;
        height:2px;
      }
    }
    img{
      width:100%;
    }
    .contact_form{
      width:45%;
      margin:0 auto;
      .contact_form_input{
        width:46%;
        float:left;
        margin-top:40px;
        input{
          width:100%;
          border:2px solid #fff;
          height:50px;
          line-height:50px;
          background: none;
          padding-left:20px;
          color:#BEBFBE;
          font-size: 20px;
        }
      }
      .input_tel{
        margin-left:8%;
      }
      .input_mes{
        width:100%;
      }
      .input_mes textarea{
        width:98%;
        padding:10px 20px;
        background: none;
        border:2px solid #fff;
        font-size: 18px;
        color:#BEBFBE;
        line-height: 24px;
        height:160px;
      }
      .input_btn{
        width:10%;
        padding:10px 20px;
        float:left;
        border:2px solid #fff;
        color:#fff;
      }
    }
  }
  
  // chat
  .chat_contain{
    background: #141414;
    padding:150px 0;
    .chat_contain_title{
      color:#fff;
      font-size: 30px;
    }
    .chat_contain_box{
      width:60%;
      margin:0 auto;
      margin-top:100px;
      .chat_contain_box_list{
        width:30%;
        float:left;
        margin-left:1%;
        border-radius:50%;
        .chat_contain_box_list_bor{
          width:100px;
          height:100px;
          margin:0 auto;
          border:2px solid #fff;
          border-radius:50%;
          display: flex;
          justify-content: center; /* 水平居中 */
          align-items: center;     /* 垂直居中 */
          img{
            width:50%;
            margin:0 auto
          }
        }
      }
    }
  }
  
  
 
</style>

