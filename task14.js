var currentDate = new Date();

//document.write()
var addHour = currentDate.getHours();

currentDate.setHours(addHour + 1 );
document.write("Current date : ", currentDate);
var pcDate = new Date();
document.write("<br>1 hour ago, it was ", pcDate);