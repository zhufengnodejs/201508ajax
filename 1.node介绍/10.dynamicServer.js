var http = require('http');
//代表处理客户端的请求的回调函数
/**
 *
 * @param request 代表客户端的请求
 * @param response 代表向客户端发的响应
 */
var serve = function(request,response){
    console.log(request.method);//获取请求中的方法
    console.log(request.url);//获取请求中的URL
    console.log(request.headers);//请求头(首部)
    response.setHeader('Content-Type','text/html;charset=utf8');
    response.statusCode = 200;//状态码
    response.write('<h1>中文</h1>');//写响应体
    response.write('<h1>world</h1>');//写响应体

    response.end();//结束响应

}
//创建http服务器
var server = http.createServer(serve);

//在本机的8080端口上监听客户端的请求
server.listen(8080);