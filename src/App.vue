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

<style>
#app {
 font-size: 15;
}
</style>