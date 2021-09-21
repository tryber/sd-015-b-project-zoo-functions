const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // Verifica se o objeto com o 'entrants' está vazio OU undefined, se estiver é retornado '0'.
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  // Filtra o objeto passado e contabiliza o length para saber quantos entrants há em cada nível de senioridade.
  const entrantsCounter = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return entrantsCounter;
}

function calculateEntry(entrants) {
  // Com os parâmetros certos a função acessa o objeto entrantsCounter e multiplica o valor da entrada pelo número de entrants correspondentes a aquele nível de senioridade e depois retorna a soma de todos os valores multiplicados.
  const numberOfEntrants = countEntrants(entrants);
  if (numberOfEntrants === 0) {
    return 0;
  }

  const { adult, senior, child } = prices;
  const adults = numberOfEntrants.adult * adult;
  const seniors = numberOfEntrants.senior * senior;
  const childs = numberOfEntrants.child * child;
  return adults + seniors + childs;
}

module.exports = { calculateEntry, countEntrants };
