const age = [10, 20, 30];
const age2 = [5, 7, 12, 22];
const age3 = [35, 29, 30];
const totalAge = age.concat(age2).concat([5]).concat(age3);
console.log(totalAge);

const totalAges2 = [...age, ...age2, 5, ...age3];
console.log(totalAges2);

const minister = 650;
const sochib = 500;
const business = 700;
const maxValue = Math.max(minister, sochib, business);
console.log(maxValue);

const nums = [650, 500, 700];
const maxs = Math.max(...nums);
console.log(maxs);


