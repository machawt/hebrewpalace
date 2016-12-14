var up=1;
var side=1;

var chin=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin1=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","夫","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin2=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","从","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","人","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin3=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin4=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","大","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","太","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","众","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];

function shw() {flag=0;document.getElementById("show").innerHTML = " " + chin[up][side];};

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





