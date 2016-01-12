/**
 *  1. 读取两个文件。先读取1.txt,在读取里面内容指定的文件，并输入结果.
 *
 */

var fs = require('fs');
fs.readFile('1.txt', 'utf8',function (err, data) {
    if(err){
        console.error('读取文件失败',err);
    }else{
        // hello.txt
        fs.readFile(data, 'utf-8', function (err, data) {
            if(err){
                console.error('读取文件失败',err);
            }else{
                console.log(data);
            }
        });
    }
});
