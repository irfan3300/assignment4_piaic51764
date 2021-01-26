
var password =  /^[A-Za-z]\w{7,14}$/;

var password1 = prompt(" Please enter password");

if(password1 == ""){
    password1 = prompt("Please enter a valid password");
}
if(password1.length < 8){
  password1 = prompt("Please enter a valid password of atleast 8 characters");
    }
var firstChar = password1.charAt(0);
if ( firstChar == /^0-9/ ){
    alert("wrong");
}
