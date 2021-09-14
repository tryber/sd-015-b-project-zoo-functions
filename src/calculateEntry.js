const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let adult = 0; // Define o contador inicialmente com 0
  let child = 0; // Define o contador inicialmente com 0
  let senior = 0; // Define o contador inicialmente com 0
}

function calculateEntry(...entrants) {
  // seu código aqui
  const arrayNovo = [];
  const functionEntrants = entrants.forEach( (entrant) => { // Para cada pessoa no Array Recebido
    arrayNovo.push(entrant.age); // Capture sua idade
    // console.log(arrayNovo); // [DEBUG] Verifica entrada do Array
    countEntrants(arrayNovo); // Chama a função que irá contar quantas pessoas de cada faixa etária entrarão,
    // passando como parâmetro, o valor do array com a idade de Cada um.
  });
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
calculateEntry(pessoasVisitantes[0],
  pessoasVisitantes[1],
  pessoasVisitantes[2],
  pessoasVisitantes[3],
  pessoasVisitantes[4],
  pessoasVisitantes[5]);

module.exports = { calculateEntry, countEntrants };

// LÓGICA DA FUNÇÃO:
// ** Recebe um Array de Visitantes
// ** Implementa uma HoF que verifica a idade de cada pessoa nesse array 'obj.age'
// ** Com base no [Range - Intervalo] de idades, a faixa etária é uma {child < 18, adult >= 18 && < 50, senior >= 50}
// **** Realizar a verificação da idade de cada elemento;
// **** Adicionar 1 unidade ao contador da faixa etária
// **** Retornar, ao final do array, o valor da soma de cada faixa etária
