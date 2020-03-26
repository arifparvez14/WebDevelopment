var friendsAge = [15, 17, 14, 16];
console.log(friendsAge[2]);

friendsAge[1] = 100;
console.log(friendsAge);

var position = friendsAge.indexOf(14);
console.log(position);


console.log(friendsAge);
friendsAge.push(15);
console.log(friendsAge);
console.log(friendsAge.length);

console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);

friendsAge.shift();
console.log(friendsAge);

friendsAge.unshift(10);
console.log(friendsAge);