console.log("log hello");
console.info("info hello");
console.error("error hello");
console.warn("warn hello");

console.time('cost');
for(var i=0;i<1000000000;i++){

}
console.timeEnd('cost');
console.log("over");