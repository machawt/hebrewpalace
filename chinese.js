var up=1;
var side=1;
var flag=0;

var chin=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","yin","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","kou","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","in","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin1=[["0","阿","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","因","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","夫","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","天","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
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

var eng1=[["0","a","0ai","0ao","0an","0ang","0e","0er","0ei","0en","0eng","0ong","0i","0ia","0iao","0ie","0iu","0ian","0iang","cause","0ing","0iong","0u","0ua","0uo","0uai","0ui","0un","0uan","0uang","0un","0ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","夫","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","sky/day","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
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


var chin2=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","鱼","ua","uo","uai","ui","un","uan","uang","un","ueng"],
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
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","回","un","uan","uang","un","ueng"],
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
var eng2=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","fish","ua","uo","uai","ui","un","uan","uang","un","ueng"],
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
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","return","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","从","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","person","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin3=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","品","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","口","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","犬","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var eng3=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","quality","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","mouth","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","dog","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];


var chin4=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","吠","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
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
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","众","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];

var eng4=[["0","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["b","ba","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["p","pa","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["m","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["f","a","ai","ao","an","ang","e","er","bark ","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["d","big","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["t","a","very","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["n","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["l","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["g","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["k","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["h","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["z","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["c","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["s","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["zh","a","ai","ao","an","ang","e","er","ei","en","eng","crowd","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["ch","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["sh","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["r","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["j","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["q","a","ai","ao","an","ang","e","er","ei","en","eng","ong","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
["x","a","ai","ao","an","ang","e","er","ei","en","eng","众","i","ia","iao","ie","iu","ian","iang","ing","iong","u","ua","uo","uai","ui","un","uan","uang","un","ueng"],
];
 
function shweng() {if (flag===0) {flag=1} else {flag=0};};
function shw() {document.getElementById("show").innerHTML = " " + chin[up][side];};

function upz() {up=up+1;document.getElementById("show").innerHTML = " " + chin[up][side];
               if (flag===1) {document.getElementById("s1").innerHTML = " " + eng1[up][side];
                            document.getElementById("s2").innerHTML = " " + eng2[up][side];
                            document.getElementById("s3").innerHTML = " " + eng3[up][side];
                            document.getElementById("s4").innerHTML = " " + eng4[up][side];}
                else
                           {document.getElementById("s1").innerHTML = chin1[up][side];
                            document.getElementById("s2").innerHTML = " " + chin2[up][side];
                            document.getElementById("s3").innerHTML = " " + chin3[up][side];
                            document.getElementById("s4").innerHTML = " " + chin4[up][side];}

                           };
       		function downz() {up=up-1;document.getElementById("show").innerHTML = " " + chin[up][side];
               if (flag===1) {document.getElementById("s1").innerHTML = " " + eng1[up][side];
                            document.getElementById("s2").innerHTML = " " + eng2[up][side];
                            document.getElementById("s3").innerHTML = " " + eng3[up][side];
                            document.getElementById("s4").innerHTML = " " + eng4[up][side];}
                else
                           {document.getElementById("s1").innerHTML = " " + chin1[up][side];
                            document.getElementById("s2").innerHTML = " " + chin2[up][side];
                            document.getElementById("s3").innerHTML = " " + chin3[up][side];
                            document.getElementById("s4").innerHTML = " " + chin4[up][side];}
                          };

function leftz() {side=side+1;document.getElementById("show").innerHTML = " " + chin[up][side];
               if (flag===1) {document.getElementById("s1").innerHTML = " " + eng1[up][side];
                            document.getElementById("s2").innerHTML = " " + eng2[up][side];
                            document.getElementById("s3").innerHTML = " " + eng3[up][side];
                            document.getElementById("s4").innerHTML = " " + eng4[up][side];}
                else
                           {document.getElementById("s1").innerHTML = " " + chin1[up][side];
                            document.getElementById("s2").innerHTML = " " + chin2[up][side];
                            document.getElementById("s3").innerHTML = " " + chin3[up][side];
                            document.getElementById("s4").innerHTML = " " + chin4[up][side];}
                           };                          
function rightz() {side=side+1;document.getElementById("show").innerHTML = " " + chin[up][side];
               if (flag===1) {document.getElementById("s1").innerHTML = " " + eng1[up][side];
                            document.getElementById("s2").innerHTML = " " + eng2[up][side];
                            document.getElementById("s3").innerHTML = " " + eng3[up][side];
                            document.getElementById("s4").innerHTML = " " + eng4[up][side];}
                else
                           {document.getElementById("s1").innerHTML = " " + chin1[up][side];
                            document.getElementById("s2").innerHTML = " " + chin2[up][side];
                            document.getElementById("s3").innerHTML = " " + chin3[up][side];
                            document.getElementById("s4").innerHTML = " " + chin4[up][side];}
                           };
