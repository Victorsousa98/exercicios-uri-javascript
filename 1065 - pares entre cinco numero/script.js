var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')



let pares = [];

for(let i = 0; i < 5; i++){
    var valor = parseFloat(lines.shift())
    let resto = valor%2
    if(resto == 0){
        pares.push(valor)
    }
}
console.log(`${pares.length} valores pares`)