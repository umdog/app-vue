  <template>
  <div style="background:#fff;width:100%;height:100%;margin:0;padding:0;margin-top:5%;border-top: #666 solid 2px;padding-bottom: 20px;">
  <div style="position:fixed;top:0;left:4vh;font-size:16px;background:#fff;width:100%;height:6vh;line-height:6vh;"><router-link to="/devapp" style="color:#999;">  app代开发</router-link><router-link to="/admindb" style="color:#999;"> | 后台管理系统</router-link><router-link to="/download" style="color:#999;"> | 下载安卓版本</router-link></router-link><a href="http://imdog.top" style="color:#999;"> | 我的博客</a></div>
  <div style="margin:0 auto; width: 800px;height: 720px;">
  <div style="float: left;margin-top: 100px;">
    <span style="font-size: 18px;color: #555;width:500px;overflow:hidden">
      <span style="font-size: 30px;color: darkcyan;">僵尸.js</span>能为用户可便捷<br>
      管理自己零碎的js脚本的服务,比如你临时
      <br>写了一个爬取网站数据的脚本，那么你可以为它设置
      <br>一个触发词，或者时间，这样脚本就
      <br>可以按照你愿意的方式执行
      <br>-简要：
      <br>
      1 nodejs库 jquery jsdom request 可通过更改
      <br>身份属性获得更多支持.
      <br>
      2 机器命令与好友通信自由切换 一个类似的linux 
      <br>终端shell的操作.
      <br>
      3 社区代码共享  你的代码可以被公开，也可以仅
      <br>你自己可以使用.
      <br>
      4 案例，nodejs爬虫代挂
      <br>
      <br>
      <br>
      <br>
    </span>
    </div>
<div style=" position: relative;float:right;width: 350px;height: 680px;border-radius: 20px;border: #222 1px solid;margin-top: 30px;">
      <div style="position: absolute;top: 7px;width: 60px;height: 5px;border-radius: 3px;border: #000 solid 1px;right: 50%;margin-right: -30px;"></div>
      <div style=" overflow: hidden; position: absolute; right:0;top:10px; width: 337px;height: 600px;margin:0 auto;border-radius: 10px;border: #222 1px solid;margin-right:5px;margin-top:20px;display: inline-block;">
            <inapp></inapp>
      </div>
      <div style="position: absolute;bottom: 4px;width: 40px;height: 40px;border-radius: 30px;border: #000 solid 1px;right: 50%;margin-right: -21px;">
    </div>
  </div>
</div>
<div style="color:#000;width:800px;height:40px;margin:0 auto;line-height:10px;text-align:left;margin-top:40px;border-bottom:#999 solid 2px;">
<h2>相关问题</h2>
</div>
<div style="width:800px;height:600px;margin:0 auto;">
<h3>如何提交代码?</h3>
<div style="width:800px;height:auto;background:#fafafa;border-radius:4px;color:#999;">
在任意得窗口，发送<<span style='color:#7a7;'>dj，提交代码，[触发词]，[脚本内容]，[帮助信息]</span>>.
，这是我们为你提供的全局环境<pre>
	Promise: Promise,
	setInterval: setInterval,
	setTimeout: setTimeout,
	message: d5.message,//原消息
	data: data,//用[,]切割过的数组
	jsdom: jsdom,
	myDate: row[0].module,//你的数据，可持久保存
	jQuery: jQuery,
	request: request,
	response: 'running...' //返回字段，你要返回的值
</pre>
</div>
<div style="width:800px;height:auto;margin:0 auto;">
<h3>如何添加好友?</h3>
<div style="width:800px;height:auto;background:#fafafa;border-radius:4px;color:#999;">
同样的和前缀用dj用户<<span style='color:#7a7;'>dj，添加，[好友名字]</span>>，你的好友同意可以使用<<span style='color:#7a7;'>dj，同意，[你的名字]</span>>.
</div>
<div style="width:800px;height:auto;margin:0 auto;">
<h3>如何触发我的脚本?</h3>
<div style="width:800px;height:auto;background:#fafafa;border-radius:4px;color:#999;">
发送<<span style='color:#7a7;'>dj，触发词，[参数1]，[参数2]，[参数3]</span>>首先你的脚本中有对这些参数处理.
</div>
<div style="width:800px;height:auto;margin:0 auto;">
<h3>如何添加库?</h3>
<div style="width:800px;height:auto;background:#fafafa;border-radius:4px;color:#999;">
我们目前不打算添加其他库，这是为了安全起见，更多的库意味着收到恶意代码攻击的几率增加.以后可能会增加支持.
</div>
</div>
<br>
</div>
<span style="text-align:center;display:block;border-top:1px #777 solid ;width:100%;height: 200px;font-size: 15px;color: #999;margin:0 auto;margin-top:80px;">
      <br>
      <br>
      来源：没有拉姆工作室      
      <br>
      github:amdog/umdog | emil:aswatercoo@sina.com
      <br>
      Copyright © <a href="http://www.beian.miit.gov.cn/" style="color:#999;">滇ICP备20005951号</a>
      <br>  
       版本号 ： 2.4.4 
    </span>
</div>
</template>
<script>
import inapp from '../components/inapp.vue'
export default {
    name : 'phone',
    components : {
        inapp
    }
}
</script>
<style scoped>
a:link{
  text-decoration: none;
}
</style>