var faker = require("faker");
var prices = [];
var productNames = [];
for(var i = 0; i<10; i++){
    var price = "$"+faker.finance.amount();
    prices.push(price);
    var name = faker.commerce.productName();
    productNames.push(name);
}
console.log("WELCOME TO DA SHOP BOI");
for(var i = 0; i<10; i++){
    console.log(productNames[i]+" - "+prices[i]);
}