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
    console.log('exec');
    var fns = [Max1,Max2,Max3];
    var max=fns[0](),maxFn = fns[0];
    for(var i=1;i<fns.length;i++){
        var val = fns[i]();
        if(val>max){
            max = val;
            maxFn = fns[i];
        }
    }
    getMax = maxFn;
    return max;
}

console.log(getMax());
console.log(getMax());