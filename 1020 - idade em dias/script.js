var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

//transformar em anos, meses e dias.
/*apenas para facilitar o cálculo, considere todo
ano com 365 dias e todo mês com 30 dias.
Nos casos de teste nunca haverá uma situação 
que permite 12 meses e alguns dias, como 360,
363 ou 364. Este é apenas um exercício com
objetivo de testar raciocínio matemático simples.*/

/*let idadeEmDias = parseInt(input)

let idadeEmAnos = (parseInt(idadeEmDias/365))
idadeEmDias = idadeEmDias%365

let idadeEmMeses = (parseInt(idadeEmDias/30))
idadeEmDias = idadeEmDias%30



console.log(`${idadeEmAnos} ano (s)
${idadeEmMeses} mes (es)
${idadeEmDias} dia (s)`)*/

var idadeEmDias = parseInt(input)

const valores = [365, 30, 1]
const resultado = []

for (valor of valores){
    resultado.push(parseInt(idadeEmDias/valor))
    idadeEmDias = idadeEmDias%valor
}

const tempo = [" ano(s)", " mes(es)", " dia(s)"]

for(let i = 0; i < tempo.length; i++){
    console.log(resultado[i] + tempo[i])
}