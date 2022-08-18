const age = 20;
const name = 'Tapas';
const status = true;
const today = new Date();

console.log(age);
console.log(name);
console.log(status);
console.log(today);

//age = 30; // TypeError: Assignment to constant variable

const x1 = 1;
if (x1 == 1) {
    const x2 = 2;
    console.log(x1);
}

console.log(x2);//ReferenceError: x2 is not defined
