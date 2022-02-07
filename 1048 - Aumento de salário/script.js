var input = require('fs').readFileSync('stdin', "utf-8")
var lines = input.split("\n")
const mostra = mensagem => console.log(mensagem)
const novoSalario = (salario, porc) => salario*(porc/100)+salario
const reajuste = (salario, porc) => (porc/100.0)*salario

let salario = parseFloat(input)



if(salario <= 400){
    salario = novoSalario(salario,15)
    ganho = reajuste(input,15)
    percentual = 15


}else if(salario > 400 && salario <= 800){
    salario = novoSalario(salario,12)
    ganho = reajuste(input,12)
    percentual = 12

}else if(salario > 800 && salario <= 1200){
    salario = novoSalario(salario,10)
    ganho = reajuste(input,10)
    percentual = 10

}else if(salario > 1200 && salario <= 2000){
    salario = novoSalario(salario,7)
    ganho = reajuste(input,7)
    percentual = 7
    
}else if(salario > 2000){
    salario = novoSalario(salario,4)
    ganho = reajuste(input,4)
    percentual = 4
}



mostra("Novo salario: " + salario.toFixed(2))
mostra('Reajuste ganho: ' + ganho.toFixed(2))
mostra('Em percentual: ' + percentual + ' %')