var up=1;
var side=1;
var heb1=[["את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","אא"],["את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","אא"]];
var heb=[["אא","אב"],["בא","בב"]];
function upz() {up=up+1;
       		 document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;
               document.getElementById("line1").innerHTML =
        "X" + heb[up][side];
               };
function downz() {up=up-1;
document.getElementById("line2").innerHTML =
              "First Letter" + up+"Second Letter"+side; 
                   document.getElementById("line1").innerHTML =
        "X" + heb[up][side];};

function leftz() {side=side-1;
                  document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;
                     document.getElementById("line1").innerHTML =
        "X" + heb[up][side];};
function rightz() {side=side+1;
       		 document.getElementById("line2").innerHTML =
        "First Letter" + up+"Second Letter"+side ;
                       document.getElementById("line1").innerHTML =
        "X" + heb[up][side];};





