// Rentals 

var people = 38
var vanseatSpace= 15 

// Vans Needed 

var vansneeded = Math.ceil(people /15);

console.log(vansneeded);

// Van Cost
var vanCost = 250
var vanTotal = vansneeded * vanCost;

// Pay per person 

var perpersonPayment = vanTotal / people;

console.log(perpersonPayment.toFixed(2))

console.log(perpersonPayment * people)

console.log(vanTotal)
