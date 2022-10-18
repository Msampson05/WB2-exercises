var lengthinFeet =20;
var widthinFeet= 40;
var roomsqaureFootage = lengthinFeet * widthinFeet;

var squarefootageRequired = roomsqaureFootage + (roomsqaureFootage * 0.1);

console.log(squarefootageRequired);
console.log(roomsqaureFootage);

var tilebox= Math.ceil(squarefootageRequired /12);

console.log(tilebox);
