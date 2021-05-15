//objs?

let name ='Jose Luis'
let age='19'
//es5
obj={name:name,age:age};
//es6
obj2={name,age};
console.log(obj2);

//arrow function

const names= [
    {name:'Oscar',age:'19'},
    {name:'Jose',age:'32'}
]

let listOfN= names.map(function(item){
    console.log(item.name);
});

//arrow function

let listOfNames2=names.map(item => console.log(item.name));

const listOfNames3=(name,age,country)=>{
    ...// aca va el código
}

const listOfNames4= name =>{

}

const square=num =>num *num;


//promesas!
const helloPromise = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            resolve("todo bien")
        }else{
            reject('algo salió mal')
        }
    });
}

helloPromise()
.then(response=> console.log(response))
.catch(error=>  console.log(error));