/**
 * 任务的执行顺序和排列顺序不一致
 * api application interface
 *
 */

console.log('1');
setTimeout(function(){
    console.log('2');
},1000)
console.log('3');