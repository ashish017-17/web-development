let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 },
];
let totalPrice = 0;
cart.forEach(function(product){
    totalPrice += product.price;    
});
console.log("Total Price: " + totalPrice);