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

