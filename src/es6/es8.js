//se agrego async awake


//object entries

const data= {
    frontend: 'Jose Lo',
    backend: 'Santiago',
    design:'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data={
    frontend: 'Jose Lo',
    backend: 'Santiago',
    design:'Ana'
}

const values=Object.values(data)
console.log(values);
console.log(values.length);


//padding?
const string ="hello";
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'------'))

//Async await

const helloWorld= ()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout (()=> resolve('hello world'),3000)
        : reject (new Error('test error'))
    })
};


const helloAsync = async () =>{
    const hello= await helloWorld();
    console.log(hello);
}
helloAsync();


const helloWorld= ()=>{
    return new Promise((resolve,reject)=>{
        (true)// false para romper
        ? setTimeout (()=> resolve('hello world'),3000)
        : reject (new Error('test error'))
    })
};

const anotherFunction = async () =>{
    try{
        const hello= await helloWorld();
        console.log(hello);
    }
    catch(error){
        console.log(error)
    }
};

anotherFunction();