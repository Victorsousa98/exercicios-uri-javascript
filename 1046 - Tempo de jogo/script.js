/*Leia a hora inicial e a hora final de um jogo.
 A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia
 e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando
a hora de início e a hora de fim do jogo. */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")
var valores = [a,b] = input.split(" ").map(item => Number(item))
//funções para facilitar
const mostra = mensagem => console.log(mensagem)
//
let horaInicial = a
let horaFinal = b
let diferenca = b-a
let duracao;


if(a==0 && b==0){
    duracao = 24
}else if(a>b && diferenca < 0){ 
    duracao = diferenca + 24
}else{
    duracao = diferenca 
}



mostra(`O JOGO DUROU ${duracao} HORA(S)`)
