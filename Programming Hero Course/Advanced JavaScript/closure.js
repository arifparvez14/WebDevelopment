function stopWatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);
console.log(clock1);
//1,2

const clock2 = stopWatch();
console.log(clock2);
//1
console.log(clock2);
//3