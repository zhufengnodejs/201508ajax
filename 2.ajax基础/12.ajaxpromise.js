//暴露给外部调用方使用，注册回调函数的
function Promise(){
  this.onDone = this.onFail = this.onAlways = function(){}
}

Promise.prototype = {
    done:function(fn){
        this.onDone = fn;
        return this;
    },
    fail:function(fn){
        this.onFail = fn;
        return this;
    },
    always:function(fn){
        this.onAlways = fn;
        return this;
    }
}

//处理内部逻辑和判断的
function Defer(){
    this.promise = new Promise();
}
Defer.prototype = {
    resolve:function(val){
        this.promise.onDone(val);
        this.promise.onAlways();
    },
    reject:function(reason){
        this.promise.onFail(reason);
        this.promise.onAlways();
    }
}

var defer = new Defer();
setTimeout(function(){
    defer.resolve(Math.random());
},3000);
defer.promise.done(function(val){
    console.log('done',val);
}).fail(function(reason){
    console.error('fail',reason);
}).always(function(){
    console.log('always');
})