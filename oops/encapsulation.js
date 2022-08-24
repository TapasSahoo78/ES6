class Employee {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }
}

const emp = new Employee();
emp.setName('Tapas');
emp.setMarks(70);

console.log(emp.getName());
console.log('...................');
console.log(emp.getMarks());