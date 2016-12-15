var up=1;
var side=1;
var flag=1;
//var heb1=["א"את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","],["בת","בשׁ","בר","בק","בפ","בע","בס", "בנ","במ","בל", "בכ","בי","בט", "בח","בז","בו", "בה","בד","בג", "בב","בא"];

var heb=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
         ["a","aa","אבב אבד אבה אבל אבן אבר ","ag","אדם אדן אדר","aאהב","av","az","ax","at","ay","ak","al","am","אנש","as","ai","ap","ac","aq","ar","אשר","ao"],
         ["b","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["g","ga","gb","gg","gd","gh","gv","gz","gx","gt","gy","gk","gl","gm","gn","gs","gi","gp","ac","gq","gr","gw","go"],
         ["d","da","db","dg","dd","dh","dv","dz","dx","dt","dy","dk","dl","dm","dn","ds","di","dp","ac","dq","dr","dw","do"],
         ["h","ha","hb","hg","hd","hh","hv","hz","hx","ht","hy","hk","הלך","hm","hn","hs","hi","hp","ac","hq","hr","hw","ho"],
         ["v","va","vb","vg","vd","vh","vv","vz","vx","vt","vy","vk","vl","vm","vn","vs","vi","vp","ac","vq","vr","vw","vo"],
         ["z","za","zb","zg","zd","zh","zv","zz","zx","zt","zy","zk","zl","zm","zn","zs","zi","zp","ac","zq","zr","zw","zo"],
         ["x","xa","xb","xg","xd","xh","xv","xz","xx","xt","xy","xk","xl","xm","xn","xs","xi","xp","ac","xq","xr","xw","xo"],
         ["t","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["y","a","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","יעץ","bp","ac","bq","br","bw","bo"],
         ["k","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["l","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["m","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["n","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["s","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["i","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["p","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
          ["c","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["q","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["r","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","רשע","bo"],
         ["w","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["o","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ];
var eng=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
         ["a","aa","harvest destroy consent mourn stone pinions/strength","ag","ad","ah","av","az","ax","at","ay","ak","al","am","אנש","as","ai","ap","ac","aq","ar","אשר","ao"],
         ["b","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["g","ga","gb","gg","gd","gh","gv","gz","gx","gt","gy","gk","gl","gm","gn","gs","gi","gp","ac","gq","gr","gw","go"],
         ["d","da","db","dg","dd","dh","dv","dz","dx","dt","dy","dk","dl","dm","dn","ds","di","dp","ac","dq","dr","dw","do"],
         ["h","ha","hb","hg","hd","hh","hv","hz","hx","ht","hy","hk","הלך","hm","hn","hs","hi","hp","ac","hq","hr","hw","ho"],
         ["v","va","vb","vg","vd","vh","vv","vz","vx","vt","vy","vk","vl","vm","vn","vs","vi","vp","ac","vq","vr","vw","vo"],
         ["z","za","zb","zg","zd","zh","zv","zz","zx","zt","zy","zk","zl","zm","zn","zs","zi","zp","ac","zq","zr","zw","zo"],
         ["x","xa","xb","xg","xd","xh","xv","xz","xx","xt","xy","xk","xl","xm","xn","xs","xi","xp","ac","xq","xr","xw","xo"],
         ["t","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["y","a","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","יעץ","bp","ac","bq","br","bw","bo"],
         ["k","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["l","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["m","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["n","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["s","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["i","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["p","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
          ["c","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["q","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["r","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","רשע","bo"],
         ["w","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["o","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ];
var num=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
         ["a","0","2","ag","ad","ah","av","az","ax","at","ay","ak","al","am","אנש","as","ai","ap","ac","aq","ar","אשר","ao"],
         ["b","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["g","ga","gb","gg","gd","gh","gv","gz","gx","gt","gy","gk","gl","gm","gn","gs","gi","gp","ac","gq","gr","gw","go"],
         ["d","da","db","dg","dd","dh","dv","dz","dx","dt","dy","dk","dl","dm","dn","ds","di","dp","ac","dq","dr","dw","do"],
         ["h","ha","hb","hg","hd","hh","hv","hz","hx","ht","hy","hk","הלך","hm","hn","hs","hi","hp","ac","hq","hr","hw","ho"],
         ["v","va","vb","vg","vd","vh","vv","vz","vx","vt","vy","vk","vl","vm","vn","vs","vi","vp","ac","vq","vr","vw","vo"],
         ["z","za","zb","zg","zd","zh","zv","zz","zx","zt","zy","zk","zl","zm","zn","zs","zi","zp","ac","zq","zr","zw","zo"],
         ["x","xa","xb","xg","xd","xh","xv","xz","xx","xt","xy","xk","xl","xm","xn","xs","xi","xp","ac","xq","xr","xw","xo"],
         ["t","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["y","a","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","יעץ","bp","ac","bq","br","bw","bo"],
         ["k","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["l","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["m","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["n","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["s","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["i","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["p","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
          ["c","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["q","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["r","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","רשע","bo"],
         ["w","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ["o","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","ac","bq","br","bw","bo"],
         ];
function shw() {document.getElementById("show").innerHTML = " " + heb[up][side];};
function shweng() {document.getElementById("show").innerHTML = " " + eng[up][side];};

function upz() {up=up+1;
    		
               document.getElementById("show").innerHTML =
        " . " + up+" . "+side+" "+parseInt(num[up][side]);};
           
function downz() {up=up-1;
                   document.getElementById("show").innerHTML =
       " . " + up+" . "+side+" "+parseInt(num[up][side]);};

function leftz() {side=side-1;
                 
                     document.getElementById("show").innerHTML =
 " " + up+" .  "+side+" "+parseInt(num[up][side]);};
function rightz() {side=side+1;
       		 
                       document.getElementById("show").innerHTML =
     " " + up+" . "+side+". "+parseInt(num[up][side]);};





