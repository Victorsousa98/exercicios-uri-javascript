var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

const valor = parseInt(input)
let a = valor + 12

for(let i = valor; i<a; i+=1){
    if(i%2 == 1){
        console.log(i)
    }
}