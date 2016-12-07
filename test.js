var up=1;
var side=1;
//var heb1=["א"את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","],["בת","בשׁ","בר","בק","בפ","בע","בס", "בנ","במ","בל", "בכ","בי","בט", "בח","בז","בו", "בה","בד","בג", "בב","בא"];

var heb=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
         ["a","aa","אבב אבד","ag","ad","ah","av","az","ax","at","ay","ak","al","am","an","as","ai","ap","aq","ar","ac","aw"],
         ["b","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["g","ga","gb","gg","gd","gh","gv","gz","gx","gt","gy","gk","gl","gm","gn","gs","gi","gp","gq","gr","gc","gw"],
         ["d","da","db","dg","dd","dh","dv","dz","dx","dt","dy","dk","dl","dm","dn","ds","di","dp","dq","dr","dc","dw"],
         ["h","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["v","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["z","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["x","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["t","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["y","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["k","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["l","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw"],
         ["m","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["n","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["s","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["i","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["p","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["q","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["r","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["c","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ["w","ba","bb","bg","bd","bh","bv","bz","bx","bt","by","bk","bl","bm","bn","bs","bi","bp","bq","br","bc","bw],
         ];
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





