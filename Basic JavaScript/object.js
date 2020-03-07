var student = {id:121, photo:1745, name: "Arif"};
var student2 = {id: 122, photo: 1746, name:"Sharif"};

console.log(student);
console.log(student2);

var id = student.id;
console.log(id);

var photo = student["photo"];
console.log(photo);

var name = "name";
var exactName = student[name];
console.log(exactName);

student2.photo = 1512;
student2["photo"] = 9987;

student2.cinema = "Agni 22"
console.log(student2);
