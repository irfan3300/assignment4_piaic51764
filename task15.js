var age ;
var currentDate = new Date();
age = prompt("Enter your age:");

var years = currentDate.getFullYear();
console.log(years);
document.write(" Your age is ",age);
document.write("<br>Your birth year is ", years - age);
