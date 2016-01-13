var url = 'http://localhost:8080/a/b';

var query = 'name=zfpx&age=6';
url = url + (/\?/.test(url)?'&':'?') + query;
console.log(url);
