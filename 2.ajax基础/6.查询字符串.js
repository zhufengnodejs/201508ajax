var util = {
    toQueryString:function(data){
        var arr = [];
        for(var attr in data){
            if(data.hasOwnProperty(attr)){
                arr.push(attr+'='+data[attr]);
            }
        }
        return arr.join('&');
    },
    toQueryString2:function(data){
        return Object.keys(data).map(function(attr){
            return attr+'='+data[attr];
        }).join('&');
    }
}
var obj = {
    name:'zfpx',
    age:6
}
var result = util.toQueryString2(obj);
console.log(Object.keys(obj));
console.log(result);
// name=zfpx&age=6
