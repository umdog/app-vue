<template>
<div class="body">
<br>
<br>
<br>
    <span class='usr_h'>{{this.$store.state.user_inf.head}}</span>
    <span style="display:block;width:100%;height:40px;line-height:30px;text-align:center;color:#777;font-size:30px;margin:0 auto;">{{this.$store.state.user_inf.user_name}}</span>
    <br>
    <div class="butt">
    <label @click="exit()" ><svg t="1593579671393"  class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5125" width="16" height="16"><path d="M1001.65696 463.424l-332.224-332.416C648.76096 110.4 624.05696 104.256 598.52096 113.792c-26.176 9.856-41.152 33.28-41.216 64.384L557.30496 328.32 492.28096 328.32 305.65696 328.384C266.48896 328.512 239.16096 355.712 239.03296 394.624c-0.128 78.4-0.128 156.736 0 235.072 0.128 37.696 27.776 65.28 65.792 65.664l252.48 0.064L557.24096 724.48c-0.128 40.768-0.256 81.408 0.576 122.112 0.256 15.936 6.528 33.28 16.256 45.184 11.904 14.656 28.224 22.72 45.952 22.72l0 0c17.536 0 35.2-8 49.728-22.464 110.848-110.72 221.568-221.504 332.288-332.352C1031.60896 530.176 1031.48096 493.248 1001.65696 463.424z" p-id="5126" fill="#8a8a8a"></path><path d="M387.70496 805.696 387.64096 805.696l-72.576 0.128-103.872-0.064c-52.48 0-82.624-30.144-82.624-82.688L128.56896 300.48c0-52.416 30.144-82.496 82.752-82.496l68.8-0.064 75.584 0.064 42.048-0.064c30.08 0 46.528-15.104 48.896-44.8 0.896-11.072 0.64-22.336 0.256-34.88C446.13696 106.944 428.60096 89.664 397.68896 89.6L321.33696 89.6C280.44096 89.6 239.54496 89.6 198.71296 89.856 186.16896 89.92 173.30496 91.328 160.44096 94.08 68.21696 113.728 0.88896 196.416 0.37696 290.688 0.12096 341.504 0.18496 392.384 0.24896 443.136l0.064 67.648L0.18496 581.76C0.12096 632.768-0.00704 683.712 0.44096 734.784c0.896 107.776 88.768 197.056 195.904 199.04 26.368 0.512 52.8 0.64 79.168 0.64l125.376-0.256c24.768 0 42.112-15.04 45.184-39.232 1.088-8.832 1.216-17.856 1.28-26.88l0-4.48c0.128-13.312 0.256-31.552-12.544-44.48C422.45696 806.784 404.66496 805.696 387.70496 805.696z" p-id="5127" fill="#8a8a8a"></path></svg>
    退出</label>  
    &nbsp;&nbsp;&nbsp;
    <label><svg t="1593596400318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3352" width="16" height="16"><path d="M44.100267 534.357333v-0.034133a33.655467 33.655467 0 0 1 0-47.854933v-0.068267l239.342933-239.138133a33.826133 33.826133 0 1 1 47.889067 47.854933l-215.415467 215.278933 215.415467 215.278934a33.792 33.792 0 0 1 0.068266 47.889066 34.065067 34.065067 0 0 1-47.957333-0.034133l-239.3088-239.138133-0.034133-0.034134z m534.528-427.008a34.133333 34.133333 0 1 1 65.9456 17.646934l-211.968 791.074133a34.133333 34.133333 0 1 1-65.9456-17.646933l211.968-791.074134z m401.271466 427.008l-239.342933 239.172267a34.065067 34.065067 0 0 1-47.957333 0.034133 33.792 33.792 0 0 1 0.068266-47.889066l215.415467-215.278934-215.415467-215.278933a33.826133 33.826133 0 1 1 47.889067-47.854933l239.3088 239.138133 0.034133 0.034133v0.034134a33.655467 33.655467 0 0 1 0 47.854933z" fill="#8a8a8a" p-id="3353"></path></svg>代码
    </label></div>
    <span style="font-size:12px;color:#aaa;">我的好友></span>
    <br>
    <div  style="height:auto;width:100%;">
    <span v-for="(item, index) in this.$store.state.user_inf.friends" :key="index">
        <div @click="change_user(index)" style='font-size:20px;text-align:left;width:100%;height:25px;border-bottom:1px #eee solid;box-shadow:0px 1px 2px #eee;color:#888;line-height:25px;'>{{item.name}}
        <span v-if="item.count !== 0" style="font-size:10px;color:#aaa;text-align:center;line-height:20px;display:inline-block;width:30px;height:11px;vertical-align: middle;">
        {{item.count}}news
        </span>
        </div>
    </span>
    </div>
    <br>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:"infobody",
    methods: {
        exit(){
            console.log("user exit!")
            axios.get(this.$store.state.host + '/api/app/exit', ).then((data) => {
                if (data.data.status == 'ok') {
                    window.location.href="/"
                }
            })
        },
        change_user(k){
            this.$store.state.with_chat=this.$store.state.user_inf.friends[k].name
            this.$store.state.with_chat_index=k
            this.$store.state.show_mute = false
        }
    }
}
</script>
<style scoped>
.usr_h{
     display:block;
     margin:0 auto;
     border-radius:36px;
     color:#fff;
     font-size: 40px;
     font-weight: 800;
     line-height: 40px;
     text-align: center;
     background:rgb(36, 129, 235);
     height:48px;
     width:48px;
     z-index:3;
}
    .body{
        position:absolute;
        border:1px #999 solid;
        width:200px;
        height:600px;
        bottom:36px;
        left:0px;
        background:#fafafa;
        overflow:auto;
        z-index:5;
    }
.butt{
    width :198px;
    height :17px;
    color:#aaa;
    font-size:13px;
    text-align:center;
}
.icon{
    vertical-align:middle;
}
</style>