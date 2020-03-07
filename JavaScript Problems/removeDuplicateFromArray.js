var num = [2,5,6,7,2,5,3,3];
var unique = [];
for(var i = 0; i < num.length; i++){
    var element = num[i];
    var index = unique.indexOf(element);
    if (index == -1){
        unique.push(element);
    }
}
console.log(num);
console.log(unique);

function add(a,b){
    return a+b;
}
add("adam" + "eve");