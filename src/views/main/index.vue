<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      console.log(this.$route.fullPath)
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  width:100%;
  position: relative;
  overflow: hidden;
}
</style>