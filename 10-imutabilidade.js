// valores não são alterados
// sem efeitos colaterais

const array = [2, 4, 1, 3, 8]

// array.sort();
const arrayOrdenado = [...array].sort();

function ordenar(array) {
    return [...array].sort();
  }
  
const numeros = [3, 5, 1, 4];
const pessoa = { nome: 'João', idade: 25 };
pessoa.email = 'teste@teste.com'
pessoa

Object.preventExtensions(pessoa);
pessoa.cep = '00000'

// o objeto é uma constante, mas suas propriedades não
const numerosOrdenados = ordenar(numeros)

//congela o objeto, tornando-o imutável
Object.freeze(numeros)
// const pessoa = { nome: 'João', idade: 25 };
pessoa.email = 'teste@teste.com'

Object.preventExtensions(pessoa);
pessoa.cep = '00000'

const isExtensible = Object.isExtensible(pessoa)

//previne que sejam adicionadas ou deletadas propriedades do objeto
Object.seal(pessoa)
pessoa.email = 'teste@teste.com' // não funciona
delete pessoa.idade; // não funciona

// Torna o objeto imutável
Object.freeze(pessoa)
pessoa.nome = 'Mayara' // não é possível alterar o valor das propriedades
delete pessoa.idade // não é possível deletar uma propriedade
pessoa.email = ''; //não é possível incluir uma nova propriedade
// pode ser usado em funções de mocks de testes unitários, para garantir que não sejam mudadas na execução

// não funciona para objetos dentro de objetos
// pessoa.endereco.cep = 021212
// uma solução para isso seria freezar os objetos iternos também
Object.freeze(pessoa.endereco)

// Atribuição por referência
const novaPessoa = pessoa
novaPessoa.idade = 32 // altera a propriedade idade do objeto pessoa porque aponta para a mesma referência

// Passagem por referência (objetos, arrays, etc)
function alteraPessoa(pessoa) {
  const novaPessoa = { ... pessoa }
  novaPessoa.nome = "Terezinha";
  return novaPessoa;
}

// Atribuição por valor (cópia)
let x = 1;
let y = x;
