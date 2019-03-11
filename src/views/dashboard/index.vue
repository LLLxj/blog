<template>
  <div class="wrap" @scroll="handleScroll()">

    <navPart v-bind:offYset="offYset"></navPart>
    

    <div class="main_content">
      <mainPart></mainPart>
    </div>
   
    <backToTop></backToTop>

    

  </div>
</template>

<script>

  import navPart from '../nav/index'
  import mainPart from '../main/index'
  import backToTop from '@/components/backToTop/index'

  export default {
    name: 'mains',
    data () {
      return {
        transitionNav: '',
        offYset: ''
      }
    },
    mounted () {
      window.addEventListener('mousewheel',this.handleScroll,false)
    },
    components: {
      navPart, mainPart, backToTop
    },
    methods: {
       handleScroll (e) {
        this.offYset = window.pageYOffset
      },
    }
  }

</script>
<style lang="less" scoped>
  .wrap{
    position:relative;
    width:100%;
  }
  .main_content{
    width:100%;
  }
  .hasClass{
    position:relative;
    animation:myfirst .5s;
    -moz-animation:myfirst .5s; /* Firefox */
    -webkit-animation:myfirst .5s; /* Safari and Chrome */
    -o-animation:myfirst .5s; /* Opera */
  }
  @keyframes myfirst{
    0%   {left:0px; top:0px;}
    100% {left:0px; top:-100px;}
  }
</style>
