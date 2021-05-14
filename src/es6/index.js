//antes de ecmascript 6

function newFunction(name,age,country){
    var name=name || "Jose";
    var age=age || 32;
    var country= country || "MX";
    console.log(name, age, country);
}


//es6 
function newFunction2(name="Jose",age="19",country="COl"){
    console.log(name, age, country);
};

newFunction2();
newFunction2("Luis","20", "COl");


//template literal antes

let hello="hello";
let world="world";
let epicPhrase=hello + ""+ world;
console.log(epicPhrase);

//template literal ahora!
let epicPhrase2=  `${hello} ${world}`;
console.log(epicPhrase2)