
const myFunction = async () => {
    const tapas = new Promise((resolve, reject) => {
        str1 = "tapas";
        str2 = "tapas";
        if (str1 == str2) {
            resolve("resolve");
        } else {
            reject("reject");
        }
    })
    return tapas;
}


// const fun = ()=>{
// console.log(myFunction());
// }

// const myFunction = async()=>{
//     console.log(await fun());
// }

// myFunction();

// fun();
const myFunction2 = async () => {
    let data = await myFunction();
    console.log(`My Data : ${data}`);
}


myFunction2();