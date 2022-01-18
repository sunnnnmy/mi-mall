<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"> </div>
    </div>
</template>

<script>
    import loading from './../components/Loading.vue'
    export default{
        name:'aliPay',
        data(){
            return{
                orderId:this.$route.query.orderId,
                content:'',
                loading:true,
            }
        },
        components:{
            loading
        },
        mounted(){
            this.paySubmit();
        },
        methods:{
            paySubmit(){
                this.axios.post('/pay',{
                    orderId:this.orderId,
                    orderName:"Vue高仿小米商城",
                    amount:0.01, 
                    payType:1 //1:支付宝  2：微信
                }).then((res)=>{
                    this.content = res.content;
                    setTimeout(()=>{
                        document.forms[0].submit();
                    },100)
                })
            }
        }
        
    }
</script>

<style>
    
</style>