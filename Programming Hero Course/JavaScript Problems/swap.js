var a = 5;
var b = 7;
console.log("Before swap: a =", a, ",b =",b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ",b =",b);



var x = 10;
var y = 20;
console.log("Before swap: x =", x, ",y =",y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x =", x, ",y =",y);

var p = 3;
var q = 8;
console.log("Before swap: p =", p, ",q =",q);
[p, q] = [q, p];
console.log("After swap: p =", p, ",q =",q);