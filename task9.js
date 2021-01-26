var string1 = "<p><strong><em>Only print this</em></strong></p>";
document.write("Original Code with HTML tags : " + string1);
var string2 = string1.replace(/(<([^>]+)>)/gi, "");
document.write("Stripped Text : " + string2);
console.log(string2);