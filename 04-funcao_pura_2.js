// não é pura porque o random usa valores externos para gerar os valor randômico
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

// é uma função pura
function soma(a, b) {
    return a + b;
}

let count = 0;
// deixa de ser uma função pura porque gera um efeito colateral
function soma(a, b) {
    count++;
    return a + b;
}

// nem sempre conseguimos usar funções puras porque são muito restritas
// facilita a refatoração, porque  o que acontece dentro de seu escopo de execução não depende do escopo externo ou global
// a refatoração não gera efeito colateral no código