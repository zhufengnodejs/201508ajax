/**
 * 1. 点击按钮的时候，把当前表单填写的用户发送到后台。
 * 2. 后台接收到数据保存到后台，
 * 3. 返回最新的全部学生信息
 */
var students = [];
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('./index.html',function(err,data){
        res.write(data);
        res.end();
    })
}).listen(8080);

