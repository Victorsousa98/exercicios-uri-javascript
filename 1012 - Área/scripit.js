var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var [a, b, c] = input.split(" ").map(item => parseFloat(item))

var triangulo = (a*c)/2.0
var circulo = 3.14159 * Math.pow(c, 2)
var trapézio = ((a + b) * c)/2.0
var quadrado = Math.pow(b,2)
var retangulo = a*b




console.log('TRIANGULO: ' + triangulo.toFixed(3))
console.log('CIRCULO: ' + circulo.toFixed(3))
console.log('TRAPEZIO: ' + trapézio.toFixed(3))
console.log('QUADRADO: ' + quadrado.toFixed(3))
console.log('RETANGULO: ' + retangulo.toFixed(3))

