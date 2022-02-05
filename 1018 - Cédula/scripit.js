var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

let valor = parseInt(input)

console.log(valor)

var notas = [100,50,20,10,5,2,1]

for (nota of notas){
    let qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`);
    valor = valor%nota
}
