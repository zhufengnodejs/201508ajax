/**
 *
 */

var Max1 = function(){
    return 1;
}
var Max2 = function(){
    return 2;
}
var Max3 = function(){
    return 3;
}

function getMax(){
    //构建函数数组
    var fns = [Max1,Max2,Max3];
    //默认第一个函数是最大函数 第一个函数的返回值是最大值
    var max=fns[0](),maxFn = fns[0];
    //从第二个函数开始循环，如果更大的话则替换最大函数和最大值
    for(var i=1;i<fns.length;i++){
        var val = fns[i]();
        if(val>max){
            max = val;
            maxFn = fns[i];
        }
    }
    //用最大函数赋值给外部函数
    getMax = maxFn;
    return max;
}

console.log(getMax());
console.log(getMax());