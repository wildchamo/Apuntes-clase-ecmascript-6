class Calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }
}

const calc= new Calculator();
console.log(calc.sum(3,2))

const hello = require('./modulo.js');
console.log(hello());




