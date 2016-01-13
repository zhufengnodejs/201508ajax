(function(global){
    //暴露给外部调用方使用，注册回调函数的
    function Promise(context){
        this.context = context;
        this.onDone = this.onFail = this.onAlways = function(){}
    }

    Promise.prototype = {
        done:function(fn){
            this.onDone = fn.bind(this.context);
            return this;
        },
        fail:function(fn){
            this.onFail = fn.bind(this.context);
            return this;
        },
        always:function(fn){
            this.onAlways = fn.bind(this.context);
            return this;
        }
    }

//处理内部逻辑和判断的
    function Defer(context){
        this.promise = new Promise(context);
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
    global.Defer = Defer;
})(window)