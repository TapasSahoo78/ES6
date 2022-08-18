class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return 'Id:' + this.id + '\nName:' + this.name + '\nPrice:' + this.price + '\nQuantity:' + this.quantity;
    }
    total() {
        return this.price * this.quantity;
    }
}

let product1 = new Product("p01", "Salt", "10", "3");
let product2 = new Product("p02", "Rice", "15", "4");
let product3 = new Product("p03", "Oil", "20", "5");

console.log(product1.total());
console.log(product2.total());
console.log(product3.total());

console.log('...........................................................');


//For Concatination
let product4 = new Product("p04", "Gas", "30", "6");

let products = [product1, product2, product3];


// let result1 = products.map(p => p.price * p.quantity);//[ 30, 60, 100 ]

let result1 = products.map(p => p.price * p.quantity).reduce((t, q) => t + q);

let result2 = products.filter(p => p.price > 10)
    .map(m => m.price * m.quantity)
    .reduce((t, q) => t + q);

console.log(result1);
console.log('..........................................................');
console.log(result2);