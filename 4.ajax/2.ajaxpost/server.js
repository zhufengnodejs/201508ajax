/**
 * 1. 点击按钮的时候，把当前表单填写的用户发送到后台。
 * 2. 后台接收到数据保存到后台，
 * 3. 返回最新的全部学生信息
 */
var students = [];
var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);// true query是json false  query字符串
    console.log(urlObj);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if(pathname == '/'){
        fs.readFile('./index.html',function(err,data){
            res.write(data);
            res.end();
        })
    }else if(pathname == '/ajax'){
        students.push(urlObj.query);
        res.end(JSON.stringify(students));
    }else{
        res.end('404');
    }

}).listen(8080);

