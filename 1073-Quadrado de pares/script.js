var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let valor = parseInt(input)

for(let i = 1; i <= valor; i++){
    if(i%2 == 0){
        console.log(`${i}^2 = ${(i * i)}`)
    }
}