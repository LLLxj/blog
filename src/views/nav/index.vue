<template>
  
  <div class="home_wrap" @scroll="handleScroll()">
    <!-- 导航 -->
    <div class="main_header">
      <el-row :gutter="24" style="margin: 0px 0px">
        <el-col :span="2" class="main_logo">
          <!-- <a href=""><img src="../public/img/hashiqi.png" alt=""></a> -->
          <span class="name-add-color">L</span><span>iu</span><span>Z</span><span>i</span><span>J</span><span>ian</span>
        </el-col>
        
        
        <el-col :span="6" :offset="15" class="main_menu" :routes="routes">
          <!-- <router-link to="/"> -->
          <span @click="$router.push({ name: 'home' })" style="border:1px solid red;">home</span>
          <!-- </router-link> -->
          <!-- <router-link to="/contact"> -->
          <span @click="$router.push({ name: 'contact' })">contact</span>
          <!-- </router-link> -->
          <!-- <div v-for="item in routers" :key="item.name">
            <router-link :to="'/'+ item.name" :key="item.name">
              <span>{{item.name}}</span>
            </router-link>
          </div> -->
        </el-col>
            
        <div class="clear"></div>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  mounted () {
    // window.addEventListener('scroll', this.appScroll);
  },
  computed: {
    routes() {
      this.routers = this.$router.options.routes
      console.log(this.routers)
      return this.$router.options.routes
    },
  },
  data () {
    return {
      routers: [] 
    }
  },
  method: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scrollTop)
    },
    toRoute () {
      console.log(1)
    }
  }
}

</script>
<style lang="less" scoped>
  body{
    margin:0!important;
    padding:0!important;
  }
  .main_contain_box_list:hover .list_bac{
    transition: all 1.5s;
    transform: scale(1.5,1.5);
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
  .home_wrap{
    background: #141414;
  }
  .main_header{
    position:fixed;
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
</style>

