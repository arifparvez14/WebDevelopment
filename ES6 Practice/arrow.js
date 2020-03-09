// function doubleIt(num){
//     return num * 2;
// }

// var doubleIt = function myFunc(num){
//     return num * 2;
// }

const doubleIt = (num) => num * 2;
const result = doubleIt(5);
console.log(result);

const add = (num1, num2) => num1 + num2;
const resultAdd = add(13,7);
console.log(resultAdd);


const bisal = (num1, num2) => {
    let add = num1 + num2;
    let diff = num1 - num2;
    let res = add * diff;
    return res
}

const value = bisal(3, 2);
console.log(value);