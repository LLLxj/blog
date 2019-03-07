<template>
  <div>
    <el-row :gutter="24" class="main_header">
      <el-col :span="2">
        <div class="main_logo">
          <!-- <a href=""><img src="../public/img/hashiqi.png" alt=""></a> -->
          <span class="name-add-color">L</span><span>iu</span><span>Z</span><span>i</span><span>J</span><span>ian</span>
        </div>
      </el-col>
      <el-col :span="10" :offset="11">
        <nav class="main_menu">
          <a href="">关于我</a>
          <a href="">联系我</a>
        </nav>
      </el-col>
    </el-row>
  </div>
 
  
</template>

<script>
export default {
  name: 'home',
}

</script>
<style lang="less" scoped>
  body{
    margin:0!important;
    padding:0;
  }
  .clear{
    clear:both
  }
  a{
      text-decoration: none;
      color:black;
  }
  .main_header{
    padding:25px 0;
    background: #1C1C1C;
    .main_logo{
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
      padding: 10px 0px;
      a{
        padding:0 10px;
        color:#fff;
      }
    }
  }
  
  
 
</style>

