//Using Function
function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}

const emp = new Employee('Tapas', 'Sahoo');
console.log(emp.fullName());


//Using Class
class Employee1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

Employee1.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}

const emp1 = new Employee1('Amit', 'Das');
console.log(emp1.fullName());
