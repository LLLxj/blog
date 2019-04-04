<template>
  <div class="wrap">
    <div class="article_bor">
      <div class="article_bac">
        <img :src="this.dataForm.background" alt="">
      </div>
      <div class="article_content">
        <div v-html="this.dataForm.content" class="article_content_detail">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleInfo } from '@/api/home'

export default {
  data() {
    return {
      dataForm: {
        id: '',
        title: '',
        content: '',
        category_id: '',
        background: '',
        resource: '',
      }
    }
  },
  created() {
    const rowData = this.$route.query.id || 0
    this.getDataList(rowData)
  },
  methods: {
    getDataList (data) {
      articleInfo(data).then(res => {
        if(res.data && res.data.code === 0) {
          this.dataForm = res.data.data
          // console.log(this.dataForm.content)
          // this.dataForm.content = this.getSimpleText(this.dataForm.content)
          // console.log(this.dataForm.content)
        }
      }) 
    },
    getSimpleText(html){
      var re1 = new RegExp("<.+?>","g");//匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1,'');//执行替换成空字符
      return msg;
    }
  }
}

</script>
<style lang="less" scoped>
  .wrap{
    width:100%;
    background: #141414;
    min-width: 1200px;
    .article_bor{
      width:50%;
      margin:0 auto;
      padding-top:200px;
      .article_bac{
        width:100%;
        img{
          width:100%;
        }
      }
      .article_content{
        width:100%;
        background: #ffffff;
        overflow: hidden;
        .article_content_detail{
          width:92%!important;
          margin:0 auto;
          padding:50px 0;
          display:block;
          overflow: hidden;
          text-align: left;
          img{
            width:100%;
          }
        }
      }
    }
  }
</style>