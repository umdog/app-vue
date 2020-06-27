<template>
<div>
    <logininf></logininf>
    <div class="top_div">
        <div style="height:100px; width:900px;margin:0 auto;">
            <img src="../assets/logo.png" class='img'>
            <span style="float:right;color:#999;display:block;margin-bottom:30px;margin-top:20px;font-size:10px;">阿里云主机:  localhost 1核 2gb 1m带宽</span>
             <span style="margin-right:-220px;float:right;color:#6a9;display:block;margin-top:80px;"><span @click="back_home()">返回首页</span>  |<span @click="show_insert_tab()"> +添加记录</span><span @click="delete_row()"> | -删除目标</span><span @click="privios()"> | 上一页</span><span @click="next()"> | 下一页</span></span>
        </div>
        <hr color='#999' width='100%'>
        <div style="margin:0 auto;min-height:10px;width:900px;position:relative;border:#999 solid 1px;padding-top:25px;line-height:22px;">
            
            <span class="content" v-for="(ite,key) in db" > 
                <chose></chose>
                <span v-for="(val,key_) in ite"  @click="change_red(key)" >
                <span class="ite" v-if='key%2==1' :class="is_active(key)" :click_='key,key_' @click="change_edit(key,key_)" ><input type="text" v-if="is_edit == (key+1)*(key_+1)*(key_+3)*(key+4)*(key+4)*(key_+5)*(key_+5)*(key_+7)*(key_+0.5)*(key_+1)" style="z-index:20;width:100%;height:100%;outline:none;border:0;"  @keyup.enter="submi(key,key_)" v-model="new_value">{{val}}</span>
                <span class="ite_" v-if='key%2==0' :class="is_active(key)" @click="change_edit(key,key_)"><input type="text" v-if="is_edit == (key+1)*(key_+1)*(key_+3)*(key+4)*(key+4)*(key_+5)*(key_+5)*(key_+7)*(key_+0.5)*(key_+1)" style="z-index:20;width:100%;height:100%;outline:none;border:0;" v-model="new_value" @keyup.enter="submi(key,key_)" >{{val}}</span>
                </span>
            </span>
            <span v-if="this.$store.state.show_insert">
            <editdb @insert='insert'></editdb>
            </span>
        </div>
        <div style="margin:0 auto; width:270px; height:25px;margin-bottom:50px;margin-top:50px;">
            <input v-model="search_data" type="text" style="width:180px;margin-right:4px;margin-top:10px; border:#add 1px solid; height:30px;outline:none;border-radius:5px;" placeholder='查找脚本'>
            <input type="button" style="width:60px;height:30px;border:#add 1px solid;border-radius:5px;background:#fff;outline:none;" @click="search()" value="查找">
        </div>   
    </div>
    <div class="end">
        <br>
        <br>
        <br>
        云南楚雄师范学院信息科学技术学院数字媒体技术专业（2018级）
        <br>
            来源：没有拉姆工作室 
            github : @amdog email:imdoog@168.com
            <br>
            临时信息：信息学院数字媒体技术 mysql数据库大作业
            <br>
            小组成员：鲁志春（前端界面展示 | 服务器连接数据库 部署服务器应用） 杨文龙 | 苏磊 | 王冠伟（mysql SQL语句编写数据库设计）
        </div>
