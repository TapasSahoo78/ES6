// // const myData = async () => {
// //     console.log("testing");
// // }


// // try {
// //     myData();
// // } catch (error) {
// //     console.log(error);
// // } finally {
// //     console.log('We do cleanup here');
// // }



// async function thisThrows() {
//     // throw new Error("Thrown from thisThrows()");
//     //let data = await 30;
//     // setTimeout(() => {
//     //     let data = 20;
//     // }, 2000)
//     console.log(data);
// }

// async function myFunctionThatCatches() {
//     try {
//         return await thisThrows(); // <-- Notice we added here the "await" keyword.
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log('We do cleanup here');
//     }
//     return "Nothing found";
// }

// thisThrows();


// // function myFunctionThatCatches() {
// //     return thisThrows();
// // }


// // async function run() {
// //     const myValue = await myFunctionThatCatches();
// //     console.log(myValue);
// // }

// // run();




const myData = async() =>{
try {
   let a = 10;
   console.log("🚀 ~ file: mypractice.js ~ line 57 ~ myData ~ a", a)
} catch (error) {
    throw error.message;
}finally{
    console.log("testing");
}
}


myData();