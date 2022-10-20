// Greeting Excercises

var timePerHour = 1500; //Set value for time per hour
var Greeting;        // Set value for greeting


// Greeting to Morning
if (timePerHour < 1000)
 {
    timePerHour= 750
 Greeting =" Good Morning !"
}
// Greeting for Good Day !
else if (timePerHour <= 1600) {
    
    timePerHour = 1500
    Greeting = "Good Day ! ";
} 
else if (timePerHour > 1700  )
 {
    timePerHour = 1900
 Greeting= "Good Evening ! ";
} 
console.log(Greeting)