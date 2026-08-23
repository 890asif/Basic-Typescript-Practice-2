interface Product  {
    title: string
    price:number
    inStock?: boolean
}

const product1:Product = {
    title: "Laptop",
    price: 55000
}

const product2:Product = {
    title: "Mouse",
    price: 500,
    inStock: true
}

const getPrice = (product:Product):number=>{

    return product.price
 
}
console.log(getPrice(product1))
console.log(getPrice(product2))