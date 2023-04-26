"use strict"; // Tells Javascript: Variables must be declared ahead of time

// Schoology-Week 3-Workbook2-Javascript-Page 89-Exercise 1



// 1. Get known variables

// Employee A
var payRateA = 45;
var overtimeRate = 1.5;
var hoursWorkedA = 48;
var grossPayA;


// Employee B
var payRateB = 50;
var overtimeRate = 1.5;
var hoursWorkedB = 45;
var grossPayB;


// Employee C
var payRateC = 25;
var overtimeRate = 1.5;
var hoursWorkedC = 50;
var grossPayC;


// 2. Calculate the unknown

// Employee A
if ( hoursWorkedA > 40) {
    var overtimeHoursA = hoursWorkedA - 40
    grossPayA = (40 * payRateA) + (overtimeHoursA * payRateA * overtimeRate)
}


// Employee B
if ( hoursWorkedB > 40) {
    var overtimeHoursB = hoursWorkedB - 40
    grossPayB = (40 * payRateB) + (overtimeHoursB * payRateB * overtimeRate)
}


// Employee C
if ( hoursWorkedB > 40) {
    var overtimeHoursC = hoursWorkedC - 40
    grossPayC = (40 * payRateC) + (overtimeHoursC * payRateC * overtimeRate)
}


// 3. Display the results

// Employee A
console.log("EMPLOYEE A:   Gross Pay: " + grossPayA + "   Work Hours: " + hoursWorkedA + "   Base Pay Rate: " + payRateA);

// Employee B
console.log("EMPLOYEE B:   Gross Pay: " + grossPayB + "   Work Hours: " + hoursWorkedB + "   Base Pay Rate: " + payRateB);

// Employee C
console.log("EMPLOYEE C:   Gross Pay: " + grossPayC + "   Work Hours: " + hoursWorkedC + "   Base Pay Rate: " + payRateC);

