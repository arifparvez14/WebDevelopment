class Parent{
    constructor(name){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getName() {
        return this.name +" "+ this.fatherName;    
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);
console.log(baby.getName());