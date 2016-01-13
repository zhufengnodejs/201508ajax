function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj) == '[object '+type+']';
    }
}
var util = {};

var types = ['Object','Function','Array','Number','String','Boolean','Date'];
types.forEach(function(type){
    util['is'+type] = isType(type);
})

console.log(util.isDate(new Date()));

function log(name,words){
    console.log(name,':',words);
}
log('zfpx','hello');
log('zfpx','world');

var zfLog = ?;
zfLog('hello');
zfLog('world');