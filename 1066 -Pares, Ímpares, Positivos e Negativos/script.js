var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')


let positivos = [];
let negativos = [];
let pares = [];
let impares = [];

for(let i = 0; i < 5; i++){
    var valor = parseFloat(lines.shift())
    let resto = valor%2
    if(valor > 0){
        positivos.push(valor)
        if(resto == 0){
            pares.push(valor)
        }else(
            impares.push(valor)
        )
    }else if(valor < 0){
        negativos.push(valor)
        if(resto == 0){
            pares.push(valor)
        }else(
            impares.push(valor)
        )
    }
    if(valor == 0){
        pares.push(0)
    }
}

console.log(`${pares.length} valor(es) par(es)`)
console.log(`${impares.length} valor(es) impar(es)`)
console.log(`${positivos.length} valor(es) positivo(s)`)
console.log(`${negativos.length} valor(es) negativo(s)`)