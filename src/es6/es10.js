let array=[1,2,3, [1,2,3,[1,2,3]]];

console.log(array.flat());// valor de la profundidad

let array2=[1,2,3,4,5];
console.log(array.flatMap(value=>[value,value*2]));


let hello ='    hello world';
console.log(hello);
console.log(hello.trimStart());


let hello ='hello world            ';
console.log(hello);
console.log(hello.trimEnd());
//trim

try{

}catch{
    error
}


let entries= [['name','oscar'] , ['age',32]];
console.log(Object.fromEntries(entries));

let mySymbol="mi simbolo";
let symbol=Symbol(mySymbol);
console.log(symbol.description);