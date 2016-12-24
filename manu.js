
var up=1;
var side=1;
var flag=1;
//var heb1=["א"את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","],["בת","בשׁ","בר","בק","בפ","בע","בס", "בנ","במ","בל", "בכ","בי","בט", "בח","בז","בו", "בה","בד","בג", "בב","בא"];

var pic=[["https://i.ytimg.com/vi/ACj0tJci4-M/maxresdefault.jpg","https://s-media-cache-ak0.pinimg.com/originals/bb/3c/30/bb3c302eeedb407e2ba364332745ff03.png","https://i.ytimg.com/vi/ACj0tJci4-M/maxresdefault.jpg","http://pre10.deviantart.net/4b63/th/pre/i/2015/191/9/8/mega_dragonite_by_lucas_costa-d90qupd.png"],
         ["http://static.pokemonpets.com/images/monsters-images-300-300/8147-Mega-Dragonite-Blade.png","http://orig00.deviantart.net/8b4d/f/2014/230/a/a/mega_ursaring__fan_made__by_pokeluka-d6jhu4h.png","http://img11.deviantart.net/4b68/i/2014/237/8/0/mega_shuckle_by_theangryaron-d7wlnig.png","http://img09.deviantart.net/a799/i/2015/165/4/4/mega_primal_giratina_by_hyshirey-d8x9zlp.png"],
         ];


function shw() {flag=0;document.getElementById("poke").src = pic[up][side];};

function upz() {up=up+1;
       		
               document.getElementById("poke").src = pic[up][side];};
           
function downz() {up=up-1;
                  document.getElementById("poke").src = pic[up][side];};
function leftz() {side=side-1;
                 
                   document.getElementById("poke").src = pic[up][side];};
function rightz() {side=side+1;
       		 
                       document.getElementById("poke").src = pic[up][side];};
