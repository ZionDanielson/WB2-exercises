"use strict";

// 1. Get known variables

let a = 25;
let b = 13;
let c = 19;

// 2. Calculate the unknown

// Find the smallest number
let smallest;
if (a < b) {
  if (a < c) {
    smallest = a;
  } 
  else {
    smallest = c;
  }
} 
else {
  if (b < c) {
    smallest = b;
  } 
  else {
    smallest = c;
  }
}


// Find the largest number
let largest;
if (a > b) {
  if (a > c) {
    largest = a;
  } 
  else {
    largest = c;
  }
} 
else {
  if (b > c) {
    largest = b;
  } 
    else {
    largest = c;
  }
}


// 3. Display Results

console.log("The smallest number is: " + smallest);
console.log("The largest number is: " + largest);
