const num = [1,-2,2,-3,3,4,5,6,7];
for(let i = 0; i < num.length; i++){
    if(num[i] > 3){
        break;
    }
    //console.log(num[i]);
}


for(let i = 0; i < num.length; i++){
    if(num[i] < 0){
        continue;
    }
    console.log(num[i]);
}