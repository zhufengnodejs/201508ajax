var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var querystring = require('querystring');

//代表处理客户端的请求的回调函数
/**
 *
 * @param request 代表客户端的请求
 * @param response 代表向客户端发的响应
 */
var serve = function (request, response) {
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        response.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./index.html', function (err, data) {
            if(err){
                console.error(err);
            }else{
                response.write(data);
            }
            response.end();
        });
    } else if (pathname.indexOf('/public') == 0) {
        response.setHeader('Content-Type', mime.lookup(pathname));
        fs.readFile('.' + pathname, function (err, data) {
            if(err){
                console.error(err);
            }else{
                response.write(data);
            }
            response.end();
        });
    } else if(pathname.indexOf('/ajax') == 0){
        var result='';
        request.on('data',function(data){
            result+=data;
        })
        request.on('end',function(){
            var contentType = request.headers['content-type'];
            if(contentType =='application/x-www-form-urlencoded'){
               var jsonData =  querystring.parse(result);
            }

            //response.end(JSON.stringify(jsonData));
            response.end('<h1>hello</h1>');
        });
    }else{
        response.end('NOT FOUND');
    }

};
//创建http服务器
var server = http.createServer(serve);

//在本机的8082端口上监听客户端的请求
server.listen(8080);