var util = {
    bind:(function(){
        /*if(Function.prototype.bind){
            return function(fn,context){
                return fn.bind(context);
            }
        }*/
        return function(fn,context){
          var args = Array.prototype.slice.call(arguments,2);
          return function(){
              fn.apply(context,args.concat(Array.prototype.slice.call(arguments,0)));
          }
        }
    })()
}

var say = function(name,words){
    console.log(this.name,name,words);
}
var newSay = util.bind(say,{name:'zfpx'},'myzfpx');
newSay('world');