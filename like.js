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

//For Concatination
let product4 = new Product("p04", "Gas", "30", "6");


let products = [product1, product2, product3];

products.filter(p => p.name.startsWith('Ri')).forEach(function (t, index) {
    console.log('................ startsWith ................');
    console.log(t);
});

products.filter(p => p.name.endsWith('lt')).forEach(function (t, index) {
    console.log('............... endsWith ................');
    console.log(t);
});

products.filter(p => p.name.includes('il')).forEach(function (t, index) {
    console.log('............... Includes ................');
    console.log(t);
});

let productInfo = products.find(p => p.id === 'p03');
console.log('................ Find ................');
console.log(productInfo);


products.sort((p, q) => q.price - p.price >= 0).forEach(function (product, index) {
    console.log('................ Sort ................');
    console.log(product);
});

let concatProduct = products.concat(product4);
console.log('Concatination', concatProduct);