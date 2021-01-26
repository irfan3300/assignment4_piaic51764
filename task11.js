var num;

num = prompt("Please enter a number");
document.write("Input: ", num);
var numLength = num.length;
var digits = [];
var sum = 0;
for (var i = 0; i< numLength; i++){
digits[i] = parseInt(num.charAt(i));
sum = sum + digits[i];
}
var mean = sum / numLength;
document.write("<br>Mean of digits of input number " + num + " is ", mean);