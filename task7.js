var string1 =  " The quick brown fox jumps over the lazy dog";
var string2 = " The quick brown fox jumps over the lazy dog";
document.write("Text:", string1);
var counter= 0;

for (var i = 0; i < string1.length; i++) {
    if (string1.slice(i, i + 3) === "The") {
     string1 = string1.slice(0, i) + "A" + string1.slice(i + 3);
     counter++;
    }
     }

     for (var i = 0; i < string1.length; i++) {
        if (string1.slice(i, i + 3) === "the") {
         string1 = string1.slice(0, i) + "a" + string1.slice(i + 3);
         counter++;
        }
         }
    
    
     document.write("<br>There are " + counter + " occurences of word 'the'");