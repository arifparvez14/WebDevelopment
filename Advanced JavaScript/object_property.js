const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Manaaaaaaaa"},
    {id: 41, name: "Moyouri"},
    {id: 71, name: "DeepJol"}
];

const names = [];
for (let i = 0; i < students.length; i++){
    const name = students[i].name;
    names.push(name);
}
console.log(names);

/*--------------- map ------------*/
const actorNames = students.map( s => s.name);
console.log(actorNames);
const ids = students.map(s => s.id);
console.log(ids);

/*--------------- filter ------------*/
const bigger = students.filter( s => s.id > 41);
console.log(bigger);

/*--------------- find ------------*/
const bigger2 = students.find( s => s.id > 41);
console.log(bigger2);