<template>
    <div class="order">
        <order-header :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>

        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import OrderHeader from './../components/OrderHeader'
    import ServiceBar from './../components/ServiceBar'
    import NavFooter from './../components/NavFooter'
    
    export default{
        name:'order',
        components:{
            OrderHeader,
            NavFooter,
            ServiceBar
        },
        mounted(){
            let path = this.$route.path;
            if(path  == '/order/confirm'){
                this.title="訂單確認";
                this.tip="請認真填寫收貨地址"
            }else if (path == '/order/list') {
                this.title="訂單列表";
                this.tip="請謹防釣魚鏈接或詐騙電話，了解更多>"
            }else if(path == '/order/pay'){
                 this.title="訂單支付";
                 this.tip="請謹防釣魚鏈接或詐騙電話，了解更多>"
            }
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