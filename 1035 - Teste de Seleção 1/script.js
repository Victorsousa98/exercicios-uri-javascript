var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

/*Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".*/

let valores = [a, b, c, d] = input.split(" ").map(item => parseInt(item))

if(b>c && d>a && (c+d)>(a+b) && c>0 && d>0 && (a%2)==0){
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}

