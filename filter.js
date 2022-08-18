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
// console.log(product1.toString(), product2.total(), product3.total());

let products = [product1, product2, product3];
// console.log(products);

let result = products.filter(p => p.price > 10);
//console.log(result);

result.forEach(function (res, index) {
    console.log(res.toString());
    console.log('Total', res.total());
});