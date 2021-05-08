
const pizzasPrice = 70;
const amountOfPizzas = 3;
let pizzaSize = 'Family Pizza';
let totalPrice;
pizzaSize = false;//applying boolean value

totalPrice = 2 * pizzasPrice;//Family pizza price is double the price of normal pizza

console.log(`New pizza order: ${amountOfPizzas} \n Total cost of Order is: ${totalPrice}kr`);
pizzaSize = true;
totalPrice = 2 * totalPrice;
console.log(`New pizza order: ${amountOfPizzas} Family Size \n Total cost of Order is: ${totalPrice}kr`);


              