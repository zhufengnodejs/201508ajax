var num = 3.3;
console.log(parseInt(num));
console.log(Math.ceil(num)); // ceil向上取整
console.log(Math.floor(num)); // floor向下取整:
console.log(Math.round(num)); //round四舍五入
console.log(num.toFixed(0)); //Number 四舍五入为指定小数位数的数字

console.log(~~num);          //~~ 按位两次取反相当于取整
// 1.1
//取反的步骤
/**
 * 1. 舍弃小数，转成整数 3
 * 2. 3转成二进制
 * 3. 取反
 *
 */
console.log((3).toString(2)); // 11 -> 00 -> 11
console.log(~~3);
