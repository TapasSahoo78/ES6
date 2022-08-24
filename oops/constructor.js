// class Employee {
//     constructor() {
//         this.id = 101;
//         this.name = "Tapas";
//     }
// }

// const emp = new Employee();
// console.log(emp);

class Company {
    constructor(age) {
        this.company = "GPS Technology";
        this.age = age;
    }
}

class Employee extends Company {
    constructor(age) {
        super(age);
        this.id = 101;
        this.name = 'Tapas Sahoo';
    }
}

const emp = new Employee(20);
console.log(emp);