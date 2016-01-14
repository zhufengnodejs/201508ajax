/**
 * 1. 点击按钮的时候，把当前表单填写的用户发送到后台。
 * 2. 后台接收到数据保存到后台，
 * 3. 返回最新的全部学生信息
 */
var students = [];
//导入http模块
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring   = require('querystring');
http.createServer(function(req,res){
    //把url转成对象
    var urlObj = url.parse(req.url,true);// true query是json false  query字符串
    console.log(urlObj);
    //得到路径名
    var pathname = urlObj.pathname;
    console.log(pathname);
    //当路径为根目录的时候
    if(pathname == '/'){
        //读取本目录下的index.html文件
        fs.readFile('./index.html',function(err,data){
            //写到响应体里
            res.write(data);
            //结束响应
            res.end();
        })
        //当访问的路径是/ajax
    }else if(pathname == '/ajax'){
        var result ='';
        //每当服务器收到一段客户端发过来的数据是，就可以累加到result
        req.on('data',function(data){
            result+=data;
        });
        //当全部数据接收完毕之后，
        req.on('end',function(){
            //把查询字符串转成对象
            var j = querystring.parse(result);
            //把当前的对象添加到数组中
            students.push(j);
            //返回全部的学生 因为end只接收字符串，所以要stringify
            res.end(JSON.stringify(students));
        });

    }else{
        res.end('404');
    }

}).listen(8080);

