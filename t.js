var querystring   = require('querystring');

var s = "name=zfpx&age=6";
console.log(querystring.parse(s));

var j = '{"name":"zfpx"}';
console.log(JSON.parse(j));