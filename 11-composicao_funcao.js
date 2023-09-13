// Função para dobrar um número
function dobrar(numero) {
    return numero * 2;
  }
  
  // Função para adicionar 5 a um número
  function adicionarCinco(numero) {
    return numero + 5;
  }
  
  // Função para subtrair 3 de um número
  function subtrairTres(numero) {
    return numero - 3;
  }
  
  // Composição de funções
  function composicao(numero) {
    return subtrairTres(adicionarCinco(dobrar(numero)));
  }
  
  // Usando a composição de funções
  const resultado = composicao(7); // Primeiro dobra (7 * 2 = 14), então adiciona 5 (14 + 5 = 19), depois subtrai 3 (19 - 3 = 16)
  console.log(resultado);

  
