<template>
    <div class="order">
  

        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
  
    import ServiceBar from './../components/ServiceBar'
    import NavFooter from './../components/NavFooter'
    
    export default{
        name:'order',
        components:{
            NavFooter,
            ServiceBar
        },
        mounted(){
           
        },
        data(){
            return{
                title:'',
                tip:''
            }
        },
        methods:{}
    }
</script>
<style>
    
</style>