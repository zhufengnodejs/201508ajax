var util = {
    toJSON:(function(){
        if(JSON){
            return function(str){
                return JSON.parse(str);
            }
        }
        return function(str){
            //return eval('('+str+')');
            return new Function('return '+str)();
        }
    })()
}
var str = '{"name":"zfpx"}';
var result = util.toJSON(str);
console.log(result);

var fn = new Function('return {"name":"zfpx"}');
var s = fn(1,2);
console.log(s);