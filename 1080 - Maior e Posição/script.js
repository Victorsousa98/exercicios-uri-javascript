var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

var novoArray = [];
for (i = 0; i < lines.length; i++){
    novoArray[i] = parseInt(lines[i]);
}

var maior = 0;
for (var i = 0; i < novoArray.length; i++) {
   if ( novoArray[i] > maior ) {
      maior = novoArray[i];
   }
}

console.log(maior);
console.log(novoArray.indexOf(maior) + 1);



/*
let theHundred = input.split("\n").map(item=>parseInt(item))
let max = Math.max(...theHundred)
let indexMax = theHundred.indexOf(max)

console.log(max)
console.log(indexMax + 1)
*/

 /*
let theHundred = input.split("\n").map(item=>parseInt(item))
let posicao = 0
let max = Math.max(...theHundred)

for(item of theHundred){
    if(item !== max){
        posicao++
    }else{
        posicao++
        break
    }
}
console.log(max)
console.log(posicao)
*/
