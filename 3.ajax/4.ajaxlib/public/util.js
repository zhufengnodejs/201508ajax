(function(global){
    global.util = {
        getXHR:(function(){
            var XHR = function(){
                var fns = [function(){
                    return new XMLHttpRequest();// IE7+ firefox chrome opera safari
                },function(){
                    return new ActiveXObject("Msxml2.XMLHTTP");// ie5 ie6
                },function(){
                    return new ActiveXObject("Msxml3.XMLHTTP");// ie5 ie6
                },function(){
                    return new ActiveXObject("Microsoft.XMLHTTP");// ie5 ie6
                }];
                //一开始是Microsoft.XMLHTTP 之后变成Msxml2.XMLHTTP及更新版的Msxml3.XMLHTTP
                var val;
                for(var i=0;i<fns.length;i++){
                    try{
                        val = fns[i]();
                    }catch(e){
                        continue;
                    }
                    XHR = fns[i];
                    break;
                }
                return val;
            }
            XHR();
            return XHR;
        })(),
        extends: function (defaultConfig, config) {
            var obj = {};
            for (var attr in defaultConfig) {
                obj[attr] = config[attr] || defaultConfig[attr];
            }
            return obj;
        },
        Validator:(function(){
            function Validate(config){
                this.config = config;
                this.rules = [];
            }
            Validate.prototype = {
                addRule:function(key,errMsg,method){
                    this.rules.push({
                        key:key,
                        errMsg:errMsg,
                        method:method
                    });
                    return this;
                },
                start:function(){
                    this.rules.forEach(function(rule){
                        if(!rule.method(this.config[rule.key])){
                            throw Error(rule.errMsg);
                        }
                    },this);
                }
            }
            return Validate;
        })(),
        toQueryString:function(data){
            return Object.keys(data).map(function(attr){
                return attr+'='+data[attr];
            }).join('&');
        },
        append:function(config,querystring){
            config.url = config.url + (/\?/.test(config.url)?'&':'?')+querystring;
        },
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

    function isType(type){
        return function(obj){
            return Object.prototype.toString.call(obj) == '[object '+type+']';
        }
    }
    var types = ['Object','Function','Array','Number','String','Boolean','Date'];
    types.forEach(function(type){
        global.util['is'+type] = isType(type);
    })
})(window)