</div>
</template>
<script>
import chose from "../components/chose.vue";
import asiox from 'axios'
import editdb from '../components/editdb.vue'
import logininf from '../components/logininf.vue'
export default {
    name : 'App',
    components : {
        chose,
        editdb,
        logininf
    },
    beforeCreate(){
        let that = this
          asiox.get('http://localhost/api/admindb/&method=get&page=1').then(
              (data)=>{
                 that.db = data.data.data
                 that.db.push() 
              }
          )
    },
    methods : {
        next(){
        let that = this
        if(!this.is_end){
            this.page++
            asiox.get('http://localhost/api/admindb/&method=get&page=' + this.page.toString()).then(
            (data)=>{
            that.db = data.data.data
            that.db.push()
            if(data.data.is_end == 'yes'){
             this.is_end = true  }
            else{this.is_end=false}})}else{alert('已经是最后一页了！')}},
        privios(){
            this.is_end=false
            let that = this
            that.page--
            if(this.page > 0){
            this.is_end=false
            asiox.get('http://localhost/api/admindb/&method=get&page=' + this.page.toString()).then(
            (data)=>{
            that.db = data.data.data
            that.db.push()
            })
            }else{this.page = 1}
        },
        delete_row(){
            let that = this
            if(this.click_index !== 0.1){
             asiox.get('http://localhost/api/admindb/&method=delete&row=' + this.db[this.click_index][0].toString()).then(
              (data)=>{
                if(data.data = 'yes') {
                that.db.splice(this.click_index,1)
                that.db.push() 
              }
              }
          )
        }
        },
        back_home(){
            window.location.href='/'
        },
        insert(v){
            if(v.length >= 3){
            this.$store.state.show_insert = false
            asiox.post(
            "http://localhost/api/admindb/&method=insert",
            {
                data : v
            },
            {
				headers : {
                    'Content-Type' : 'application/json'
                }
			}
                ).then(
                    (data)=>{
                        if(data.data == 'yes') this.db.push(v)
                    }
                )
            }else{
                 this.$store.state.show_insert = false
                alert('格式错误')
            }
        },
        show_insert_tab(){
             this.click_index = 0.1
            this.$store.state.show_insert = true
        },
        search(){
            let that = this
            asiox.get('http://localhost/api/admindb/&method=select&keyword='+this.search_data).then(
                    (data)=>{
                         that.db = data.data.data
                         that.db.push() 
                    }
                )
        },
        is_active(i){
            return i == this.click_index? "red_back" : ""
        },
        change_red(i){
            this.click_index = i
        },
        change_edit(key,key_){
            if(this.click_index == key){
            this.is_edit = (key+1)*(key_+1)*(key_+3)*(key+4)*(key+4)*(key_+5)*(key_+5)*(key_+7)*(key_+0.5)*(key_+1)
            this.new_value = this.db[key][key_]
            }
            else{
                this.is_edit = 0.1
                this.db.push()
            }
        },
        submi(key,key_){
            this.db[key][key_]= this.new_value
            this.is_edit = 0.1
            let that = this
            asiox.post('http://localhost/api/admindb/&method=update&key='+key+'&key_='+key_,
            {
                data : that.new_value
            },
            {
				headers : {
                    'Content-Type' : 'application/json'
                }
			}
                ).then(
                    (data)=>{
                        alert(data.data)
                    }
                )
            this.db.push()}},
    data(){
        return {
            is_end : false,
            page : 1,
            search_data : null,
            new_value : null,
            is_edit : 0.1,
            click_index : 0.1,
            db : []
        }
    }
}
</script>
<style scoped>
.top_div{
    cursor:pointer;
    position: absolute;
    top:15vh;
    font-size:16px;
    background: #fff;
    min-height:100px;
    width: 100%; 
    min-width: 1000px;  
    box-shadow: #777 6px 5px 10px;
    z-index:10;
    margin-bottom:300px;
}
.img{
    margin-top:25px;
    width:180px;
    height:75px;
    float:left;

}
.end{
    color: #999;
    width: 100%;
    height: 240px;
    position:fixed;
    bottom: 0px;
    left: 0;
    background: #556;
    font-size: 12px;
    text-align: center;
    z-index: 1;
}
.ite{
    display:inline-block;
    width:99px;
    height: 20px;
    text-align: center;
    background: #ded;
    border-right:#999 solid 1px;
    border-bottom:#999 solid 1px;
    overflow: hidden;
    margin: 0;
    margin-top: -8px;
}
.ite_{
    display:inline-block;
    width:99px;
    height:20px;
    margin:0;
    text-align: center;
    background: #eee;
    border-right:#999 solid 1px;
    border-bottom:#999 solid 1px;
    overflow: hidden;
    margin-top: -8px;
}
.red_back{
    background: rgb(238, 107, 107);
}
</style>