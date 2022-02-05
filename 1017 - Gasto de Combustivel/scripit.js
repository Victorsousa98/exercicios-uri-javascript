var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var consumoPorLitro = 12
var tempoH = parseInt(lines.shift())
var velocidade = parseInt(lines.shift())

var litros = (velocidade/consumoPorLitro)*tempoH

console.log(litros.toFixed(3))