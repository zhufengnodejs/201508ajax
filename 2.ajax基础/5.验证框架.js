var girl = {
    age:19,
    height:210
}

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
var validate = new Validate(girl);
validate.addRule('age','年龄不合适',function(value){
    return value > 18 && value < 80;
}).addRule('height','身高不合适',function(value){
    return value >50 && value<200;
}).start();
