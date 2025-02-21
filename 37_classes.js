class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);

    }
    static generateId() {
        return "sp22-bce-9000"
    }
}

let hamza = new User("hamza", 45)
console.log(hamza.age);
hamza.printName()
// console.log(hamza.generateId()); //static method can not be accessed


class Teacher extends User {
    constructor(name, age, salary, dpt) {
        super(name, age);
        this.salary = salary;
        this.dpt = dpt;
    }
}

let sirNohman = new Teacher("nohman khan", 56, 4566666, "cs")
console.log(sirNohman);


