function CheckPas() {

    var passInput = document.getElementById("inputPass").value;
    
    var passw = /^[A-Za-z0-9]\w{7,14}$/;
    
    if (passInput.match(passw)) {
    alert("Correct Password, try another...");
    document.getElementById("result").innerHTML = "Your password is : " + passInput;
    } else {
    alert("Password does not match For character codes of a-z,A-Z & 0-9");
    document.getElementById("result").innerHTML = "Your password is : " + passInput;
    }
    }