var up=1;
var side=1;
var flag=1;
//var heb1=["א"את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","],["בת","בשׁ","בר","בק","בפ","בע","בס", "בנ","במ","בל", "בכ","בי","בט", "בח","בז","בו", "בה","בד","בג", "בב","בא"];

var heb=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
         ["a","aa","אבב אבד","ag","ad","ah","av","az","ax","at","ay","ak","al","am","אנש","as","ai","ap","aq","ar","אשר","aw"],
         ["b","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["g","ga","gb","gg","gd","gh","gv","gz","gx","gt","gy","gk","gl","gm","gn","gs","gi","gp","gq","gr","gc","gw"],
         ["d","da","db","dg","dd","dh","dv","dz","dx","dt","dy","dk","dl","dm","dn","ds","di","dp","dq","dr","dc","dw"],
         ["h","ha","hb","hg","hd","hh","hv","hz","hx","ht","hy","hk","הלך","hm","hn","hs","hi","hp","hq","hr","hc","hw"],
         ["v","va","vb","vg","vd","vh","vv","vz","vx","vt","vy","vk","vl","vm","vn","vs","vi","vp","vq","vr","vc","vw"],
         ["z","za","zb","zg","zd","zh","zv","zz","zx","zt","zy","zk","zl","zm","zn","zs","zi","zp","zq","zr","zc","zw"],
         ["x","xa","xb","xg","xd","xh","xv","xz","xx","xt","xy","xk","xl","xm","xn","xs","xi","xp","xq","xr","xc","xw"],
         ["t","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["y","a","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","יעץ","bp","bq","br","bc","bw"],
         ["k","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["l","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["m","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["n","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["s","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["i","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["p","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["q","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["r","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","רשע","bw"],
         ["c","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["w","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ];


function shw() {flag=0;document.getElementById("show").innerHTML = " " + heb[up][side];};

function upz() {up=up+1;
       		
               document.getElementById("show").innerHTML =
        " " + up+side;};
               };
function downz() {up=up-1;
                   document.getElementById("show").innerHTML =
        " "" " + up+side;};

function leftz() {side=side-1;
                 
                     document.getElementById("show").innerHTML =
     " " + up+side;};
function rightz() {side=side+1;
       		 
                       document.getElementById("show").innerHTML =
     " " + up+side;};





