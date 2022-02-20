var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

//Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.
let valor = parseInt(input)

for(let i=1; i <= valor; i+=2){
    console.log(i)
}