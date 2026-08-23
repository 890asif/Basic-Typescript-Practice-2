"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product1 = {
    title: "Laptop",
    price: 55000
};
const product2 = {
    title: "Mouse",
    price: 500,
    inStock: true
};
const getPrice = (product) => {
    return product.price;
};
console.log(getPrice(product1));
console.log(getPrice(product2));
//# sourceMappingURL=problem-3.js.map