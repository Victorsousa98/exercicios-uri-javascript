var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

/**Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias. */

let valorTotal = parseFloat(input)

const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

let qtdNotas = []
let qtdMoedas = []

console.log("NOTAS:")
for(cedula of notas){
    qtdNotas.push(parseInt(valorTotal/cedula))
    valorTotal = valorTotal%cedula
}
for(let i=0; i < notas.length; i++){

    console.log(`${qtdNotas[i]} nota(s) de R$ ${notas[i].toFixed(2)}`)
}

console.log("MOEDAS:")
for(moeda of moedas){
    qtdMoedas.push(parseInt(valorTotal/moeda))
    valorTotal = (valorTotal%moeda)+0.00001
}
for(let i=0; i < moedas.length; i++){

    console.log(`${qtdMoedas[i]} moeda(s) de R$ ${moedas[i].toFixed(2)}`)
}


/*
let dinheiro = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let aux = 0
console.log("NOTAS:")
for (item of dinheiro) {
    aux = parseInt(valorTotal / item)
    console.log(`${aux} nota(s) de R$ ${item.toFixed(2)}`)
    valorTotal = valorTotal % item
}
console.log("MOEDAS:")
for (item of dinheiro) {
    aux = parseInt(valorTotal / item)
    console.log(`${aux} moeda(s) de R$ ${item.toFixed(2)}`)
    valorTotal = valorTotal % item + 0.00001
}*/