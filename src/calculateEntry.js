const data = require('../data/zoo_data');

function countEntrants(arrayEntrants) {
  // seu código aqui
  let adult = 0; // Define o contador inicialmente com 0
  let child = 0; // Define o contador inicialmente com 0
  let senior = 0; // Define o contador inicialmente com 0
  arrayEntrants.forEach((ageEntrant) => { // Para cada elemento no array Recebidos
    if (ageEntrant < 18) { // Verifica idade
      child += 1; // Soma se a verificação da expressão retornar verdadeira
    } else if (ageEntrant >= 18 && ageEntrant < 50) { // Verifica idade
      adult += 1; // Soma se a verificação da expressão retornar verdadeira
    } else if (ageEntrant >= 50) { // Verifica idade
      senior += 1; // Soma se a verificação da expressão retornar verdadeira
    }
  });
  return { adult, child, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  let valorTotal = 0;
  const arrayNovo = [];
  const functionEntrants = entrants.forEach( (entrant) => { // Para cada pessoa no Array Recebido
    arrayNovo.push(entrant.age); // Capture sua idade
    // console.log(arrayNovo); // [DEBUG] Verifica entrada do Array
  });
  const contagem = countEntrants(arrayNovo); // Chama a função que irá contar quantas pessoas de cada faixa etária entrarão,
  // console.log(contagem); // [DEBUG] Verifica se o retorno é o esperado, com o formato correto.
  // passando como parâmetro, o valor do array com a idade de Cada um.
  // console.log(valorTotal) // [DEBUG] Verifica valor somado ao final da execução da Função
  const valorAdulto = 49.99;
  const valorChild = 20.99;
  const valorSenior = 24.99;
  valorTotal = (contagem.adult * valorAdulto) + (contagem.child * valorChild) + (contagem.senior * valorSenior);
  // console.log(contagem.adult, contagem.child, contagem.senior);
  // console.log(valorTotal);
  return valorTotal;
}

const pessoasVisitantes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// calculateEntry({ name: 'Lara Carvalho', age: 5 }, { name: 'Frederico Moreira', age: 5 });
// calculateEntry(pessoasVisitantes[0],
//   pessoasVisitantes[1],
//   pessoasVisitantes[2],
//   pessoasVisitantes[3],
//   pessoasVisitantes[4],
//   pessoasVisitantes[5]);
// calculateEntry();
// calculateEntry(pessoasVisitantes);

module.exports = { calculateEntry, countEntrants };

// LÓGICA DA FUNÇÃO:
// ** Recebe um Array de Visitantes
// ** Implementa uma HoF que verifica a idade de cada pessoa nesse array 'obj.age'
// ** Com base no [Range - Intervalo] de idades, a faixa etária é uma {child < 18, adult >= 18 && < 50, senior >= 50}
// **** Realizar a verificação da idade de cada elemento;
// **** Adicionar 1 unidade ao contador da faixa etária
// **** Retornar, ao final do array, o valor da soma de cada faixa etária
