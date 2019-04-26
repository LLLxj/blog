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

      <!-- 近期文章 -->
      <div class="article_recently">
        <div class="article_recently_bor">
          <recentlyArticle></recentlyArticle>
        </div>
      </div>

      <!-- 评论 -->
      <div class="article_comment">
        <div class="article_comment_bor">
          <articleComment ></articleComment>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { articleInfo } from '@/api/home'
import recentlyArticle from '@/components/recentlyArticle'
import articleComment from '@/components/comment'

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
  components: {
    recentlyArticle, articleComment
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
    min-width: 960px;
    .article_bor{
      width:50%;
      min-width: 960px;
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
          width:96%!important;
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
      .article_recently{
        width:100%;
        background: #ffffff;
        margin-top:50px;
        padding:30px 0;
        .article_recently_bor{
          width:96%!important;
          margin:0 auto;
        }
      }
      .article_comment{
        width:100%;
        background: #ffffff;
        margin-top:50px;
        padding:30px 0;
        .article_comment_bor{
          width:96%!important;
          margin:0 auto;
        }
      }
    }
  }
</style>