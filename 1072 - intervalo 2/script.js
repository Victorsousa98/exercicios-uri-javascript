var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')


let valores = [] = input.split("\n").map(item => parseInt(item))
let a = valores.shift()
let dentro = 0;
let fora = 0;


for(let i=0; i<a; i++){
    if(valores[i] >= 10 && valores[i] < 20){
        dentro++
    }else{
        fora++
    }
}

console.log(`${dentro} in`)
console.log(`${fora} out`)