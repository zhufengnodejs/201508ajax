var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
//代表处理客户端的请求的回调函数
/**
 *
 * @param request 代表客户端的请求
 * @param response 代表向客户端发的响应
 */
var serve = function (request, response) {
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    console.log(request.method);
    if (pathname == '/') {
        response.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./form.html', function (err, data) {
            if(err){
                console.error(err);
            }else{
                response.write(data);
            }
            response.end();
        });
    } else if (pathname.indexOf('/public') == 0) {
        response.setHeader('Content-Type', mime.lookup(url));
        fs.readFile('.' + pathname, function (err, data) {
            if(err){
                console.error(err);
            }else{
                response.write(data);
            }
            response.end();
        });
    } else if(pathname.indexOf('/post') == 0 && request.method.toLocaleLowerCase() =='get'){
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write(JSON.stringify(urlObj.query));//输出返回的数据
        response.end();//结束响应
    } else if(pathname.indexOf('/post') == 0 && request.method.toLocaleLowerCase() =='post'){
        //定义变量用来存放返回的数据
        var content = "";
        //每当有数据返回时就追加到content里
        console.log(request.headers.name);
        //每当数据传过来时我们执行两个监听方法，
        request.on('data', function (chunk) {//监听客户端的数据
            content += chunk;
        });
        request.on('end', function () {//接收完毕
            //输出一个响应头
            response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            response.write("receive: " + content);//输出返回的数据
            response.end();//结束响应
        });
    }else{
        response.end('NOT FOUND');
    }

};
//创建http服务器
var server = http.createServer(serve);

//在本机的8082端口上监听客户端的请求
server.listen(8082);