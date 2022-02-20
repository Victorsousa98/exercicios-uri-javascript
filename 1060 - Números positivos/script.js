var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')



let positivos = [];
let negativos = [];

for(let i = 0; i < 6; i++){
    var valor = parseFloat(lines.shift())
    if(valor > 0.0){
        positivos.push(valor)
    }else if(valor < 0.0){
        negativos.push(valor)
    }
}

console.log(`${positivos.length} valores positivos`)