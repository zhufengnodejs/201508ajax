(function(global){
   var http = global.$ = {};
   http.ajax = function(config){
       var defaultConfig = {
           method:'get',//请求方法
           url:undefined,//请求路径
           data:undefined,//发送的数据
           dataType:'text',//响应的类型 text json
           cache:false,//是否可以缓存
           async:true, //是否异步
           username:undefined,//用户名
           password:undefined, //密码
           timeout:0,//设置超时时间 如果在指定毫秒内请求没有发出则放弃请求
           context:undefined,//上下文对象 设置在回调函数中的this指针
           headers:undefined //请求头
       }

       if(!util.isObject(config)){
           throw Error('配置必须是对象类型');
       }

       config = util.extends(defaultConfig,config);

       var validator = new util.Validator(config);
       validator.addRule('method','方法非法',function(value){
           return /(get|post|delete|put|options)/.test(value);
       }).addRule('dataType','类型非法',function(value){
           return /(json|text)/.test(value);
       }).start();

       if(config.data){
           if(/(get|options|head)/.test(config.method)){
                util.append(config,util.toQueryString(config.data));
               config.data = undefined;
           }
       }

       config.cache = !!config.cache;
       if(!config.cache){
           util.append(config,'_='+(Date.now()+Math.random()));
       }

       var xhr =  global.util.getXHR();
       var defer = new Defer(config.context);
       xhr.open(config.method,config.url,config.async,config.username,config.password);
       //设置请求头
       if(config.headers){
         Object.keys(config.headers).reduce(function(pre,curr){
             return xhr.setRequestHeader(curr,config.headers[curr]);
         },xhr);
       }

       xhr.onreadystatechange = function(){
           if(xhr.readyState == xhr.DONE){
               if(/2\d{2}/.test(xhr.status)){
                   var result = xhr.responseText;
                   if(config.dataType == 'json'){
                        try{
                           result =  util.toJSON(result);
                        }catch(e){
                            defer.reject(e.message);
                        }
                   }
                   //成功
                   defer.resolve(result);
               }else{
                   defer.reject(xhr.status,xhr.getAllResponseHeaders());
               }
           }
       }
       if(config.timeout>500){
           if(xhr.timeout){
               xhr.timeout = config.timeout;
               xhr.ontimeout = null;
           }else{
               setTimeout(function(){
                   if(xhr.readyState <4){
                       xhr.abort();
                       //报错
                   }
               },xhr.timeout);
           }
       }
       xhr.send(config.data);
       return defer.promise;
   }
})(window)