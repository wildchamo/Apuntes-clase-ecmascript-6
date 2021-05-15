let lorem ="Hola, soy Jose Luis \n"
+"otra linea."

console.log(lorem);
//es6
let lorem2 =`otra frase epica
ahora es otra frase epica
`
console.log(lorem2);


let person= {
    'name':'Jose luis',
    'age':19,
    'country':'COL'
}

console.log(person.name,person.age, person.country);

//ec6
let{ name,age} =person;
console.log(name,age);


//spread operator
let team1 =['Oscar','Julian', 'Ricardo']
let team2= ['Valeria','Jessica','Camila']

let education = ['David', ...team1,...team2];
console.log(education);


//let vs var

{
    var global ="Global var";
}

{
    let goblalLet="Global let"; 
}

console.log(global);
console.log(globalLet);


//no puedes cambiar el valor de const!
const varA= 'b';
