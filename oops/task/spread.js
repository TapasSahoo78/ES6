// const data = ['tapas','sahoo'];
// const data2 = [...data,'sdc','dsfds']

// console.log(data2);

const data = [
    {
        id: 1,
        name: 'tapas',
        age: 25
    },
    {
        id: 2,
        name: 'amit',
        age: 20
    }
]


function test(...datas) {
    console.log(datas);
}


// data[0]="abc";

test(data[0], data[1], 'sourav', 'tamal', 'kunal');