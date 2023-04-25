"use strict";

var numPPLoneVan = 15
var numPPLonTour = 38

var numVansNeeded = ( numPPLonTour / numPPLoneVan )

console.log( numVansNeeded )

var vanCost = 250

var totalVanRentCost = ( vanCost * numVansNeeded)

console.log(totalVanRentCost)

var costPerPerson = (totalVanRentCost / numPPLonTour)

console.log(costPerPerson)