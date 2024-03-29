///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const cartTotal = cart.reduce( (totalPrice,food) => totalPrice + food.price , 0)

console.log(`Total price of cart is ${cartTotal}`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE


const calcFinalPrice = (cartTotal,couponValue,tax)  =>  (cartTotal * (1+ tax)) - couponValue

let finalPrice = calcFinalPrice(cartTotal,10,0.06)



console.log(`Final Value after tax and coupon value is ${finalPrice} `);
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    
 object `customer` that has 4
    properties: 
        - name 
        - address
        - phoneNumber
        - email  
        - ispaid
        -foodDeliveryType

        name - [string] as its Name of Customer ex. 'James Bond'
        Address - [string] as its address if its for delivery'
        phoneNumber -  [string] as its not for calculatiions
        email - [string] - customers email to send promotional emails
        ispaid -[boolean] - price paid or not 
        foodDeliveryType - [string] - (values will be 'delivery','pick-up' or 'dine-in')
   

    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
     name : 'James' ,
     address : '356 south blvd , Rochester hills NY' ,
     phoneNumber : '8015555418' ,
     email : 'jamessdsfr@gmail.com',
     ispaid : true ,
     foodDeliveryType: 'delivery'

}
console.log(customer)
