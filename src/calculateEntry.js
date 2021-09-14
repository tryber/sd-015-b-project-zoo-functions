const data = require('../data/zoo_data');
const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const contador = entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) return ({ ...acc, child: acc.child += 1 });
    if (entrant.age >= 18 && entrant.age < 50) return ({ ...acc, adult: acc.adult += 1 });
    if (entrant.age >= 50) return ({ ...acc, senior: acc.senior += 1 });
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return contador;
}

function calculateEntry(entrants) {
  // seu código aqui
  let valorTotal = 0;
  // Se entrants for NULL, retorna 0
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // Captura valor de cada chave retornada pela função
  const { child, adult, senior } = countEntrants(entrants);
  // const {pChild, pAdult, pSenior} = prices;
  // console.log("Preços: ", prices);
  // console.log(prices.adult);

  valorTotal = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  // console.log(valorTotal);

  return valorTotal;
}

// const pessoasVisitantes = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// calculateEntry({ name: 'Lara Carvalho', age: 5 }, { name: 'Frederico Moreira', age: 5 });
// calculateEntry();
// calculateEntry(pessoasVisitantes);
// console.log(calculateEntry(pessoasVisitantes));

module.exports = { calculateEntry, countEntrants };

// LÓGICA DA FUNÇÃO:
// ** Recebe um Array de Visitantes
// ** Implementa uma HoF que verifica a idade de cada pessoa nesse array 'obj.age'
// ** Com base no [Range - Intervalo] de idades, a faixa etária é uma {child < 18, adult >= 18 && < 50, senior >= 50}
// **** Realizar a verificação da idade de cada elemento;
// **** Adicionar 1 unidade ao contador da faixa etária
// **** Retornar, ao final do array, o valor da soma de cada faixa etária
