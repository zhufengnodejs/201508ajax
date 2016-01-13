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

var zfLog = function(){
    log('zfpx',arguments[0])
}
var zfLog = log.bind(null,'zfpx');

var zflog = function(){
    log.apply(null,['zfpx'].concat(Array.prototype.slice.call(arguments)));
}
zfLog('hello');
zfLog('world');