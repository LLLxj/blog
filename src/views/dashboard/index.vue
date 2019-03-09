<template>
  <div class="wrap">
    
    <navPart></navPart>
    <div class="main_content">
      <mainPart></mainPart>
      
      
    </div>
    
  </div>
</template>

<script>

  import navPart from '../nav/index'
  import mainPart from '../main/index'

  export default {
    name: 'dashboard',
    data () {
      return {
        
      }
    },
    components: {
      navPart, mainPart
    }
  }

</script>
<style lang="less" scoped>
  .wrap{
    position:relative;
    width:100%;
    height:200px;
  }
  .main_content{
    width:100%;
    height:200px;
  }
</style>
