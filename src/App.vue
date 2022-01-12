<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'App',
  components: {
   
  },
  mounted(){
    // storage.setItem('a',1)
    // storage.setItem('user',{a:1},'user')
    storage.clear('a')
 }

  }
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>