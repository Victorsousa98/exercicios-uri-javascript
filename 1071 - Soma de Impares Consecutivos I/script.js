var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let valores = [] = input.split("\n").map(item => parseInt(item))
let soma = 0;

for(let i = valores[1] + 1; i < valores[0] ; i++){
    if(i%2 != 0){
        soma += i
    }
}

console.log(soma)