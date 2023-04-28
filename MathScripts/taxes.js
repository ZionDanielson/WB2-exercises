"use strict";

//Get all of the known values.
var taxRate = 0.23;
var salary = 10000;

//Calculate the unknown values.
var withheldAmount = (salary * taxRate);
var amountOfCheck = salary - withheldAmount;

//Display the result.
console.log(salary)
console.log(withheldAmount)
console.log(amountOfCheck)

var monthlyIncome = 4000
var taxRate = 0.23

var federalTax = ( monthlyIncome * taxRate )

console.log(federalTax)