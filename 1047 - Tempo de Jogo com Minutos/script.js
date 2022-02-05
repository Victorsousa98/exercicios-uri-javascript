var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

/*
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/
const mostra = mensagem => console.log(mensagem)

const valores = [hI,mI,hF,mF] = input.split(" ").map(item => parseInt(item))

//Horas
let horaInicial = valores[0]
let minutoInicial = valores[1]
//Minutos
let horaFinal = valores[2]
let minutoFinal = valores[3]

//Tempo total
let tempoEmHoras = horaFinal - horaInicial;
let tempoEmMinutos = minutoFinal - minutoInicial;

let horas;
let minutos;
//////////////////////////////////////////////////////////

// se a hF - hI = 1, mas minuto inicial for maior que o final. Exemplo: i 7:10 e f 8:09.
// isso resultará em 1 hora e - 1 minutos, ou seja 59 minutos 
if(horaFinal - horaInicial === 1 && minutoInicial > minutoFinal){
    horas = 0
    minutos = 60 - (minutoInicial - minutoFinal)
}
//se os tempos derem 0, é por que foram 24 horas de jogo. Exemplo: i 8:10 até f 8:10
//isso resultará em 0 porem, foram 24 horas
if(tempoEmHoras === 0 && tempoEmMinutos === 0){
    horas = 24
    minutos = 0
}
 //calculo normal
if(horaInicial<horaFinal && minutoInicial < minutoFinal){
    horas = tempoEmHoras
    minutos = tempoEmMinutos
}

// aqui defini se a hora inical for maior que a final mas os minutos dão negativo: 0:10 9:09
// o resultado é 9 horas e -1 minutos. ou seja 8 horas e 59 minutos
if(horaInicial<horaFinal && minutoInicial > minutoFinal){
    horas = tempoEmHoras - 1
    minutos = 60 - (minutoInicial - minutoFinal)
}
// se as horas forem iguais, quer dizer que durou apenas minutos: i 12:00 f 12:10
if(horaInicial===horaFinal && minutoInicial<minutoFinal){
    horas = 0
    minutos = tempoEmMinutos
}


if(horaInicial > horaFinal){
    horas = (24 - horaInicial)+horaFinal
    minutos = tempoEmMinutos
    if(minutoInicial>minutoFinal){
        horas = tempoEmHoras - 1
        minutos = (60-tempoEmMinutos)+minutoFinal
    }
}






/*
//condição se for um total de 24horas
if(tempoEmHoras == 0 && tempoEmMinutos == 0){
    tempoEmHoras = 24
}

//condição se for menos de 1 minuto
if((horaFinal == horaInicial+1) && minutoInicial > minutoFinal){
    tempoEmHoras = 0
    tempoEmMinutos = 60 - (minutoInicial - minutoFinal)
}
//consição se horaInicial for maior que hora final
if(horaInicial > horaFinal && tempoEmMinutos != 0){
    tempoEmHoras = 24 - (horaInicial - horaFinal)
    tempoEmMinutos = 60 - (minutoInicial - minutoFinal)
}

*/



mostra(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)