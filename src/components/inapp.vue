<template>
    <div>
    <loginup v-if="!this.$store.state.is_login"></loginup>
    <chat></chat>
    </div>
</template>
<script>
import loginup from './loginup.vue'
import chat from './chat'
export default {
name:'inapp',
components : {
    loginup,
    chat
}
}
</script>