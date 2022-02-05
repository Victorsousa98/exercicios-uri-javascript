var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

const valores = [a,b,c] = input.split(" ").map(item => parseFloat(item))

let perimetro = a+b+c
let area = ((a + b) * c)/2

if(a < b + c && b < a + c && c < b + a){
    console.log("Perimetro = " + perimetro.toFixed(1))
}else{
    console.log("Area = " + area.toFixed(1))
}

