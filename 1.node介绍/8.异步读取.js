var fs = require('fs');
console.log('1');

fs.readFile('./1.txt',function(err,data){
    console.log(data.toString());
});
console.log('2');

