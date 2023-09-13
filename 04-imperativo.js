const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Multiplica todos os números do array por 10
for (i = 0; i < numeros.length; i++) {
   console.log(numeros[i] * 10)
}

//Exibe os números pares
for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i])
    }
}

//Soma dos números do array
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma); // Saída: 55

//Checa se existe algum número ímpar
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 1) {
    console.log(true);
    break;
  }
}
