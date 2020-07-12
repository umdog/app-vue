<template>
    <div class="inf">
        <span v-if='this.$store.state.is_login'
            style="font-size:20px;font-weight:800;color:#333;">你好！@{{this.$store.state.user_inf.user_name}}.</span>
        <span v-if="!this.$store.state.is_login">你好,请先<span style="color:#38a;" @click='back_login()'>[登陆]</span>.</span>
    </div>
</template>
<script>
    export default {
        name: 'logininf',
        methods: {
            back_login(){
                this.$router.push({name:'phone'})
            }
        },
    }
</script>
<style scoped>
    .inf {
        position: fixed;
        top: 1vh;
        font-size: 14px;
        color: #999;
        left: 10px;
    }
</style>