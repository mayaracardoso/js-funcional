// Valor de retorno é definido APENAS pelos seus valores de entrada
// Não gera efeitos colaterais


function soma(a, b) {
    return a + b;
}


function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente);
}


let contador = 0;

function soma(a, b) {
    contador++;
    return a + b;
}

