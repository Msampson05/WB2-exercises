//IfScripts Excersise
var payRate;  // Value for payrate
var hoursWorked = 45; // Value for hours worked 
var grossPay; // Value for weekly pay 

var otpay = (hoursWorked- 40) * (1.5 * payRate); // overtime payment


// Employee worked Under 40 hours 
  if (hoursWorked < 40);      // Number of hours employee worked
  {
    payRate = 15.00;
    grossPay = hoursWorked * payRate;   //Trial and error
                
  }
// Employee worked exactly 40 hours 
 if( hoursWorked == 40 );
{
      payRate = 15.00;
    grossPay = hoursWorked * payRate;       // Trial and error 
      
}

// Employee worked Over 40 hours 
 if ( hoursWorked > 40 );
{
     payRate = 17.50;
    grossPay = payRate * hoursWorked

     
}

//Output tester 

console.log("This employee has worked for " + hoursWorked  +" hours and received a payment of $" + grossPay )
