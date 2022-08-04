
// function myData() {
//     let a = 10;

//     {
//         a = 20;
//         console.warn(`Inside : ${a}`);
//     }

//     console.warn(`Outside : ${a}`);
// }


// myData();


let data = {
    name: 'Tapas Sahoo',
    email: 'tapas@elphill.com',
    age: 25,
    displayInfo: function () {
        console.log(`${data.name}. your email id : ${data.email} and ${data.age}`);
    }
}

data.displayInfo();
console.warn(`Your name : ${data.name}`);
