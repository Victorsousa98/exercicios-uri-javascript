var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')
//valores
let w = lines.shift().split(" ");
let x = lines.shift().split(":");
let y = lines.shift().split(" ");
let z = lines.shift().split(":");
//tempo inicial
let diaInicial = parseInt(w[1])
let horaInicial = parseInt(x[0])
let minutoInicial = parseInt(x[1])
let segundoInicial = parseInt(x[2])
//tempo final
let diaFinal = parseInt(y[1])
let horaFinal = parseInt(z[0])
let minutoFinal = parseInt(z[1])
let segundofinal = parseInt(z[2])
//transformando tudo em segundos
let segundosI = trasnformaEmSegundos(diaInicial,horaInicial,minutoInicial,segundoInicial)
let segundosF = trasnformaEmSegundos(diaFinal,horaFinal,minutoFinal,segundofinal)
//segundos totais
let tempo = segundosF - segundosI
let dias = parseInt(tempo/(60*60*24))
tempo = tempo%(60*60*24)
let horas = parseInt(tempo/(60*60))
tempo = tempo%(60*60)
let minutos = parseInt(tempo/60)
let segundos = tempo%60

console.log(`${dias} dia(s)`)
console.log(`${horas} hora(s)`)
console.log(`${minutos} minuto(s)`)
console.log(`${segundos} segundo(s)`)

function trasnformaEmSegundos(dia,hora,minuto,segundo){
    let dias = dia*86400
    let horas = hora*3600
    let minutos = minuto*60
    let segundos = segundo
    let total = dias+horas+minutos+segundos
    return total
}
