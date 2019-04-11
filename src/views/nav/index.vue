<template>
  <transition :name="transitionName">
    <div class="main_header" v-show="visible">
      <el-row :gutter="24" style="margin: 0px 0px">
        <el-col :span="2" class="main_logo">
          <!-- <a href=""><img src="../public/img/hashiqi.png" alt=""></a> -->
          <span class="name-add-color">L</span><span>iu</span><span>Z</span><span>i</span><span>J</span><span>ian</span>
        </el-col>
        <el-col :span="6" :offset="15" class="main_menu">
          <span @click="$router.push({ name: 'home' })">home</span>
          <span @click="$router.push({ name: 'contact' })">contact</span>
        </el-col>
        <div class="clear"></div>
      </el-row>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    offYset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      transitionName: 'fade',
      visible: true,
    }
  },
　watch:{
　  offYset(curVal,oldVal){
      if(curVal === 0) {
        this.visible = false
      } else {
        this.visible = true
      }
　　}　　　　　
　},
  method: {
    
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
  .el-col-2{
    padding:0;
  }
  a{
    text-decoration: none;
    color:black;
  }
  .main_header{
    position:fixed;
    background: #141414;
    top:0;
    left:0;
    width:100%;
    padding:25px 0;
    z-index:100;
    background: #1C1C1C;
    .main_logo{
      float:left;
      width:2%;
      margin-left:2%;
      padding:10px 0;
      span{
        color: #B73248;
      }
      .name-add-color{
        color:#9FCE80!important;
      }
    }
     .main_menu{
      float:right;
      margin-right:2%;
      padding: 10px 0px;
      span{
        color:#fff;
        padding:0 10px;
      }
    }
  }
   .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }

</style>

