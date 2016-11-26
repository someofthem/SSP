function mul(a,b) {
  return a*b;
}

function foo(a) {
  return function(b) {
     return mul(a,b);
   }};

var par=foo(8)
console.log("--Carring--")

console.log(par(7));
//
console.log("----Fibonacci memorization---")

function func(n){
  var mass = [];
  mass.push(1,1);
  for(var i =2 ; i < n ; i++){
      mass[i]= mass[i-1]+mass[i-2];
  }
  console.log(mass);


return function(x){
  return mass[x];
}
}

func(8);
