const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  // alterei a logica aqui... deu pra diminuir aquele codigo em um objeto.
  return {
    adult: entrants.filter((peoples) => peoples.age >= 18 && peoples.age < 50).length,
    senior: entrants.filter((peoples) => peoples.age >= 50).length,
    child: entrants.filter((peoples) => peoples.age < 18).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) { // condicao para retornar 0 (se entrants for indefinido ou o tamanho da array retornada for 0)
    return 0;
  }
  const individual = countEntrants(entrants);

  const adultValue = prices.child * individual.adult;
  const seniorValue = prices.adult * individual.senior;
  const childValue = prices.child * individual.child;

  return adultValue + seniorValue + childValue;
}

module.exports = { calculateEntry, countEntrants };

// Gracas ao Geovanni Cardoso pude entender melhor esse requisito.
// Link para o repositorio dele https://github.com/tryber/sd-015-b-project-zoo-functions/tree/Geovanni-Cardoso-zoo-functions-project
