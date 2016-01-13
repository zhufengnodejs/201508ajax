/*
var util = {
    each:(function(){
        if(Array.prototype.forEach){
            */
/**
             * list 需要迭代的数组
             * fn 需要对数组里每个元素调用的函数
             * context 函数里的this指针
             *//*

            return function(list,fn,context){
                list.forEach(fn,context);
            }
        }
        return function(list,fn,context){
                for(var i=0;i<list.length;i++){
                    fn.call(context,list[i],i,list);
                }
        }

    })()
}

var arr = [1, 2, 3];
util.each(arr,function (item, i, all) {
    console.log(this.name, item, i, all);
}, {name: 'zfpx'})
*/


function forE(list,fn,context){
    for(var i=0;i<list.length;i++){
        fn.call(context,list[i],i,list);
    }
}
forE([1,2,3],function(item,index,list){
    console.log(this.name,item,index,list);
},{name:'zfpx'})
