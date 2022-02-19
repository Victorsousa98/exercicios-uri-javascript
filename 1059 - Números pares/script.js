var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')

//Faça um programa que mostre os números pares entre 1 e 100, inclusive.

for(let i=2; i<=100 ; i += 2){
    console.log(i)
}