var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')



let positivos = [];
let negativos = [];
let media = 0;

for(let i = 0; i < 6; i++){
    var valor = parseFloat(lines.shift())
    if(valor > 0.0){
        positivos.push(valor)
        media = media + valor
    }
}

console.log(`${positivos.length} valores positivos`)
console.log((media/positivos.length).toFixed(1))