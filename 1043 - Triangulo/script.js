var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

const valores = [A,B,C] = input.split(" ").map(item => parseFloat(item))

let a = valores[0]
let b = valores[1]
let c = valores[2]


if(a+b <= c || a+c <= b || b+c <= a){
    let perimetro;
    for(item of valores){
        perimetro = perimetro + item
    }
    console.log("Perimetro = " + perimetro.toFixed(1))
}else{
    let area = ((a + b) * c)/2
    console.log("Area = " + area.toFixed(1))
}
