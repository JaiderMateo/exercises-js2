/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes do we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
//1:
var product3 = {
  id: 3,
  name: "Smart TV",
  price: 900.99,
  stock: 5
};
var product4 = {
  id: 4,
  name: "Laptop ASUS",
  price: 650.99,
  stock: 3
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};


//3:
function addToShoppingCart(id){
  let x = products.find((i)=>i.id == id)
  //6
  if(x.stock < 1){
    console.log("sorry, we don't have enough stock to make this move")
  }else{
    shoppingCart.totalPrice += x.price;
    shoppingCart.selectedProducts.push(x);
  }
}

//4:
 function removeFromShoppingCart(id){
   let x = shoppingCart.selectedProducts.findIndex((i)=>i.id == id)
   shoppingCart.totalPrice -= shoppingCart.selectedProducts[x].price;
   delete shoppingCart.selectedProducts[x];
 }


 //5:
 function shop(){
   shoppingCart.selectedProducts.map((i)=>{
    //  products.map((j)=>{
    //    if(i.id == j.id){
    //      j.stock --;
    //    }
    //  })
    // the following is more compact and readable
    products[products.findIndex((j)=>j.id = i.id)].stock--;
    })
    shoppingCart.selectedProducts = [];
    shoppingCart.totalPrice = 0;
 }

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));