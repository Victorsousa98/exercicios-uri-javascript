var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem 
decrescente, de modo que o lado A representa o maior dos 3 lados. 
A seguir, determine o tipo de triângulo que estes três lados formam, 
com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
*/

const mostra = mensagem => console.log(mensagem)
const potencia = (base, expoente) => Math.pow(base,expoente)

const valores = [A,B,C] = input.split(" ").map(item=>parseFloat(item))
valores.sort((a,b) => b-a)// transformando em ordem decrescente
let a = valores[0] 
let b = valores[1]//atribuido valores da array em cada variavel
let c = valores[2]


if(a>=(b+c)){
    mostra("NAO FORMA TRIANGULO")

}else if(potencia(a,2) == (potencia(b,2) + potencia(c,2))){
    mostra("TRIANGULO RETANGULO")

    if(a == b || a == c || b == c){
        mostra("TRIANGULO ISOSCELES")
    }
    if(a==b==c){
        mostra("TRIANGULO EQUILATERO")
    }

}else if(potencia(a,2) > (potencia(b,2) + potencia(c,2))){
    mostra("TRIANGULO OBTUSANGULO")

    if(a == b || a == c || b == c){
        mostra("TRIANGULO ISOSCELES")
    }
    if(a==b==c){
        mostra("TRIANGULO EQUILATERO")
    }

}else if(potencia(a,2) < (potencia(b,2) + potencia(c,2))){
    mostra("TRIANGULO ACUTANGULO")

    if((a == b && b != c || b == c && c != a || a==c && c != b)){
        mostra("TRIANGULO ISOSCELES")
    }
    if(a==b && a==c){
        mostra("TRIANGULO EQUILATERO")
    }
}

