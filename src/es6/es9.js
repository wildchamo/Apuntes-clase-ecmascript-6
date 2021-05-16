// junio 2018

const obj ={
    name:'Jose',
    age:32,
    country:'col',
}

let{ name, ... all}=obj;
console.log(name,all);



const obj = {
    name:'Jose',
    age:32,
}
const obj1={
    ...obj,
    country:"Col",
}

console.log(obj1);


const helloWorld=()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? resolve('hello world')
        : reject(new Error('test error'))
    })
};

helloWorld()
 .then(response=>console.log(response))
 .then(error=>console.log(error))
.finally(()=>console.log("finalizó"))



const regexData= /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
const match= regexData.exec("2018-04-20");
const year=match [1]
const mes= match [2]
const day=match [3]
 
console.log(year,mes,day);
