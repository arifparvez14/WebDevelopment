let bonus = 15;

function sum(first, second){
    let result = first + second + bonus;
    console.log(result);
    if (result > 9){
        const mood = "happy";
        console.log(mood);
        var im = "Yes";
    }
    return result;
}

const output = sum(3,7);
console.log(bonus);
console.log(output);
//console.log(im);