<template>
    <span>
        <div style="height:560px;width:337px;overflow:auto;" id="scoll">
            <infobody v-if='this.$store.state.show_mute'></infobody>
            <div style="z-index:2">
                <span
                    v-for="(val,index) in this.$store.state.user_inf.friends[this.$store.state.with_chat_index].message"
                    v-bind:key="index">
                    <br>
                    <div class='message' v-if="val.name == that.$store.state.user_inf.user_name">
                        <div style="float:right;margin-top:20px;">
                            <span
                                style="float:right;display:block;border-radius:36px;margin-right:5px;color:#fff;font-size: 30px;font-weight: 800;line-height: 36px;text-align: center;background:rgb(36, 129, 235);height:36px;width:36px;">
                                {{val.head}}</span>
                            <div
                                style="float:right;z-index:6;margin:0;margin-right:-36px;font-size:10px;margin-top:36px;color:#000;text-align:right;width:90px;height:10px;">
                                {{val.name}}
                            </div>
                            <br>
                            <div style="z-index:4;margin-top:0px;margin-right:50px; border-radius:4px;height:auto;width: 260px;background:rgb(132, 233, 191);margin-top:21px;"
                                v-html="val.message">

                            </div>
                        </div>
                    </div>
                    <div class='message' v-if="val.name !== that.$store.state.user_inf.user_name">
                        <div style="float:left;margin-top:20px;">
                            <span
                                style="display:block;margin-left:5px;border-radius:36px;color:#fff;font-size: 30px;font-weight: 800;line-height: 36px;text-align: center;background:rgb(36, 129, 235);height:36px;width:36px;">
                                {{val.head}}</span>
                            <div style='color:#000;text-align:left;width:60px;height:10px;font-size:10px;'>
                                {{val.name}}
                            </div>
                            <br>
                            <div style="margin-top:-30px;margin-left:50px; border-radius:4px;height:auto;width: 260px;background:rgb(132, 233, 191);"
                                v-html="val.message">
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <div class="chat_bot">
                <div style="width:288px;height:36px;overflow:hidden;margin:0 auto;margin-top:5px;">
                    <svg @click="show_mu()" t="1591083253968" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2339" width="32" height="32">
                        <path
                            d="M512 960C264.6 960 64 759.4 64 512S264.6 64 512 64s448 200.6 448 448-200.6 448-448 448z m-47.2-470.1c-3 11.3-5.4 21.5-10.8 43.6s-9.6 40-13.1 54.4c-6.6 27.5-11.9 52.6-16.7 75.9-2.8 13.2 0.8 26.9 9.6 37 6.6 8.8 17.1 13.9 28.1 13.7 4.8 0.2 9.5-0.8 13.7-3 20.9-8.8 40.9-19.6 59.7-32.3l9-6 17.3-11.9 4.2-3h4.2l6.6-4.2 4.2-3v-4.8l-9-10.8c0.1-1.4 0.1-2.8 0-4.2l-4.2-9-3-5.4h-6l-8.4 4.2-8.4 5.4-7.2 4.8-14.3 9.6-10.2 3c4.8-21.5 6.6-29.9 9.6-40.6 3-10.8 4.2-16.7 6-25.1v-10.8c4.8-19.1 9.6-37.6 14.9-56.1l6.6-24.5V478l4.2-16.1c2.4-10.8 2.4-22 0-32.9-1.3-10.8-8.4-20-18.5-23.9-8.3-3.9-18-3.9-26.3 0-10.1 4.2-19.7 9.4-28.7 15.5-13.1 9-22.7 16.1-47.2 34.6l-17.3 12.5-10.8 8.4-6.6 5.4-3.6 5.4 3 5.4 4.2 7.2v4.2l5.4 9 4.2 5.4 10.2-6 8.4-6 13.1-9 22.1-10.8v-3.6c0.6 2.6 0.6 5.2 0 7.8l1.8-0.6z m-3.6-187.6c-0.8 11.2 3.1 22.2 10.8 30.5 11.1 10.8 26.4 16.3 41.8 14.9 13-0.6 25.5-5.2 35.8-13.1 18.5-12.2 25.4-36 16.1-56.1-6.4-13.6-19.2-23-34-25.1H518c-6.1-1.2-12.4-1.2-18.5 0-21.2 6.5-36.3 25.1-38.2 47.2l-0.1 1.7z"
                            p-id="2340" fill="#707070"></path>
                    </svg>
                    <input class="in" ref="message" @keydown.enter="send()" :placeholder="this.$store.state.with_chat">
                    <svg @click="send()" t="1593766574639" style="margin-left:10px;" class="icon"
                        viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2094" width="16"
                        height="16">
                        <path d="M1280 512L0 0l96 384 640 128-640 128-96 384 1280-512z" p-id="2095" fill="#8a8a8a">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
    import axios from 'axios'
    import infobody from "./infobody"
    export default {
        name: 'chat',
        components: {
            infobody
        },
        sockets: {
            message(d) {
                let that = this
                if ((typeof d.new_friend) !== 'undefined') {
                    that.$store.state.user_inf.friends.push({
                        name: d.new_friend,
                        count: 1,
                        head: d.head,
                        message: [{
                            head: d.head,
                            name: d.new_friend,
                            date:d.date,
                            message: "你好，我是" + d.new_friend
                        }]
                    })
                }
                that.$store.state.user_inf.friends.forEach((v, k) => {
                    if (v.name == d.name) {
                        that.$store.state.user_inf.friends[k].message.push({
                            name: d.name,
                            head: d.head,
                            message: d.message,
                            date:d.date
                        })
                        that.$store.state.user_inf.friends[k].count++
                    }
                })
            }
        },
        data() {
            return {
                that: this
            }
        },
        mounted() {
            setInterval(() => {
                if (this.$store.state.is_login) {
                    this.$store.state.user_inf.friends.forEach(
                        (v,k)=>{
                            if(v.name !== "dj"){
                    this.$socket.emit("clock", {
                            name: this.$store.state.user_inf.user_name,
                            to_name: "dj",
                            want:v.name,
                            want_date:v.message.slice(-1)[0].date,
                            date:(new Date()).toString().replace(/[^\d]/g, '')
                        }
                    )
                        }
                }
                    )

                }
            }, 4000)
        },
        methods: {
            send() {
                if (this.$refs.message.value !== "") {
                    let that = this
                    let mes = this.$refs.message.value
                    this.$store.state.user_inf.friends[this.$store.state.with_chat_index].message.push({
                        name: that.$store.state.user_inf.user_name,
                        date:(new Date()).toString().replace(/[^\d]/g, ''),
                        message: that.$refs.message.value,
                        head: that.$store.state.user_inf.user_name.charAt(0)
                    })
                    if (mes.split("，")[0] == "dj") {
                        if (mes.split("，")[1] == "添加") {
                            this.$socket.emit("newfriend", {
                                type: "add",
                                name: this.$store.state.user_inf.user_name,
                                to_name: mes.split("，")[2],
                                date:(new Date()).toString().replace(/[^\d]/g, '')
                            })
                        } else {
                            this.$socket.emit("dj", {
                                message: this.$refs.message.value,
                                name: this.$store.state.user_inf.user_name,
                                date:(new Date()).toString().replace(/[^\d]/g, '')
                            })
                        }
                    } else {
                        this.$socket.emit("message", {
                            name: this.$store.state.user_inf.user_name,
                            to_name: this.$store.state.with_chat,
                            message: this.$refs.message.value,
                            date:(new Date()).toString().replace(/[^\d]/g, '')
                        })
                    }
                    document.getElementById('scoll').scrollTop = document.getElementById('scoll').scrollHeight
                    this.$refs.message.value = ''
                }
            },
            show_mu() {
                this.$store.state.show_mute = !this.$store.state.show_mute
            }
        }
    }
</script>
<style scoped>
    ::-webkit-scrollbar {
        width: 0 !important;
        display: none;
    }

    ::-webkit-scrollbar {
        width: 0 !important;
        height: 0;
        display: none;
    }

    .message {
        font-size: 20px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
    }

    .in {
        display: inline-block;
        width: 200px;
        height: 26px;
        outline: none;
        border: #999 1px solid;
        border-radius: 10px;
    }

    .chat_bot {
        z-index: 1;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 1px;
        width: 100%;
        height: 36px;
        background: #eeeeee;
        box-shadow: 0px 2px 2px #aaa inset;
    }

    .icon {
        display: inline-block;
        vertical-align: middle;
        height: 32px;
        width: 32px;
    }
</style>