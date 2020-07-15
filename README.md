# 僵尸.js  --version 3.2.1
地址:chatjs.top 已经备案.....
## 用来做什么？
僵尸.js能为用户可便捷
管理自己零碎的js脚本的服务,比如你临时
写了一个爬取网站数据的脚本，那么你可以为它设置
一个触发词，或者时间，这样脚本就
可以按照你愿意的方式执行
-简要：
1 nodejs库 jquery jsdom request 可通过更改
身份属性获得更多支持.
2 机器命令与好友通信自由切换 一个类似的linux
终端shell的操作.
3 社区代码共享 你的代码可以被公开，也可以仅
你自己可以使用.
4 案例，nodejs爬虫代挂
## 如何提交代码?
在任意得窗口，发送<dj，提交代码，[触发词]，[脚本内容]，[帮助信息]>. ，这是我们为你提供的全局环境
```
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
```
## 如何添加好友?
同样的和前缀用dj用户<dj，添加，[好友名字]>，你的好友同意可以使用<dj，同意，[你的名字]>.
## 如何触发我的脚本?
发送<dj，触发词，[参数1]，[参数2]，[参数3]>首先你的脚本中有对这些参数处理.
## 如何添加库?
我们目前不打算添加其他库，这是为了安全起见，更多的库意味着收到恶意代码攻击的几率增加.以后可能会增加支持

# 关于后台数据库

### 小组成员：鲁志春（前端界面展示 | 服务器连接数据库 | 部署服务器应用） 王冠伟(测试应用) | 苏磊(编写文档) | 杨文龙（mysql SQL语句编写数据库设计）
## 使用到的技术栈 ----
数据的展示使用的是web,使用快速容易上手的vue.js,socket.io.js做即使消息通信,后台使用nginx做反向代理，redis保存用户状态，以及消息缓存历史。mongodb保存用户基本信息，mysql保存用户代码内容。
## 后台管理系统的使用
为了管理员的操作与管理，向着界面简洁，功能齐全开发.基本包括了对mysql的增删改查，分页.
###具体使用到的sql和功能.

```        const redis_c = redis.createClient(6379, '127.0.0.1');
            redis_c.get(cookie.parse(req.headers.cookie).check, (erro, data) => {
                console.log(data, "----------login-admin---------")
                if (erro || data !== 'admin') {
                    res.statusCode = 404
                    res.end()
                } else {


                    const db = mysql.createConnection({
                        host: '39.108.216.184',
                        user: 'chunge',
                        password: //(*_*)~~~
                        database: 'chat_js'
                    })
                    db.connect();
                    let db_query = function (sql, param, callback) {
                        let data = {
                            data: []
                        }
                        db.query(sql, param, function (error, back) {
                            if (error) {
                                console.log(error)
                            } else {
                                let index = 0
                                let arry_back = []
                                back.forEach(value => {
                                    for (let v in value) {
                                        arry_back.push(value[v])
                                    }
                                    data.data[index] = arry_back
                                    arry_back = []
                                    index++
                                })
                                callback(data)
                            }
                        })
                    }
                    let inf = querystring.parse(req.url)
                    if (inf.method == 'get') {
                        let start = 60 * (querystring.parse(req.url).page - 1)
                        let end = querystring.parse(req.url).page * 60
                        db_query('SELECT * from chat_js_user_script limit ?,?', [start, end], (rows) => {
                            if (rows.data.length < 60) {
                                rows.is_end = 'yes'
                            } else {
                                rows.is_end = 'no'
                            }
                            res.end(JSON.stringify(rows))
                        })
                    }
                    if (inf.method == 'update') {
                        res.end("修改成功！")
                        req.on('data', (update_inf) => {
                            let swi_ = JSON.parse(Buffer.from(JSON.parse(JSON.stringify(update_inf))).toString())
                            let inf = querystring.parse(req.url)
                            let id = parseInt(inf.key)
                            db.query('update chat_js_user_script set ' + db_map[inf.key_] + '=? where _id=?', [swi_.data, id])
                            console.log(db.format('update chat_js_user_script set ' + db_map[inf.key_] + '=? where _id=?', [swi_.data, id]))
                        })
                    }
                    if (inf.method == 'select') {
                        db_query('select * from chat_js_user_script where script_content like ?', ["%" + inf.keyword + "%"], (rows) => {
                            res.end(JSON.stringify(rows))
                        })
                    }
                    if (inf.method == 'delete') {
                        db.query('delete from chat_js_user_script where _id=' + inf.row, (a, b, c) => {
                            console.log(a)
                        })
                        console.log(db.format('delete from chat_js_user_script where _id=' + inf.row))
                        res.end('yes')
                    }
                    if (inf.method == 'insert') {
                        res.end('yes')
                        req.on('data', (update_inf) => {
                            let swi_ = JSON.parse(Buffer.from(JSON.parse(JSON.stringify(update_inf))).toString())
                            console.log(swi_.data)
                            db.query('insert into chat_js_user_script set ?', {
                                _id: swi_.data[0],
                                belong_user: swi_.data[1],
                                key_word: swi_.data[2],
                                script_content: swi_.data[3],
                                run_cycle: swi_.data[4],
                                last_run_time: swi_.data[5],
                                help: swi_.data[6],
                                attr_: swi_.data[7],
                                module: swi_.data[8]
                            }, (a, b, c) => {
                                console.log(a, b, c)
                            })
                        })
                    }
                }
            })
```
