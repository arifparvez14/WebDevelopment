class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "Kolimuddin School";
    }
}

const student1 = new Student(1, "Arif");
const student2 = new Student(2, "Sharif");
console.log(student1, student2);