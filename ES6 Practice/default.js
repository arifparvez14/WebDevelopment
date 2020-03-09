function add(num1, num2 = 1){
    /*
    if (num2 == undefined){
        num2 = 0;
    }
    */

    /*
    num2 = num2 || 5;
    return num1+num2;
    */

    return num1 + num2;
}

const total = add(10,20);
console.log(total);

const total2 = add(10);
console.log(total2);