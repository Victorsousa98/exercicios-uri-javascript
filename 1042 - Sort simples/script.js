var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

const pulaLinha = () => console.log('')
const mostra = mensagem => console.log(mensagem)

const valores = [a,b,c] = input.split(" ").map(item => parseInt(item));

let crescente =[]
for(item of valores){
    crescente.push(item)
}
for(item of crescente.sort((a, b) => a-b )){
    mostra(item)
} 

pulaLinha()

for(item of valores){
    mostra(item)
}
