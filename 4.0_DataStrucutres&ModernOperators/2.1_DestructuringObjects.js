const product = {
    label : 'Red notebook',
    price :3,
    stock :201,
    salesPrice:undefined
}


const {label : productLabel,stock,rating=5 }=product;
console.log(productLabel);
console.log(stock);
console.log(rating);
