"use strict";

// 1. Get known variables

var firstGreeting = "Good morning!";
var secondGreeting = "Good day!";
var thirdGreeting = "Good evening!";

const timeString = '03:24:45';

const [hours, minutes, seconds] = timeString.split(':').map(Number);

// 2. Calculate unknkown  3. Display results

console.log("It is currently  " + hours + ":" + minutes);   

if      (hours < 10)  {console.log(firstGreeting);}
else if (hours < 5)  {console.log(secondGreeting);}
else                  {console.log(thirdGreeting);}