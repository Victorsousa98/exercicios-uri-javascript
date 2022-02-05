var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var notas = [n1,n2,n3,n4] = lines.shift().split(" ").map(item => parseFloat(item));
var notaExame = parseFloat(lines.shift())
/
var media = (notas[0]*2 + notas[1]*3 + notas[2]*4 + notas[3])/10
console.log("Media: " + media)

if(media >= 7.0){
    console.log("Aluno aprovado")
}else if(media < 5.0){
    console.log("Aluno reprovado")
}else if(media >= 5.0 && media < 7.0){
    console.log("Aluno em exame")
    console.log("Nota do exame: " + notaExame)
    var mediaExame = (media + notaExame)/2
    if(mediaExame >= 5){
        console.log("Aluno aprovado")
        console.log("Media final: " + mediaExame)
    }else (mediaExame < 5 ){
        console.log("Aluno reprovado")
        console.log("Media final: " + mediaExame)
    }
}

console.log(notas)
console.log(notaExame)