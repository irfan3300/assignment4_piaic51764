var currentDate = new Date();
var timeInMs= currentDate.getTime();
var minutes = 1000 * 60;

document.write("Current date : ", currentDate);
document.write("<br>Ellapsed milliseconds since January 1, 1970 : " , timeInMs);
document.write("<br>Ellapsed minutes since January 1, 1970 : " , timeInMs/minutes);