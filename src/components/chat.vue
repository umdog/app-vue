<template>
<span>
<div style="height:560px;width:337px;overflow:auto;" >
<span v-for="(val,index) in this.content" v-bind:key="index">
<br>
<div class='message' v-if="val.is_me == 1">
            <span class="usr_h">
            {{val.head}}
            </span>
            <span  style='position:absolute;top:36px;right:6px;text-align:center;width:60px;height:20px;'>
                {{val.user_name}}
            </span>
            <span class="mess" v-html="val.message">
            </span>
</div>
<div class='message' v-if='val.is_me == 0'>
            <span class="usr_h" style="position:absolute;top:0;left:20px;">
            {{val.head}}
            </span>
            <span  style='position:absolute;top:36px;left:6px;text-align:center;width:60px;height:20px;'>
                {{val.user_name}}
            </span>
            <span class="mess" style="position: absolute;top:20px;left:60px;" v-html="val.message">
            </span>
</div>
</span>
</div>


    <div class="chat_bot">
    <div style="width:268px;height:36px;overflow:hidden;margin:0 auto;margin-top:5px;">
    <svg t="1591083253968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2339" width="32" height="32"><path d="M512 960C264.6 960 64 759.4 64 512S264.6 64 512 64s448 200.6 448 448-200.6 448-448 448z m-47.2-470.1c-3 11.3-5.4 21.5-10.8 43.6s-9.6 40-13.1 54.4c-6.6 27.5-11.9 52.6-16.7 75.9-2.8 13.2 0.8 26.9 9.6 37 6.6 8.8 17.1 13.9 28.1 13.7 4.8 0.2 9.5-0.8 13.7-3 20.9-8.8 40.9-19.6 59.7-32.3l9-6 17.3-11.9 4.2-3h4.2l6.6-4.2 4.2-3v-4.8l-9-10.8c0.1-1.4 0.1-2.8 0-4.2l-4.2-9-3-5.4h-6l-8.4 4.2-8.4 5.4-7.2 4.8-14.3 9.6-10.2 3c4.8-21.5 6.6-29.9 9.6-40.6 3-10.8 4.2-16.7 6-25.1v-10.8c4.8-19.1 9.6-37.6 14.9-56.1l6.6-24.5V478l4.2-16.1c2.4-10.8 2.4-22 0-32.9-1.3-10.8-8.4-20-18.5-23.9-8.3-3.9-18-3.9-26.3 0-10.1 4.2-19.7 9.4-28.7 15.5-13.1 9-22.7 16.1-47.2 34.6l-17.3 12.5-10.8 8.4-6.6 5.4-3.6 5.4 3 5.4 4.2 7.2v4.2l5.4 9 4.2 5.4 10.2-6 8.4-6 13.1-9 22.1-10.8v-3.6c0.6 2.6 0.6 5.2 0 7.8l1.8-0.6z m-3.6-187.6c-0.8 11.2 3.1 22.2 10.8 30.5 11.1 10.8 26.4 16.3 41.8 14.9 13-0.6 25.5-5.2 35.8-13.1 18.5-12.2 25.4-36 16.1-56.1-6.4-13.6-19.2-23-34-25.1H518c-6.1-1.2-12.4-1.2-18.5 0-21.2 6.5-36.3 25.1-38.2 47.2l-0.1 1.7z" p-id="2340" fill="#707070"></path></svg>
    <input class="in" ref="message" @keydown.enter="send()">
    <svg @click="send()" t="1591083007878" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2610" width="32" height="32"><path d="M869.072593 128.758519l-725.333334 194.37037c-15.834074 4.266667-21.143704 24.082963-9.576296 35.65037l178.157037 178.157037L375.371852 756.622222c4.361481 15.17037 23.324444 20.29037 34.702222 9.291852l66.844445-64.474074 188.302222 188.302222c11.567407 11.567407 31.478519 6.257778 35.65037-9.576296l194.37037-725.333333c4.266667-15.834074-10.24-30.340741-26.168888-26.074074zM426.761481 629.57037l-30.814814 127.620741c-1.706667 7.016296-11.662222 7.205926-13.558519 0.18963l-61.060741-226.607408L836.266667 186.500741 426.761481 629.57037z" p-id="2611" fill="#707070"></path></svg>
    </div>
    </div>
    </span>
</template>
<script>
import axios from 'axios'
export default {
    name : 'chat',
    methods : {
        send(){
           this.$store.state.user_inf.message=this.$refs.message.value
           this.$refs.message.value =''
        }
    },
    data(){
        return{
            content : [
                {
                    is_me : 1,
                    head : 'A',
                    user_name : 'admin',
                    message : 'holle'
                },
                {
                    is_me : 0,
                    head : 'A',
                    user_name : 'admin',
                    message : 'holle'
                },
                {
                    is_me : 1,
                    head : 'A',
                    user_name : 'admin',
                    message : 'holle'
                }
            ]
        }
    }
}
</script>
<style scoped>
::-webkit-scrollbar {
     width: 0 !important;
}
::-webkit-scrollbar {
     width: 0 !important;height: 0;
}
.mess{
    border-radius: 4px;
    height: auto;
    width: 200px;
    background: rgb(132, 233, 191);
    position: absolute;
    top:20px;
    right:60px;
}
.usr_h{
     border-radius:36px;
     color:#fff;
     font-size: 30px;
     font-weight: 800;
     line-height: 36px;
     text-align: center;
     background:rgb(36, 129, 235);
     height:36px;
     width:36px;
     display:block;
     position:absolute;
     top:0;
     right:20px;
}
.message{
    font-size: 20px;
    margin: 0;
    padding: 0;
    position: relative;
    width:100%;
    min-height: 50px;
}
.in{
    display: inline-block;
    width: 200px;
    height:26px;
    outline: none;
    border: #999 1px solid;
    border-radius: 10px;
}
.chat_bot{
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 36px;
    background: #eeeeee;
    box-shadow: 0px 2px 2px #aaa inset;
}
.icon{
    display: inline-block;
    vertical-align: middle;
    height:32px;
    width: 32px;
}
</style>