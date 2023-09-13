
const numerosObservaveis = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const operacoesCompostas = numerosObservaveis.pipe(

  filter((numero) => numero % 2 === 0),
  
  map((numero) => numero * 2),
  
  tap((numero) => console.log('Resultado parcial', numero)), // Resultado parcial: 4, 8, 12, 16, 20

  reduce((acumulador, numero) => acumulador + numero, 0)
  
);

operacoesCompostas.subscribe((resultado) => {
  console.log(`Resultado final: ${resultado}`); // Resultado final: 60
});