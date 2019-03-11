<template>
  <div class="wrap">
    <!-- contact -->
    <div class="main_contact">
      <div class="main_contact_contain">
        <div class="contact_title">SEND ME MESSAGE</div>
        <div class="contact_form">
          <div class="contact_form_input input_name">
            <input type="text" placeholder="NAME" name="name">
          </div>
          <div class="contact_form_input input_tel">
            <input type="text" placeholder="TEL" name="tel">
          </div>
          <div class="contact_form_input input_mes">
            <textarea name="message" id=""  rows="5"></textarea>  
          </div> 
          <div class="contact_form_input input_btn">
            sumbit
          </div>
        </div>
        
      </div> 
    </div>

    <div class="backTo" @click="$router.push({ name: 'home' })">
      <img class="backToImg" src="@/assets/img/back.png" alt="">
      <span>back</span>
    </div>
    <img class="bac" src="@/assets/img/bac-contact.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
      }
    },
  }
</script>
<style lang="less" scoped>
  // contact
  .wrap{
    position:relative;
    height:100vh;
    overflow: hidden;
  }
  .backTo{
    width:100px;
    height:50px;
    position: absolute;
    left:30px;
    top:30px;
    z-index:100;
    display: flex;
    justify-content: space-around; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    .backToImg{
      width:20px;
    }
    span{
      font-size: 24px;
      color:#fff;
    }
  }
  .svg-icon{
    width:50px!important;
    height:50px!important;
    border:1px solid red;
  }
  .input_btn:hover{
    background: #B8A6A1;
  }
  .wrap img{
    width:100%;
  }
  .main_contact{
    width:100%;
    position:absolute;
    left:0;
    top:10%;
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
        width:100%;
        margin-top:40px;
        input{
          width:100%;
          border:2px solid #fff;
          height:50px;
          line-height:50px;
          background: none;
          padding-left:20px;
          color:#ffffff;
          font-size: 20px;
          border-radius:5px;
        }
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
        color:#ffffff;
        line-height: 24px;
        height:160px;
        border-radius:5px;
      }
      .input_btn{
        width:10%;
        padding:10px 20px;
        margin:0 auto;
        border:2px solid #fff;
        color:#fff;
        font-size: 22px;
        margin-top:40px;
        border-radius:5px;
      }
    }
  }
  input,button,select,textarea{ outline:none;}
</style>
