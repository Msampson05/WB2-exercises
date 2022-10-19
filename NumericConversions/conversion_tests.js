// Description: This script tests various numeric
// conversion techniques
// Author: Megan Sampson 

// ParseInt
var aInt = " 101.1 ";      // This is a string object 
var bInt = "55";           // This is a string object 
var cInt = "402 Stevens";  // This is a string object
var dInt = "Number 5 ";    // This is a string object

aInt = parseInt(aInt);      // Now a number object 
bInt = parseInt(bInt);      // Now a number object 
cInt = parseInt(cInt);      // Now a number object 
dInt = parseInt(dInt);       // value is NaN
if (isNaN(dInt)) {
    // tell user about the problem
} 

// Outut For Int
console.log("ParseInt:")
console.log(aInt);
console.log(bInt);
console.log(cInt);
console.log(dInt);


// ParseFloat
var aFloat = " 101.1 ";      // This is a string object 
var bFloat = "55";           // This is a string object 
var cFloat = "402 Stevens";  // This is a string object
var dFloat = "Number 5 ";    // This is a string object

aFloat= parseFloat(aFloat);    // Now a number object
bFloat= parseFloat(bFloat);    // Now a number object
cFloat= parseFloat(cFloat);    // Now a number object
dFloat= parseFloat(dFloat);    // Now a number object


// Outut For Float
console.log("ParseFloat :")
console.log(aFloat);
console.log(bFloat);
console.log(cFloat);
console.log(dFloat);

// Number
var aNum = " 101.1 ";      // This is a string object 
var bNum= "55";           // This is a string object 
var cNum = "402 Stevens";  // This is a string object
var dNum = "Number 5 ";    // This is a string object

aNum = Number(aNum);         // now it references a Number object
bNum = Number(bNum);         // now it references a Number object
cNum = Number(cNum);         // now it references a Number object
dNum = Number(dNum)          // now it references a Number object

// Output 
console.log("Number :");
console.log(aNum);
console.log(bNum);
console.log(cNum);
console.log(dNum);

// Unary
var aUnary = " 101.1 ";      // This is a string object 
var bUnary = "55";           // This is a string object 
var cUnary = "402 Stevens";  // This is a string object
var dUnary = "Number 5 ";    // This is a string object

aUnary = +aUnary;               // now a number object
bUnary = +bUnary;               // now a number object
cUnary = +cUnary;               // now a number object
dUnary = +dUnary;               // now a number object

//Output 

console.log("Unary :");
console.log(aUnary);
console.log(bUnary);
console.log(cUnary);
console.log(dUnary);
