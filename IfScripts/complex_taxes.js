// Tax assignment 

var taxRate;   // Tax rate for single
var filingStatus = "single";  // Tax rate for joint 
var grossPay;   // To set value for weekly pay
var hoursWorked = 45; //Number of hours 
var payRate= 25.00;  //Hourly pay rate
var netPay;
var annualIncomeRange = ((hoursWorked) * (payRate)) * 52 ;

var grossPay = (hoursWorked) * ( payRate); // weekly payment


if ( filingStatus = "single");
 {
    taxRate = (15/100)/grossPay;
    netPay = grossPay - taxRate;
 }
 if (filingStatus = "Joint");
 {

 }



console.log("You worked " + hoursWorked + " hours this period. Because you earn  $" + payRate + " per hour, your gross pay is $" + grossPay 
+ " Your filing status is " + filingStatus + " Your tax withholdings this period is " + taxRate + " Your net pay is " + parseInt(netPay))