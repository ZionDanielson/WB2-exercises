"use strict";

// 1. Get you known variables

//Single File:

let single = "Single";        // Single Filer
let joint = "Joint";
let basepayRate = 12.50
let payRate = 500;          // Weekly Pay
let annualIncomeRangeA = 26000;   // Annual Income Range
let annualIncomeRangeB = 50000; 
let taxRate;
let hoursWorked = 40
let weeklyGrossPay = (basepayRate * hoursWorked)
let taxWithholdings = (annualIncomeRangeA || annualIncomeRangeB) * (taxRate)
let netPay = (weeklyGrossPay * 52) - taxWithholdings



var weeklyGrossPayA = (annualIncomeRangeA / 52) * (taxRate)



//Single filers:

if       ( single ); { 

if       
         ( annualIncomeRangeA < 12000    )   { taxRate = 0.05; }
else if  
         ( annualIncomeRangeA = 24999.99 )   { taxRate = 0.10 }
else if  
         ( annualIncomeRangeA = 74999.99 )   { taxRate = 0.15 }
else     
         ( annualIncomeRangeA > 75000    );  { taxRate = 0.20 }
}


//Joint filers:

if       ( joint ); {

if       
         ( annualIncomeRangeB < 12000    )   { taxRate = 0.00 }
else if  
         ( annualIncomeRangeB = 24999.99 )   { taxRate = 0.06 }
else if  
         ( annualIncomeRangeB = 74999.99 )   { taxRate = 0.11 }
else     
         ( annualIncomeRangeB > 75000    );  { taxRate = 0.20 }
}



// 3. Display Results

// Single File Results:

console.log( "You worked " + hoursWorked + " hours this period." )
console.log( "because you earn $" + payRate + " per hour, your gross pay is " + annualIncomeRangeA + "." )
console.log( "Your filing status is " + single + "." )
console.log( "Your tax witholdings this period is $" + taxWithholdings + "." )
console.log( "Your net pay is $" + netPay )


// Joint File Results:

console.log( "You worked " + hoursWorked + " hours this period." )
console.log( "because you earn $" + payRate + " per hour, your gross pay is " + annualIncomeRangeA + "." )
console.log( "Your filing status is " + single + "." )
console.log( "Your tax witholdings this period is $" + taxWithholdings + "." )
console.log( "Your net pay is $" + netPay )

