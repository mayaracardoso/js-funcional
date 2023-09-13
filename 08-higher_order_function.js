// funções também são valores
// funções podem ser passadas como parâmetro de outras funções
// funções podem retornar outras funções


const texto = 'isto é uma string';
const funcao = function(valor) { return valor * 10 }


function multiplica10(valor) { return valor * 10 }

function somar(valor) {
  return valor + 100
}

console.log(somar(multiplica10(15)))


function multiplica10() {
  const numero = 10
  return function(valor) {
    return valor + numero;
  }
 }

