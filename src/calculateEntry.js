const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };

// LÓGICA DA FUNÇÃO:
// ** Recebe um Array de Visitantes
// ** Implementa uma HoF que verifica a idade de cada pessoa nesse array 'obj.age'
// ** Com base no [Range - Intervalo] de idades, a faixa etária é uma {child < 18, adult >= 18 && < 50, senior >= 50}
// **** Realizar a verificação da idade de cada elemento;
// **** Adicionar 1 unidade ao contador da faixa etária
// **** Retornar, ao final do array, o valor da soma de cada faixa etária
