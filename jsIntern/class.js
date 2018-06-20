class Person {

    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    intro(){
        return `Hi, I am ${this.name}.`;
    }
}

let bari = new Person("Bari", 22);
console.log(bari.getName(), bari.getAge());
console.log(bari.intro());