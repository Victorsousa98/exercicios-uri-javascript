var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

const mostra = mensagem => console.log(mensagem)
const ddd = parseInt(input)


switch(ddd){
    case 61:
        mostra("Brasilia")
        break
    case 71:
        mostra("Salvador")
        break
    case 11:
        mostra("Sao Paulo")
        break
    case 21:
        mostra("Rio de Janeiro")
        break
    case 32:
        mostra("Juiz de Fora")
        break
    case 19:
        mostra("Campinas")
        break
    case 27:
        mostra("Vitoria")
        break
    case 31:
        mostra("Belo Horizonte")
        break
    default:
        mostra('DDD nao cadastrado')            
}