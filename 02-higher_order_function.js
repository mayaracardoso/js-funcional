// funções também são valores
// funções podem ser passadas como parâmetro de outras funções
// funções podem retornar outras funções


function multiplica10(valor) { return valor * 10 }
console.log(funcao(15))

function somar(valor) {
  return valor + 100
}

console.log(somar(multiplica10(15)))



const funcao = function(valor) { return valor * 10 }
console.log(funcao(15))

function somar(valor) {
  valor + 100
}

console.log(somar(funcao(15)))

function multiplica10(valor) { return valor * 10 }
console.log(funcao(15))

function somar(valor) {
  return valor + 100
}

console.log(somar(multiplica10(15)))

function soma100(valor) {
  return somar(valor);
}

console.log(soma100(10))