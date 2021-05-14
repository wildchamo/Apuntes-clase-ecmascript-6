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
}