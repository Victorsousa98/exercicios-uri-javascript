var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let numeroDeCasos = parseInt(lines.shift())

for(let i=0; i<numeroDeCasos; i++){
    let caso = [a,b,c] = lines.shift().split(" ").map(item => parseFloat(item))
    console.log(mediaPonderada(a,b,c))
}


function mediaPonderada(a,b,c){
    return ((a*2+b*3+c*5)/(2+3+5)).toFixed(1)
}
