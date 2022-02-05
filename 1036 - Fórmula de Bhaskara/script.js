var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

let valores = [a, b, c] = input.split(" ").map(item => parseFloat(item))
let delta = Math.pow(b,2) - (4*a*c)

let R1;
let R2;

if(delta>0 && a!=0 ){
    let R1 = (((-b)+(Math.sqrt(delta)))/2*a)/100
    let R2 = (((-b)-(Math.sqrt(delta)))/2*a)/100
    console.log('R1 = ' + R1.toFixed(5))
    console.log('R2 = ' + R2.toFixed(5))
}else{
    console.log('Impossivel calcular')
}


