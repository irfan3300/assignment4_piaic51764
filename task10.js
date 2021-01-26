var number ;
number = parseFloat(prompt(" Enter a number in decimal format"));

var round = parseInt(prompt("<br>Enter the number to which it should be round off"));
document.write(" Input :", number);
var num = number.toFixed(round);
document.write(" <br>Output :", num);