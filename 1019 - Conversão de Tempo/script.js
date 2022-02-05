var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")
/*
var duracaoS = parseInt(input);

const duracaoH = parseInt(duracaoS/3600)
duracaoS = duracaoS%3600

const duracaoM = parseInt(duracaoS/60)
duracaoS = duracaoS%60

console.log(`${duracaoH}:${duracaoM}:${duracaoS}`)
*/

var duracaoS = parseInt(input)

const valores = [3600, 60, 1]
const resultado = []

for (valor of valores){
    resultado.push(parseInt(duracaoS/valor))
    duracaoS = duracaoS%valor
}

console.log(resultado.join(":"))