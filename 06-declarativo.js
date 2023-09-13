
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map
const numerosPor10 = numeros.map((numero) => numero * 10);
console.log(numerosAoQuadrado); // Saída: [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

//filter
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]

//reduce
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // Saída: 55


//some
const existeNumeroImpar = numeros.some((numero) => numero %2 === 1);
console.log(existeNumeroImpar); // Saída: true