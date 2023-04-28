"use strict";

// 1. Get your known variables

let x1 = 4;
let y1 = 4;
let x2 = 8;
let y2 = 6;


// 2. Calculate the unknown

function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    
    let distance = Math.sqrt(dx*dx + dy*dy);
    return distance;
  }
  
let result = distance(x1, y1, x2, y2);

// 3. Display result

console.log(result);
