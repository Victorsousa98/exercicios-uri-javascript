var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

let valores = [] = input.split('\n').map(item => parseInt(item))
valores.shift()

for(let valor of valores){
    
    let resto = valor%2
    if(valor > 0){
        if(resto == 0){
            console.log('EVEN POSITIVE')
        }else(
            console.log("ODD POSITIVE")
        )
    }else if(valor < 0){
        if(resto == 0){
            console.log("EVEN NEGATIVE")
        }else(
            console.log("ODD NEGATIVE")
        )
    }
    if(valor == 0){
        console.log("NULL")
    }
}