<template>
    <div style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:20;background:#fff;">
        <div>
            <span class="agent">
                <div
                    style="display:inline-block;background:#4a4;margin-left:6px;margin-top:6px;width:14px;height:14px;border-radius:20px;">
                </div>
                <div
                    style="display:inline-block;background:yellow;margin-left:6px;margin-top:6px;width:14px;height:14px;border-radius:20px;">
                </div>
                <div
                    style="display:inline-block;background:#f56;margin-left:6px;margin-top:6px;width:14px;height:14px;border-radius:20px;">
                </div><br>
            </span>Now:{{date}}<br>User Agent:{{agent}}{{anim}}</span>
            <div class="lo">
                <br>
                <br>
                <input type="text" v-model="inf[0]" placeholder="账号" class='in'>
                <br>
                <input type="password" v-model="inf[1]" placeholder="密码" class="in">
                <br>
                <span v-html="svg"
                    style="margin-left:20px;vertical-align: middle;display:inline-block;height:20px;width:90px;overflow:hidden;border:#999 solid 1px;border-radius: 4px;"></span>
                <input type="text" v-model="inf[2]"
                    style="vertical-align: middle;outline:none;display:inline-block;width:100px;height:20px;margin-left:6px;border-radius: 4px;border: #999 solid 1px;">
                <br>
                <br>
                <span
                    style="font-size:16px;font-weight:800;text-align:center;display:block;width:200px;height:20px;margin:0 auto;cursor:pointer;"
                    @click="login()">注册/登录</span>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'loginup',
        data() {
            return {
                date: new Date().toUTCString(),
                agent: window.navigator.userAgent,
                anim: '/',
                char_ani: [' \\', ' /', ' -'],
                svg: '',
                inf: ['', '', '']
            }
        },
        methods: {
            init_user_inf(data) {
                this.$store.state.is_login = true
                this.$store.state.user_inf = data
                this.$store.state.with_chat = this.$store.state.user_inf.friends[0].name
                this.$store.state.user_inf.friends.forEach(
                    (v, k) => {
if(v.name=="dj"){
                    this.$socket.emit("login", {
                            name: this.$store.state.user_inf.user_name,
                            to_name: "dj",
                            want:v.name,
                            want_date:v.message.slice(-1)[0].date,
                            date:(new Date()).toString().replace(/[^\d]/g, '')
                        }
                    )}

                    }
                )
            },
            login() {
                axios.get(this.$store.state.host +
                    `/api/app/login/&name=${this.inf[0]}&pass=${this.inf[1]}&code=${this.inf[2]}`).then(
                    (data) => {
                        if (data.data.status == 'ok') {
                            this.init_user_inf(data.data)
                        } else {
                            this.agent += 'Error password or logup error'
                        }
                    }
                )
            }
        },
        created() {
            let connt = 0
            setInterval(() => {
                connt += 1
                this.anim = this.char_ani[connt % 3]
            }, 300)
            axios.get(this.$store.state.host + '/api/app/bycode.svg').then((d) => {
                this.svg = d.data
            })
            axios.get(this.$store.state.host + '/api/app/?', ).then((data) => {
                if (data.data.status == 'ok') {
                    this.init_user_inf(data.data)
                }
            })
        }
    }
</script>
<style scoped>
    .lo {
        margin: 0 auto;
        margin-top: 80px;
        width: 240px;
        height: 230px;
        border: #999 solid 1px;
        box-shadow: 2px 2px 10px #999;
    }

    .in {
        width: 200px;
        height: 20px;
        border-radius: 4px;
        display: block;
        outline: none;
        margin: 0 auto;
        border: #999 solid 1px;
    }
</style>