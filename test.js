var up=0;
var side=0;
var row=["base","a", "b","c","d", "e","f","g", "h","j","k", "l","m","n", "o","p","q", "r","s","t", "u","v","w", "x","z"];
function upz() {up=up-1;
       		 document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;
               document.getElementById("line1").innerHTML =
        "X" + row[up];
               };
function downz() {up=up-1;
document.getElementById("line1").innerHTML =
        "X" + row[up][side];
                  document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;};
function leftz() {side=side-1;
                  document.getElementById("line1").innerHTML =
        "X" + row[up][side];
       		 document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;};
function rightz() {side=side+1;
                   document.getElementById("line1").innerHTML =
        "X" + row[up][side];
       		 document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;};





