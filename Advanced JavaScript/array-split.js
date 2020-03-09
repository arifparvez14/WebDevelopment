const num = [1,2,3,4,5,6];
/*--------------- slice ------------*/
const part = num.slice(1, 2);
console.log(part);
console.log(num);

/*--------------- splice ------------*/
const remove = num.splice(2,2, 77, 88);
console.log(remove);
console.log(num);

const together = num.join(",,");
console.log(together);

