function calcularFatorial(numero) {
    // Caso base: Se n for 0 ou 1, o fatorial é 1.
    if (numero <= 1) {
      return 1;
    }
    
    // Caso recursivo: Chamada recursiva para calcular o fatorial de (n-1)
    return numero * calcularFatorial(numero - 1);
  }
  
  // Exemplo de uso:
  const numero = 6;
  const resultado = calcularFatorial(numero);
  
  console.log(`O fatorial de ${numero} é ${resultado}`);
  