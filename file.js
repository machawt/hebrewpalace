
var north=0;
var south=0;
var west=0;
var east=0;
var troll=0;
var score=0;
var luck=1;
var position = "Central Room";
var worldsize=3;
var one = ["","","״ ,"אבר אבס אבן אבל אבה אבד אבב ", "Apple", "Mango"];
var two =["",""];

 

function myFunction01() {
if (north > worldsize){
return;
}
if (south < 1) {
        north = north + 1;
}else {
        south = south - 1;
}
myposition();
        document.getElementById("demo").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position + "<br>" + "Score: " + score;
}

 

function myFunction02() {
if (west > worldsize){
return;
}
if (east < 1) {
        west = west + 1;
}else{
        east = east - 1;
}
myposition();
        document.getElementById("demo").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position + "<br>" + "Score: " + score;
}

function myFunction03() {

if (east > worldsize){
return;
}
if (west < 1) {
        east = east + 1;
}else{
        west = west - 1;
}
myposition();
        document.getElementById("demo").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position + "<br>" + "Score: " + score;
}

 

function myFunction04() {
if (south > worldsize){
return;
}
if (north > 0) {
        north = north - 1;
}else{
south = south + 1;
}
myposition();
        document.getElementById("demo").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position + "<br>" + "Score: " + score;
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

 

//

else if (south == 1 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_19.jpg";
}
else if (south == 1 && west == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_20.jpg";
}
else if (south == 1 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_21.jpg";
}
else if (south == 1 && east == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_22.jpg";
}
else if (south == 1 && east == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_23.jpg";
}
else if (south == 1 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_24.jpg";
}

//

else if (south == 2 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_25.jpg";
}
else if (south == 2 && west == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_26.jpg";
}
else if (south == 2 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_27.jpg";
}
else if (south == 2 && east == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_28.jpg";
}

else if (south == 2 && east == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_29.jpg";
}
else if (south == 2 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_30.jpg";
}

//

else if (south == 3 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_31.jpg";
}
else if (south == 3 && west == 2){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_32.jpg";
}
else if (south == 3 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_33.jpg";
}
else if (south == 3 && east == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_34.jpg";
}
else if (south == 3 && east == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_35.jpg";
}
else if (south == 3 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_36.jpg";
}

//

else if (south == 0 && west == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_37.jpg";
}
else if (south == 0 && west == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_38.jpg";
}
else if (south == 0 && west == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_39.jpg";
}
else if (south == 0 && east == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_40.jpg";
}
else if (west == 0 && east == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_41.jpg";
}
else if (west == 0 && east == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_42.jpg";
}

//

else if (west == 0 && north == 3){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_43.jpg";
}
else if (west == 0 && north == 2){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_44.jpg";
}
else if (west == 0 && north == 1){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_45.jpg";
}
else if (west == 0 && south == 1){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_46.jpg";
}
else if (west == 0 && south == 2){
position = "Cat Freak Out!";
image.src = "http://www.noonco.com/rc/java_art/cat_47.jpg";
}
else if (west == 0 && south == 3){
position = "Cat Freak Out!";
 image.src = "http://www.noonco.com/rc/java_art/cat_48.jpg";
}
else if (west == 0 && north == 0 && east == 0 && south == 0){
position = "Cat Freak Out!";
    image.src = "http://www.noonco.com/rc/java_art/picture_doorway.jpg";
}
else{
position = "lost";
image.src = "http://www.noonco.com/rc/java_art/picture_field.jpg";
}
}
