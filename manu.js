
var up=1;
var side=1;


var pic=[["https://i.ytimg.com/vi/ACj0tJci4-M/maxresdefault.jpg","https://s-media-cache-ak0.pinimg.com/originals/bb/3c/30/bb3c302eeedb407e2ba364332745ff03.png","https://i.ytimg.com/vi/ACj0tJci4-M/maxresdefault.jpg","http://pre10.deviantart.net/4b63/th/pre/i/2015/191/9/8/mega_dragonite_by_lucas_costa-d90qupd.png"],
         ["http://static.pokemonpets.com/images/monsters-images-300-300/8147-Mega-Dragonite-Blade.png","http://orig00.deviantart.net/8b4d/f/2014/230/a/a/mega_ursaring__fan_made__by_pokeluka-d6jhu4h.png","http://img11.deviantart.net/4b68/i/2014/237/8/0/mega_shuckle_by_theangryaron-d7wlnig.png","http://img09.deviantart.net/a799/i/2015/165/4/4/mega_primal_giratina_by_hyshirey-d8x9zlp.png"],
         ["http://orig02.deviantart.net/2104/f/2015/222/4/2/mega_primal_arceus_by_hyshirey-d8y6e9g.png","http://pre15.deviantart.net/37f3/th/pre/i/2014/268/1/e/mega_primal_dialga_by_hyshirey-d80gofy.png","https://images.google.co.nz/imgres?imgurl=http%3A%2F%2Ffc06.deviantart.net%2Ffs71%2Fi%2F2012%2F190%2F0%2Fc%2Fregigigas_alternate_form_by_ironwolf09-d56nnhd.png&imgrefurl=http%3A%2F%2Fforums.pokemontabletop.com%2Ftopic%2F10038475%2F9%2F&docid=2JfBPvbflhR4YM&tbnid=5a1zdkwvGp7BaM%3A&vet=1&w=800&h=655&source=sh%2Fx%2Fim"],
["http://orig05.deviantart.net/9921/f/2014/238/0/d/mega_azelf_by_phatmon66-d7wqk0h.png","http://pre03.deviantart.net/daf8/th/pre/f/2014/238/f/a/mega_mesprit_by_phatmon66-d7wqmg6.png","http://pre11.deviantart.net/3a9c/th/pre/f/2014/238/1/5/mega_uxie_by_phatmon66-d7wqlny.png","http://pre14.deviantart.net/cc5e/th/pre/i/2013/279/6/5/mega_darkrai_by_hyshirey-d6pgh1g.png"],];


function upz() {up=up+1;
       		
               document.getElementById("poke").src = pic[up][side];};
           
function downz() {up=up-1;
                  document.getElementById("poke").src = pic[up][side];};
function leftz() {side=side-1;
                 
                   document.getElementById("poke").src = pic[up][side];};
function rightz() {side=side+1;
       		 
                       document.getElementById("poke").src = pic[up][side];};
