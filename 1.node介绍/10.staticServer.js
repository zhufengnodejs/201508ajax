var http = require('http');
var fs = require('fs');
var mime = require('mime');
//代表处理客户端的请求的回调函数
/**
 *
 * @param request 代表客户端的请求
 * @param response 代表向客户端发的响应
 */
var serve = function(request,response){
   var url = request.url;
   if(url == '/'){
       response.setHeader('Content-Type','text/html;charset=utf8');
       fs.readFile('./index.html',function(err,data){
           response.write(data);
           response.end();
       });
   }else if(url.indexOf('/public')==0){
       response.setHeader('Content-Type',mime.lookup(url));
       fs.readFile('.'+url,function(err,data){
           response.write(data);
           response.end();
       });
   }else{
       response.end('NOT FOUND');
   }

}
//创建http服务器
var server = http.createServer(serve);

//在本机的8080端口上监听客户端的请求
server.listen(8080);