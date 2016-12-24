
var up=1;
var side=1;
var flag=1;
//var heb1=["א"את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","],["בת","בשׁ","בר","בק","בפ","בע","בס", "בנ","במ","בל", "בכ","בי","בט", "בח","בז","בו", "בה","בד","בג", "בב","בא"];

var pic=[["https://i.ytimg.com/vi/ACj0tJci4-M/maxresdefault.jpg",],[],[],[],
         [],
         ];


function shw() {flag=0;document.getElementById("show").innerHTML = pic[up][side];};

function upz() {up=up+1;
       		
               document.getElementById("show").innerHTML =
        " " + up+side;};
           
function downz() {up=up-1;
                   document.getElementById("show").innerHTML =
        " " + up+side;};

function leftz() {side=side-1;
                 
                     document.getElementById("show").innerHTML =
     " " + up+side;};
function rightz() {side=side+1;
       		 
                       document.getElementById("show").innerHTML =
     " " + up+side;};

