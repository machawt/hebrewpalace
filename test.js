var up=1;
var side=1;
//var heb1=["א"את","אשׁ","אר","אק","אפ","אע","אס", "אנ","אמ","אל", "אכ","אי","אט", "אח","אז","או", "אה","אד","אג", "אב","],["בת","בשׁ","בר","בק","בפ","בע","בס", "בנ","במ","בל", "בכ","בי","בט", "בח","בז","בו", "בה","בד","בג", "בב","בא"];

var heb=[["ab","ag","ad","ah","av","az","ax","at","ay","ak","al","am","an","as","ai","ap""aq","ar","ac","ao"],["bb","bg","bd","bh","bv","bz","bx","bt""by","bk","bl","bm","bn","bs","bi","bp""bq","br","bc","bo"],["cb","cg","cd","ch","cv","cz","cx","ct""cy","ck","cl","cm","cn","cs","ci","cp""cq","cr","cc","co"]];
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





