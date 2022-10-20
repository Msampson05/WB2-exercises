// Tax assignment 

var taxRate;   // Tax rate for single
var filingStatus = "single";  // Tax rate for joint 
var grossPay;   // To set value for weekly pay
var hoursWorked = 45; //Number of hours 
var payRate= 25.00;  //Hourly pay rate
var netPay;
var annualIncomeRange = (hoursWorked) * (payRate) * 52 ;

var grossPay = (hoursWorked) * ( payRate); // weekly payment

if ( filingStatus = "single");
 {
  if ( annualIncomeRange < 12000)
  {
    taxRate = 0.05;
  } 
  else if (annualIncomeRange >= 12000 && annualIncomeRange < 25000)
  {
    taxRate = 0.10;
  }
  else if (annualIncomeRange >= 25000 && annualIncomeRange < 75000)
  {
    taxRate = 0.15;
  }
  else if (annualIncomeRange> 75000)
  {
    taxRate = 0.20;
  }
    
    netPay = annualIncomeRange - taxRate;
 }
 if (filingStatus = "Joint");
    {
        if ( annualIncomeRange < 12000)
        {
          taxRate = 0.00;
        } 

        else if (annualIncomeRange >= 12000 && annualIncomeRange < 25000)
        {
          taxRate = 0.06;
        }
        else if (annualIncomeRange >= 25000 && annualIncomeRange < 75000)
        {
          taxRate = 0.11;
          netPay = annualIncomeRange - taxRate;
        }
        else if (annualIncomeRange > 75000)
        {
          taxRate = 0.20;
          netPay = annualIncomeRange - taxRate;
        }
       
 }



console.log("You worked " + hoursWorked + " hours this period. Because you earn  $" + payRate + " per hour, your gross pay is $" + annualIncomeRange 
+ " Your filing status is " + filingStatus + " Your tax withholdings this period is " + taxRate + " Your net pay is " + parseInt(netPay))