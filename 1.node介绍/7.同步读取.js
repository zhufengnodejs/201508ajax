var fs = require('fs');
console.log('1');
var content = fs.readFileSync('./1.txt');
console.log(content.toString());
console.log('2');

