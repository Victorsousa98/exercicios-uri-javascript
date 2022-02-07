var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

const mostra = mensagem => console.log(mensagem)

const animais = [a,b,c] = input.split('\n')

if(a[0] == 'v'){
    if(b[0] == 'a'){
        if(c[0] == 'c'){
            mostra("aguia")
        }else{
            mostra('pomba')
        }
    }else{
        if(c[0] == 'o'){
            mostra("homem")
        }else{
            mostra('vaca')
        }
    }

}else{
    if(b[0] == 'i'){
        if(c[2] == 'm'){
            mostra("pulga")
        }else{
            mostra('lagarta')
        }
    }else{
        if(c[2] == 'm'){
            mostra("sanguessuga")
        }else{
            mostra('minhoca')
        }
    }
}