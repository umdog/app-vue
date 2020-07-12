<template>
        <div style="backgound:#000; margin:0 auto;width:100%;height:20px;position:static;" >
        <span v-for="(item,key) in tips">
        <span class="tips" >
            <input :placeholder='item' @keyup.enter='submi()' type="text" style="background:rgb(238, 107, 107);margin:0;z-index:20;width:100%;height:20px;outline:none;border:0;"  v-model="new_value[key]">
        </span>
        </span>
    </div>
</template>
<script>
export default {
    name : 'insert',
    methods :{
      submi(){
          this.$emit('insert',this.new_value)
      }  
    },
    data(){
        return {
            tips : [
                "id",
                "创建用户",
                "触发词语",
                "脚本内容",
                "运行周期",
                "最后运行",
                "帮助说明",
                "公开属性",
                "用户数据"
            ],
            new_value : []
        }
    }
}
</script>
<style scoped>
.tips {
    display:inline-block;
    width:99px;
    height:20px;
    line-height: 10px;
    margin:0;
    text-align: center;
    border-right:rgb(23, 66, 207) solid 1px;
    border-bottom:rgb(23, 66, 207) solid 1px;
    border-top:rgb(23, 66, 207) solid 1px;
    overflow: hidden;
}
</style>