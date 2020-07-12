<template>
    <div style="margin:0 auto;border-top:1px #999 solid;width:100%;height:20px;position: absolute;top: -10px;left:0;" >
        <span v-for="item in tips">
        <span class="tips" >
          <span>
             {{item}}<svg t="1592819198488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2691" width="16" height="16"><path d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z" p-id="2692"></path></svg>
          </span>
          </span>
        </span>
        </span>
    </div>
</template>
<script>
export default {
    name : "chose",
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
            ]
        }
    }
}
</script>
<style scoped>
.tips {
    display:inline-block;
    width:99px;
    height:20px;
    margin:0;
    text-align: center;
    background: rgb(250, 250, 113);
    border-right:#999 solid 1px;
    border-bottom:#999 solid 1px;
    border-top:#999 solid 2px;
    overflow: hidden;
    margin-top: 8px;
}
</style>