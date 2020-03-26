const num = [3,4,5,7,8];
/*--------------- map ------------*/

// const output = [];

// for (let i=0; i<num.length; i++){
//     const element = num[i];
//     const square = element * element;
//     output.push(square);
// }

// function square(element){
//     return element * element;
// }

// num .map(function (element, index, array){
//     console.log(element, index, array);
// });

// const square = element => element * element
// const square = x => x * x;

const result = num.map(function (element){
    return element * element;
});
console.log(result);

const result2 = num.map(x => x * x)
console.log(result2);

/*--------------- filter ------------*/
const result3 = num.filter(x => x > 5);
console.log(result3);

/*--------------- find ------------*/
const result4 = num.find(x => x < 5);
console.log(result4);