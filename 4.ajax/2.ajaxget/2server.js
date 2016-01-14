/**
 * 1. 点击按钮的时候，把当前表单填写的用户发送到后台。
 * 2. 后台接收到数据保存到后台，
 * 3. 返回最新的全部学生信息
 */
var students = [];
var http = require('http');//导入NODE的核心http模块
var fs = require('fs');//导入读写文件的模块
var url = require('url');//导入解析URL地址模块
http.createServer(function(req,res){
    //通过parse方法把URL转成对象
    var urlObj = url.parse(req.url,true);// true query是json false  query字符串
    //路径
    var pathname = urlObj.pathname;
    //如果路径是 /
    if(pathname == '/'){
        //从硬盘上独处注册的 html页面，并且读完之后调用回调函数
        fs.readFile('./index.html',function(err,data){
            //把文件内容写回响应体
            res.write(data);
            //关闭和客户端的连接
            res.end();
        })
    }else if(pathname == '/ajax'){
        students.push(urlObj.query);
        res.write('hello');
        setTimeout(function(){
            res.end(JSON.stringify(students));
        },2000);

    }else{
        res.end('404');
    }
//在指定端口上进行监听
}).listen(9090);

