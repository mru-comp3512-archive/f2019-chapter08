/* code goes here */

//let amount = 0;
const tax = 0.20;

function calculateTotal(price, quantity) {
    let amount = price * quantity;    
    amount = amount - (amount * tax);
    return amount;
}

let t1 = calculateTotal(15,2);
console.log(t1);
console.log(tax);
