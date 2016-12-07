
var up=0;

var side=0;


var score=0;

var position = "Central Room";
var worldsize=23;
var one = ["","","״ ,"אבר אבס אבן אבל אבה אבד אבב];
var two =["",""];

 function myposition(){document.getElementById("demo").innerHTML =
                      "Height: " + up + "   Side: " + side + "<br>" + "Location: " + position + "<br>" + "Score: " + score;}
function correct () {alert("Very Clever, You are correct");}


function myFunction01() {
if (up > worldsize){return;}else {up = up + 1;}}


 

function myFunction02() {if (side > worldsize){return;}
else{side = side + 1;}}




function myFunction03() {

if (side > worldsize){
return;
else{
        side = side - 1;

myposition();
        document.getElementById("demo").innerHTML =
         "Height: " + up + "   Side: " + side + "<br>" + "Location: " + position + "<br>" + "Score: " + score;
}


 

function myFunction04() {
if (height > worldsize){
return;
else{
height = height - 1;

myposition();
        document.getElementById("demo").innerHTML =
         "Height: " + up + "   Side: " + side + "<br>" + "Location: " + position + "<br>" + "Score: " + score;
}



function myposition() {
var image = document.getElementById('myImage');

troll = Math.floor((Math.random() * 25) + 1);
if (troll == 11){
position = "The Troll Wins!  Try Again!";
score = 0;
image.src = "http://www.noonco.com/rc/java_art/troll_01.jpg";
return;
}else{
score = score + troll;}

if (score >1000 && luck == 1){
position = "You Win!  But, keep clicking if you want to press your luck!";
luck = 2;
image.src = "http://www.noonco.com/rc/java_art/win.jpg";
return;}


if (north == 3 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_01.jpg";
}
else if (north == 3 && west == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_02.jpg";
}
else if (north == 3 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_03.jpg";
}
else if (north == 3 && east == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_04.jpg";
}

else if (north == 3 && east == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_05.jpg";
}
else if (north == 3 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_06.jpg";
}

//

else if (north == 2 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_07.jpg";
}
else if (north == 2 && west == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_08.jpg";
}
else if (north == 2 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_09.jpg";
}
else if (north == 2 && east == 1){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_10.jpg";
}
else if (north == 2 && east == 2){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_11.jpg";
}
else if (north == 2 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_12.jpg";
}

 

//

else if (north == 1 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_13.jpg";

}

else if (north == 1 && west == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_14.jpg";
}
else if (north == 1 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_15.jpg";
}
else if (north == 1 && east == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_16.jpg";
}
else if (north == 1 && east == 2){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_17.jpg";
}

else if (north == 1 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_18.jpg";
}

  
