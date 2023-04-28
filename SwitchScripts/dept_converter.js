"use strict";

// 1. Get known variables

let departmentNum = 10;
let departmentName;

// 2. Calculate the unknown

switch  (departmentNum) {
    case 1:
        departmentName = "Marketing"
        break;
    case 5:
        departmentName = "Human Resources"
        break;
    case 10:
        departmentName = "Accounting"
        break;
    case 12:
        departmentName = "Legal"
        break;
    case 18:
        departmentName = "IT"
        break;
    case 20:
        departmentName = "Customer Relations"
        break;
    default:
        departmentName = "<unknown>";
        break;
}

console.log(departmentName)