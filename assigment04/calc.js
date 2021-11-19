const Calculator = require("./calc");

let calObj = new Calculator();

console.log("Addition :" + calObj.add(98,56));

console.log("Subtraction :" + calObj.sub(78,9));

console.log("Multiplication :" + calObj.mul(5,6));

console.log("Division :" + calObj.div(70,5));