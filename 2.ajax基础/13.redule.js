var arr = ['a','b','c','c','d','d','d'];
var result = arr.reduce(function(previous,current){
  previous[current] = (previous[current]?previous[current]:0)+1;
    return previous;
},{});
console.log(result);