
/** The forEach method doesn't return anything.Returns undefined*/
chars = ['Hello', 'world!!!'];

var retVal = chars.forEach(function (word) {
    console.log("Saving to db: " + word);
})

chars['0'] = 'dfesf';

console.log(chars);
console.log('............................');
console.log(retVal);



/**The map method returns a new array by applying the callback function on each element of an array.
 * Returns new array with transformed elements, leaving back original array unchanged.
 */
// chars = ['Hello', 'world!!!'];

// var lengths = chars.map(function (word) {
//     console.log('map data:', word);
//     return word.length;
// })

// chars['0'] = 'dfesf';

// console.log(chars);
// console.log('............................');
// console.log(lengths) //[5,8]
