/**
 * Promise 表示一个异步操作的最终结果，
 * 与之进行交互的方式主要是 then 方法，
 * 该方法注册了两个回调函数，
 * 用于接收 promise 的终值
 * 或本 promise 不能执行的原因。
 */
var Defer = function(){
   var onSuccess;
   var onFail;
   return {
       resolve:function(val){
          onSuccess(val);
       },
       reject:function(reason){
           onFail(reason);
       },
       promise:{
         then:function(success,fail){
             onSuccess = success;
             onFail = fail;
         }
       }
   }
}
var defer = new Defer();
setTimeout(function(){
    //defer.resolve(Math.random());
    defer.reject('太累了');
},3000);
defer.promise.then(function(value){
    console.log(value);
},function(reason){
    console.error(reason);
});
