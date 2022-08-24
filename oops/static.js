// class Employee {

//     static display() {
//         console.log('Static function');
//     }

//     static display() {
//         console.log('Static function Again');
//     }
// }
// console.log(Employee.display());//Static function again


// class Test {
//     constructor() {
//         console.log(Test.display());
//         console.log(this.constructor.display());
//     }

//     static display() {
//         return "static method is invoked"
//     }
// }
// var t = new Test();


class Car {
    constructor(brand) {
        this.carname = brand;
    }
    static hello() {  // static method
        return "Hello!!";
    }
}

mycar = new Car("Ford");
console.log(Car.hello());


// Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.
