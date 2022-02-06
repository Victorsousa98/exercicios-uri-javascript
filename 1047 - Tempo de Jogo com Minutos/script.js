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

//Tempo total
let diferencaHoras = hF - hI;
let diferencaMinutos = mF - mI;

let horas;
let minutos;
//////////////////////////////////////////////////////////
 
//calculo normal
 if(hI<hF && mI < mF){
    horas = diferencaHoras
    minutos = diferencaMinutos
    mostra(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}

// se a hF - hI = 1, mas minuto inicial for maior que o final. Exemplo: i 7:10 e f 8:09.
// isso resultará em 1 hora e - 1 minutos, ou seja 59 minutos 
if(diferencaHoras === 1 && mI > mF){
    horas = 0
    minutos = 60 + diferencaMinutos// sinal de mais pq a difereça da um resultado negativo
    mostra(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
}
//se os tempos derem 0, é por que foram 24 horas de jogo. Exemplo: i 8:10 até f 8:10
//isso resultará em 0 porem, foram 24 horas
if(diferencaHoras === 0 && diferencaMinutos === 0){
    horas = 24
    minutos = 0
}
// aqui defini se a hora inical for maior que a final mas os minutos dão negativo: 0:10 9:09
// o resultado é 9 horas e -1 minutos. ou seja 8 horas e 59 minutos
if(hI<hF && mI > mF){
    horas = diferencaHoras - 1
    minutos = 60 - (mI - mF)
}
// se as horas forem iguais, quer dizer que durou apenas minutos: i 12:00 f 12:10
if(hI===hF && mI<mF){
    horas = 0
    minutos = diferencaMinutos
}


if(hI > hF){
    horas = (24 - hI)+hF
    minutos = diferencaMinutos
    if(mI>mF){
        horas = diferencaHoras - 1
        minutos = (60-diferencaMinutos)+mF
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



//mostra(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)