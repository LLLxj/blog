<template>
 <div>
    <p class="title">最近文章</p>
    <div class="main_contain_box_list" v-for="item in articleLists" :key="item.id" @click="getArticleDetail(item.id)">
      <div class="list_bac_bor">
        <img class="list_bac" :src="item.background" alt="">
      </div>
      <div class="main_contain_box_list_cover">
        <!-- <div class="art-data">{{item.create_time}}</div> -->
        <div class="art-title">{{item.title}}</div>
      </div>
    </div>  
    <div class="clear"></div>  
 </div>
</template>

<script>

import { articleList } from '@/api/home'

export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 6,
      articleLists: []
    }
  },
  created() {
    this.getDataList()
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
      console.log(data)
      this.$router.push({
        name: 'article',
        query: {
          id: data
        }
      })
    }
  }
}

</script>
<style lang="less" scoped>
  .title{
    font-size: 28px;
    color:#000;
    font-weight: bold;
  }
  .clear{
    clear:both
  }
  .main_contain_box_list{
    height:150px;
    width:32%;
    margin-left:1%;
    float:left;
    overflow: hidden;
    position:relative;
    margin-top:20px;
    margin-bottom:20px;
    .list_bac_bor{
      width:100%;
      margin:0 auto;
      img{
        width:100%;
      }
    }
  }
  .main_contain_box_list_cover{
    width:90%;
    position:absolute;
    bottom:10px;
    left:20px;
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
      font-size: 16px;
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
</style>