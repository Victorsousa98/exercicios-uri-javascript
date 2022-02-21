var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let valor = parseInt(input)

for(let i=1; i<=10; i++){
    console.log(`${i} x ${valor} = ${i*valor}`)
}