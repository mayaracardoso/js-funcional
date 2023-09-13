// Técnica que permite que uma função deixe de receber vários parâmetros e receba apenas outra função como parâmetro
// Uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um argumento
// e retorna uma função que recebe um argumento,
// que por sua vez retorna uma função que recebe um argumento e retorna o resultado da função original.

function somaNumeros(a, b, c) { return a + b + c };

function soma(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(somaNumeros(2, 5, 7))

const x = soma(2)(5)(7)
console.log(x)
