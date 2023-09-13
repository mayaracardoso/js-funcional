// valores não são alterados
// sem efeitos colaterais

const pessoa = { nome: 'João', idade: 25 };
pessoa.email = 'teste@teste.com'


// Torna o objeto imutável
Object.freeze(pessoa)
pessoa.nome = 'Mayara' // não é possível alterar o valor das propriedades
delete pessoa.idade // não é possível deletar uma propriedade
pessoa.email = ''; //não é possível incluir uma nova propriedade

