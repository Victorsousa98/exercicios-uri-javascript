var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

/* */

const valores = [a,b] = input.split(" ").map(item => parseInt(item))

let ordemDecrescente = [] 
for(item of valores){
    ordemDecrescente.push(item)
}
ordemDecrescente.sort((a,b)=>b-a)


if((ordemDecrescente[0]%ordemDecrescente[1])==0 ){
    console.log("Sao Multiplos")
}else{
    console.log("Nao sao Multiplos")
}
